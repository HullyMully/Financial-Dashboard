import Link from 'next/link';
import { FiLock, FiDollarSign, FiPieChart, FiTrendingUp } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Financial Dashboard
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Take control of your financial future with our powerful and intuitive dashboard
          </p>
          <div className="space-x-4">
            <Link 
              href="/auth/signin" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 inline-flex items-center"
            >
              <FiLock className="mr-2" />
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="bg-transparent border-2 border-blue-600 hover:bg-blue-600/10 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 inline-flex items-center"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl transform transition-all hover:scale-105 border border-gray-700/30">
            <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <FiLock className="text-2xl text-blue-400" />
            </div>
            <h2 className="text-xl font-bold mb-4 text-white">Secure Authentication</h2>
            <p className="text-gray-400">Bank-grade security protocols to protect your financial data and personal information</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl transform transition-all hover:scale-105 border border-gray-700/30">
            <div className="bg-emerald-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <FiDollarSign className="text-2xl text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold mb-4 text-white">Account Management</h2>
            <p className="text-gray-400">Manage multiple accounts, track balances, and monitor transactions in real-time</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl transform transition-all hover:scale-105 border border-gray-700/30">
            <div className="bg-purple-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <FiPieChart className="text-2xl text-purple-400" />
            </div>
            <h2 className="text-xl font-bold mb-4 text-white">Analytics & Reports</h2>
            <p className="text-gray-400">Comprehensive financial analytics and customizable reports for better insights</p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-800/20 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-blue-400">10k+</h3>
            <p className="text-gray-400 mt-2">Active Users</p>
          </div>
          <div className="bg-gray-800/20 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-emerald-400">$2M+</h3>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
          <div className="bg-gray-800/20 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-purple-400">99.9%</h3>
            <p className="text-gray-400 mt-2">Uptime</p>
          </div>
          <div className="bg-gray-800/20 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-pink-400">24/7</h3>
            <p className="text-gray-400 mt-2">Support</p>
          </div>
        </div>
      </div>
    </main>
  );
}
