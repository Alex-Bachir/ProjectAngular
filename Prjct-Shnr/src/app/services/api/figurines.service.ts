import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { figurine } from './figurine.interface';

@Injectable({
  providedIn: 'root'
})
export class FigurinesService {

  constructor(private http: HttpClient) { }

  // Il faudrait une méthode getNewFigurine qui ne renvoie QUE les nouvelles
  getAllFigurines(): Promise<figurine[]> {
    return firstValueFrom(this.http.get<figurine[]>("http://localhost:3000/figurines"));
  }

}
