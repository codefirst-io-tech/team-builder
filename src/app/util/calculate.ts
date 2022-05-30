export class Calculate {
  static getWeightedAvgStrengt(strengths:number[]): number {
    let sum = 0;
    for (let i = 0; i < strengths.length; i++) {
      let v = strengths[i] * (i + 1);
      sum += v;
    }
    const total = (strengths.length * (strengths.length + 1)) / 2;
    return sum / total;
  }
}
