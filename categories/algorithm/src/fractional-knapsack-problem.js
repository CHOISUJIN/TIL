function solution(capacity, items) {
  items.sort((a, b) => b[1] / b[0] - a[1] / a[0]);

  let totalValue = 0;

  for (let i = 0; i < items.length; i++) {
    const [value, weight] = items[i];

    if (capacity >= weight) {
      capacity -= weight;
      totalValue += value;
    } else {
      totalValue += (value / weight) * capacity;
      break; // Knapsack is full
    }
  }

  return totalValue;
}

const capacity = 50; // Maximum capacity of the knapsack
const items = [
  [60, 10], // [value, weight]
  [100, 20],
  [120, 30],
];

solution(capacity, items);
