import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
  id: string;
  accountId: string;
  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
  amount: number;
  category: string;
  description?: string;
  createdAt: string;
}

interface Account {
  id: string;
  name: string;
  balance: number;
  currency: string;
  transactions: Transaction[];
}

interface FinancesState {
  accounts: Account[];
  loading: boolean;
  error: string | null;
}

const initialState: FinancesState = {
  accounts: [],
  loading: false,
  error: null,
};

const financesSlice = createSlice({
  name: 'finances',
  initialState,
  reducers: {
    setAccounts: (state: FinancesState, action: PayloadAction<Account[]>) => {
      state.accounts = action.payload;
    },
    addAccount: (state: FinancesState, action: PayloadAction<Account>) => {
      state.accounts.push(action.payload);
    },
    updateAccount: (state: FinancesState, action: PayloadAction<Account>) => {
      const index = state.accounts.findIndex((account: Account) => account.id === action.payload.id);
      if (index !== -1) {
        state.accounts[index] = action.payload;
      }
    },
    deleteAccount: (state: FinancesState, action: PayloadAction<string>) => {
      state.accounts = state.accounts.filter((account: Account) => account.id !== action.payload);
    },
    addTransaction: (state: FinancesState, action: PayloadAction<Transaction>) => {
      const account = state.accounts.find((acc: Account) => acc.id === action.payload.accountId);
      if (account) {
        account.transactions.push(action.payload);
        
        // Обновляем баланс счета
        if (action.payload.type === 'INCOME') {
          account.balance += action.payload.amount;
        } else if (action.payload.type === 'EXPENSE') {
          account.balance -= action.payload.amount;
        }
        // Для переводов баланс обновляется отдельно через API
      }
    },
    setLoading: (state: FinancesState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state: FinancesState, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setAccounts,
  addAccount,
  updateAccount,
  deleteAccount,
  addTransaction,
  setLoading,
  setError,
} = financesSlice.actions;

export default financesSlice.reducer; 