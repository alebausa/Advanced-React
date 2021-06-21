export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  };
  // check if it's a clean amount
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }
  // Default in JS and Node
  const formatter = Intl.NumberFormat('en-US', options);

  return formatter.format(amount / 100);
}
