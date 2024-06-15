export function totalPricePayment(products) {
  return products.reduce((acc, item) => acc + item.amount, 0);
}
