import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  public isConnected$: Subject<boolean> = new Subject();
  constructor() {
  }

  changeConnexion(state: boolean) {
    this.isConnected$.next(state);
  }

}



