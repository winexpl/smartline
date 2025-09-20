import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssistentService {
  constructor() { }

  public parse(query: string): Observable<any> {

  }

  public searchArticles(article: string) {
    
  }
}
