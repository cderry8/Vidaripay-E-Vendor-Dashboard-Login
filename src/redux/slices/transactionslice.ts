    // redux/slices/transactionslice.ts
    import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
    import { fetchTransactions } from '../api';
    import { TransactionData } from '@/types/transactions';

    interface TransactionsState {
    data: TransactionData | null;
    loading: boolean;
    error: string | null;
    }

    const initialState: TransactionsState = {
    data: null,
    loading: false,
    error: null,
    };

    export const loadTransactions = createAsyncThunk<TransactionData>(
    'transactions/loadTransactions',
    async () => {
        const transactions = await fetchTransactions();
        return transactions;
    }
    );

    const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadTransactions.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loadTransactions.fulfilled, (state, action: PayloadAction<TransactionData>) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(loadTransactions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch transactions';
        });
    },
    });

    export default transactionsSlice.reducer;
