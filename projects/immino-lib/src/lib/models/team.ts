import { Player } from './player';

export class Team {
  id?: string;
  name?: string;
  members: Player[] = [];

  get totalMemberStrength(): number {
    return this.members?.reduce((acc, player) => acc + player?.strength, 0);
  }
}
