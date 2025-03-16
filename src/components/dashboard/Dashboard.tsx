import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DashboardProps {
  balanceHistory: {
    date: string;
    balance: number;
  }[];
  recentTransactions: {
    id: string;
    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
    amount: number;
    category: string;
    date: string;
  }[];
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
}

const Dashboard: FC<DashboardProps> = ({
  balanceHistory,
  recentTransactions,
  totalBalance,
  monthlyIncome,
  monthlyExpenses,
}) => {
  const chartData = {
    labels: balanceHistory.map((item) => item.date),
    datasets: [
      {
        label: 'Баланс',
        data: balanceHistory.map((item) => item.balance),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Финансовый дашборд</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Общий баланс</h3>
          <p className="text-3xl font-bold text-blue-600">
            ${totalBalance.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Доходы за месяц</h3>
          <p className="text-3xl font-bold text-green-600">
            ${monthlyIncome.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Расходы за месяц</h3>
          <p className="text-3xl font-bold text-red-600">
            ${monthlyExpenses.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">История баланса</h3>
          <div className="h-64">
            <Line data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Последние транзакции</h3>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{transaction.category}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <p
                  className={`font-semibold ${
                    transaction.type === 'INCOME'
                      ? 'text-green-600'
                      : transaction.type === 'EXPENSE'
                      ? 'text-red-600'
                      : 'text-blue-600'
                  }`}
                >
                  {transaction.type === 'INCOME' ? '+' : '-'}$
                  {Math.abs(transaction.amount).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 