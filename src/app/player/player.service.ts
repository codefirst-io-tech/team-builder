import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
}
