# Financial Dashboard

A modern financial management application built with Next.js, Prisma, and PostgreSQL.

## Author
DavidTsykunov

## Features

- 🔐 Secure user authentication
- 💰 Account management
- 📊 Transaction tracking
- 💱 Multi-currency support
- 📱 Responsive design

## Tech Stack

- **Frontend:** Next.js, React, TailwindCSS, Redux
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** NextAuth.js

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/HullyMully/Financial-Dashboard.git
```

2. Install dependencies
```bash
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