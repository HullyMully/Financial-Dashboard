import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Financial Dashboard</h1>
          <p className="text-xl text-gray-300 mb-8">
            Управляйте своими финансами эффективно и безопасно
          </p>
          <div className="space-x-4">
            <Link 
              href="/auth/signin" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Войти
            </Link>
            <Link
              href="/auth/register"
              className="bg-transparent border-2 border-blue-600 hover:bg-blue-600/10 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Регистрация
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">🔐 Безопасная аутентификация</h2>
            <p className="text-gray-300">Защищенный доступ к вашим финансовым данным</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">💰 Управление счетами</h2>
            <p className="text-gray-300">Контролируйте все ваши счета в одном месте</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">📊 Отслеживание транзакций</h2>
            <p className="text-gray-300">Анализируйте ваши доходы и расходы</p>
          </div>
        </div>
      </div>
    </main>
  );
} 