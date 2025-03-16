import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Не авторизован' });
  }

  switch (req.method) {
    case 'GET':
      try {
        const transactions = await prisma.transaction.findMany({
          where: {
            userId: session.user.id,
          },
          orderBy: {
            date: 'desc',
          },
          include: {
            account: true,
          },
        });

        res.status(200).json(transactions);
      } catch (error) {
        console.error('Ошибка получения транзакций:', error);
        res.status(500).json({ message: 'Внутренняя ошибка сервера' });
      }
      break;

    case 'POST':
      try {
        const { accountId, type, amount, category, description } = req.body;

        if (!accountId || !type || !amount || !category) {
          return res.status(400).json({ message: 'Отсутствуют обязательные поля' });
        }

        const transaction = await prisma.transaction.create({
          data: {
            userId: session.user.id,
            accountId,
            type,
            amount,
            category,
            description,
          },
        });

        // Обновляем баланс счета
        const account = await prisma.account.findUnique({
          where: { id: accountId },
        });

        if (account) {
          const newBalance = type === 'INCOME'
            ? account.balance + amount
            : type === 'EXPENSE'
              ? account.balance - amount
              : account.balance;

          await prisma.account.update({
            where: { id: accountId },
            data: { balance: newBalance },
          });
        }

        res.status(201).json(transaction);
      } catch (error) {
        console.error('Ошибка создания транзакции:', error);
        res.status(500).json({ message: 'Внутренняя ошибка сервера' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Метод ${req.method} не разрешен`);
  }
} 