function amountFormat(amount, currency) {
  if (typeof currency === 'undefined') {
    currency = "$";
  }
  return currency + Number(amount).toFixed(2);
}
