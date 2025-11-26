import axios from 'axios';
import { TransactionData } from '@/types/transactions';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('NO API_URL DEFINED');
}

export const fetchTransactions = async (): Promise<TransactionData> => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error; 
  }
};
