import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useAppDispatch, useAppSelector } from '../../store';
import Dashboard from '../../components/dashboard/Dashboard';
import { setTransactions, setBalanceHistory, updateTotalBalance, updateMonthlyIncome, updateMonthlyExpenses } from '../../store/slices/finances';
import { prisma } from '../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  // Здесь будет логика получения данных из базы данных
  const mockData = {
    transactions: [
      {
        id: '1',
        type: 'INCOME',
        amount: 5000,
        category: 'Зарплата',
        date: '2024-03-20',
      },
      {
        id: '2',
        type: 'EXPENSE',
        amount: 1000,
        category: 'Продукты',
        date: '2024-03-19',
      },
    ],
    balanceHistory: [
      { date: '2024-03-15', balance: 3000 },
      { date: '2024-03-16', balance: 3500 },
      { date: '2024-03-17', balance: 3200 },
      { date: '2024-03-18', balance: 3800 },
      { date: '2024-03-19', balance: 2800 },
      { date: '2024-03-20', balance: 7800 },
    ],
  };

  return {
    props: {
      initialData: mockData,
    },
  };
};

interface DashboardPageProps {
  initialData: {
    transactions: Array<{
      id: string;
      type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
      amount: number;
      category: string;
      date: string;
    }>;
    balanceHistory: Array<{
      date: string;
      balance: number;
    }>;
  };
}

const DashboardPage = ({ initialData }: DashboardPageProps) => {
  const dispatch = useAppDispatch();
  const { transactions, balanceHistory, totalBalance, monthlyIncome, monthlyExpenses } = useAppSelector(
    (state) => state.finances
  );

  useEffect(() => {
    dispatch(setTransactions(initialData.transactions));
    dispatch(setBalanceHistory(initialData.balanceHistory));

    // Вычисляем общий баланс и месячные показатели
    const total = initialData.transactions.reduce((acc, transaction) => {
      if (transaction.type === 'INCOME') {
        return acc + transaction.amount;
      } else if (transaction.type === 'EXPENSE') {
        return acc - transaction.amount;
      }
      return acc;
    }, 0);

    const monthly = initialData.transactions.reduce(
      (acc, transaction) => {
        const date = new Date(transaction.date);
        const currentDate = new Date();
        if (
          date.getMonth() === currentDate.getMonth() &&
          date.getFullYear() === currentDate.getFullYear()
        ) {
          if (transaction.type === 'INCOME') {
            acc.income += transaction.amount;
          } else if (transaction.type === 'EXPENSE') {
            acc.expenses += transaction.amount;
          }
        }
        return acc;
      },
      { income: 0, expenses: 0 }
    );

    dispatch(updateTotalBalance(total));
    dispatch(updateMonthlyIncome(monthly.income));
    dispatch(updateMonthlyExpenses(monthly.expenses));
  }, [dispatch, initialData]);

  return (
    <Dashboard
      balanceHistory={balanceHistory}
      recentTransactions={transactions}
      totalBalance={totalBalance}
      monthlyIncome={monthlyIncome}
      monthlyExpenses={monthlyExpenses}
    />
  );
};

export default DashboardPage; 