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
        const accounts = await prisma.account.findMany({
          where: {
            userId: session.user.id,
          },
          include: {
            transactions: {
              orderBy: {
                date: 'desc',
              },
              take: 5,
            },
          },
        });

        res.status(200).json(accounts);
      } catch (error) {
        console.error('Ошибка получения счетов:', error);
        res.status(500).json({ message: 'Внутренняя ошибка сервера' });
      }
      break;

    case 'POST':
      try {
        const { type, name, description, currency } = req.body;

        if (!type || !name) {
          return res.status(400).json({ message: 'Отсутствуют обязательные поля' });
        }

        const account = await prisma.account.create({
          data: {
            userId: session.user.id,
            type,
            name,
            description,
            currency: currency || 'USD',
          },
        });

        res.status(201).json(account);
      } catch (error) {
        console.error('Ошибка создания счета:', error);
        res.status(500).json({ message: 'Внутренняя ошибка сервера' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Метод ${req.method} не разрешен`);
  }
} 