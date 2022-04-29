import { Position } from './position';

export enum Tier {
  LOW = 'LOW',
  MID = 'MID',
  HIGH = 'HIGH'
}

export class Player {
  constructor(private name: string, public strength: number, private position?: Position) {
  }

  get tier(): Tier {
    if (this.strength <= 4) {
      return Tier.LOW;
    } else if (this.strength <= 7) {
      return Tier.MID;
    } else {
      return Tier.HIGH;
    }
  }
}

