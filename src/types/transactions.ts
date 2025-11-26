// types/transactions.ts
export type TransactionType = 'cash_in' | 'cash_out' | 'utility' | 'payment';

export type TransactionStatus = 'success' | 'pending' | 'failed';

export interface Transaction {
  id: string; 
  date: string;
  recipient: string; 
  amount: number; 
  currency: string;
  type: TransactionType;
  status: TransactionStatus; 
}

export interface TransactionData {
  total_balance: number; 
  currency: string;
  transactions: Transaction[]; 
}
