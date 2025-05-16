import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FigurinesService } from '../services/api/figurines.service';
import { HttpClient } from '@angular/common/http';
import { figurine } from '../services/api/figurine.interface';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  providers: [HttpClient]
})
export class NewsComponent {
  private figurinesServices = inject(FigurinesService);
  public figurines: figurine[] = [];
  constructor() {
    this.figurinesServices.getAllFigurines().then(toto => {
      console.log(toto)
      this.figurines = toto;
    })
  }
}
