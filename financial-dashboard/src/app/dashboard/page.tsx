import { FiDollarSign, FiTrendingUp, FiPieChart, FiActivity } from 'react-icons/fi';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105">
              + Add Transaction
            </button>
            <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Total Balance</p>
                <h3 className="text-2xl font-bold text-white">$24,563.00</h3>
              </div>
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <FiDollarSign className="h-6 w-6 text-blue-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-green-400">
              <FiTrendingUp className="mr-1" />
              <span>+2.45%</span>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Monthly Income</p>
                <h3 className="text-2xl font-bold text-white">$8,350.00</h3>
              </div>
              <div className="bg-emerald-600/20 p-3 rounded-lg">
                <FiTrendingUp className="h-6 w-6 text-emerald-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-emerald-400">
              <FiTrendingUp className="mr-1" />
              <span>+4.75%</span>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Monthly Expenses</p>
                <h3 className="text-2xl font-bold text-white">$5,350.00</h3>
              </div>
              <div className="bg-red-600/20 p-3 rounded-lg">
                <FiPieChart className="h-6 w-6 text-red-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-red-400">
              <FiTrendingUp className="mr-1" />
              <span>+1.15%</span>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Investments</p>
                <h3 className="text-2xl font-bold text-white">$12,350.00</h3>
              </div>
              <div className="bg-purple-600/20 p-3 rounded-lg">
                <FiActivity className="h-6 w-6 text-purple-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-purple-400">
              <FiTrendingUp className="mr-1" />
              <span>+6.25%</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 p-6">
          <h2 className="text-xl font-bold text-white mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {[
              { name: 'Online Payment', amount: -250.00, date: '2024-03-16', category: 'Shopping' },
              { name: 'Salary Deposit', amount: 5000.00, date: '2024-03-15', category: 'Income' },
              { name: 'Restaurant', amount: -85.00, date: '2024-03-14', category: 'Food' },
              { name: 'Investment Return', amount: 320.00, date: '2024-03-13', category: 'Investment' },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${
                    transaction.amount > 0 ? 'bg-green-600/20' : 'bg-red-600/20'
                  }`}>
                    <FiDollarSign className={`h-4 w-4 ${
                      transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                    }`} />
                  </div>
                  <div>
                    <p className="text-white font-medium">{transaction.name}</p>
                    <p className="text-gray-400 text-sm">{transaction.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                  </p>
                  <p className="text-gray-400 text-sm">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 