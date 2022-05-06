import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
}
