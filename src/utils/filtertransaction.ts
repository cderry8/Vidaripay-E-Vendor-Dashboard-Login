import { Transaction } from "@/types/transactions";

export function filterTransactions(
  transactions: Transaction[],
  status: "All" | "success" | "pending" | "failed"
): Transaction[] {
  if (status === "All") return transactions;
  return transactions.filter(tx => tx.status === status);
}
