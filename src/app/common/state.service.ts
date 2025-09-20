import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StateService {
  public currentPrefill = signal<any>(null);
  public lastQuery = signal<string>('');
  public searchResults = signal<any>(null);
}