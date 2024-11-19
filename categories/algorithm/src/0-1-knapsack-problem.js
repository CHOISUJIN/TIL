function knapsack(values, weights, capacity) {
  /**
   * Solves the 0/1 Knapsack Problem using dynamic programming.
   *
   * @param {Array} values - Array of item values.
   * @param {Array} weights - Array of item weights.
   * @param {number} capacity - Maximum weight the knapsack can hold.
   * @returns {number} - Maximum value that can be obtained.
   */

  const n = values.length;
  // DP table with dimensions (n+1) x (capacity+1)
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  // Build the DP table
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        // Max of including or excluding the current item
        dp[i][w] = Math.max(
          dp[i - 1][w], // Exclude the item
          dp[i - 1][w - weights[i - 1]] + values[i - 1] // Include the item
        );
      } else {
        // Exclude the item
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // Maximum value for the given capacity
  return dp[n][capacity];
}

// Example usage:
const values = [60, 100, 120]; // Values of the items
const weights = [10, 20, 30]; // Weights of the items
const capacity = 50; // Maximum weight the knapsack can hold

console.log(knapsack(values, weights, capacity)); // Output: 220
