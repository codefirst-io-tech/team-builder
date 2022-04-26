import { Position } from './position';

export interface Player {
  name: string;
  strength: number;
  position?: Position;
}

