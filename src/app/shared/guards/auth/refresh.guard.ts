import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RefreshGuard {
  constructor(private authService: AuthService) {}
  canLoad() {
    return this.authService.getIsRefreshCalledListener().pipe(
      take(1),
      switchMap((isCalled) => {
        if (!isCalled) {
          return this.authService.refresh().pipe(
            take(1),
            switchMap(() => {
              return of(true);
            })
          );
        }
        return of(true);
      }),
      catchError(() => {
        return of(true);
      })
    );
  }
}
