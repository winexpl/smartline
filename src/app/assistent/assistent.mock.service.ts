import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MockAssistentService {
  parse(query: string): Observable<{ intent: string; action_type?: string; prefill?: Record<string, unknown> }> {
    const response = query.includes('справка')
      ? { intent: 'help' }
      : query.includes('котировочная сессия')
      ? { intent: 'action', action_type: 'quote_session', prefill: { item: 'Товар', qty: 10, region: 'Москва', deadline: '2025-09-30' } }
      : query.includes('обнови ИНН')
      ? { intent: 'profile_update', prefill: { inn: '1234567890' } }
      : { intent: 'unknown' };

    return of(response).pipe(delay(500));
  }

  getPrefill(token: string): Observable<{ token: string; data: Record<string, unknown> }> {
    const response = { token, data: { item: 'Товар', qty: 10, region: 'Москва', deadline: '2025-09-30' } };
    return of(response).pipe(delay(500));
  }
}