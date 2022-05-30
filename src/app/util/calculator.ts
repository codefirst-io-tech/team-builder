export class Calculator {
  static getWeightedAvgStrength(strengths: number[]): number {
    let sum = 0;
    for (let i = 0; i < strengths.length; i++) {
      let v = strengths[i] * (i + 1); // (i + 1) is the weight of the strength (for index 0 it is 1, for index 1 it is 2, etc.)
      sum += v;
    }
    const total = (strengths.length * (strengths.length + 1)) / 2; // sum of 1 to n (n*(n+1)/2)
    return sum / total;
  }
}
