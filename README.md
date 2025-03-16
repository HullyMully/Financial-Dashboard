# Financial Dashboard

A modern financial management application built with Next.js, Prisma, and PostgreSQL.

## Features

* 🔐 Secure Authentication
  - User-friendly login and registration forms
  - Password recovery functionality
  - Remember me option
* 💰 Account Management
  - Real-time balance tracking
  - Multiple account support
  - Transaction history
* 📊 Financial Analytics
  - Monthly income/expense tracking
  - Investment portfolio monitoring
  - Transaction categorization
* 💱 Modern UI/UX
  - Responsive design
  - Dark theme
  - Interactive components
  - Real-time updates

## Tech Stack

* **Frontend:**
  - Next.js 14
  - React
  - TailwindCSS
  - React Icons
* **Backend:**
  - Next.js API Routes
  - Prisma ORM
* **Database:**
  - PostgreSQL
* **Authentication:**
  - NextAuth.js

## Pages

1. **Landing Page** (/)
   - Modern gradient design
   - Feature showcase
   - Quick access to auth

2. **Authentication**
   - Sign In (/auth/signin)
   - Registration (/auth/register)
   - Password Recovery

3. **Dashboard** (/dashboard)
   - Financial overview
   - Recent transactions
   - Quick actions
   - Analytics widgets

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/HullyMully/Financial-Dashboard.git
```

2. Install dependencies
```bash
cd financial-dashboard
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Then update the `.env` file with your database credentials and other configuration.

4. Run database migrations
```bash
npx prisma migrate dev
```

5. Start the development server
```bash
npm run dev
```

## API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/signin` - User authentication
- `GET /api/accounts` - Get user accounts
- `POST /api/accounts` - Create new account
- `GET /api/transactions` - Get transactions
- `POST /api/transactions` - Create new transaction

## Contributing

Feel free to submit issues and pull requests.

## License

MIT License

## Author

DavidTsykunov 