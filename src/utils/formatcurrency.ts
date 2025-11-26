export function formatCurrency(amount: number, currency: string): string {
  const formattedAmount = amount.toLocaleString();

  switch (currency.toUpperCase()) {
    case "USD":
      return `$${formattedAmount}`;
    case "EUR":
      return `€${formattedAmount}`;
    case "RWF":
      return `${formattedAmount} RWF`;
    default:
      return `${formattedAmount} ${currency}`;
  }
}
