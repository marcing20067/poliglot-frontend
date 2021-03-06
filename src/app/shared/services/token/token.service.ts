import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { TokenData } from '../../models/token-data.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private isAuth$ = new BehaviorSubject(false);
  private tokenData: Partial<TokenData> = {};

  getAccessToken() {
    return this.tokenData.accessToken;
  }

  changeIsAuth(isAuth: boolean) {
    this.isAuth$.next(isAuth);
  }

  getIsAuthListener() {
    return this.isAuth$.asObservable().pipe(distinctUntilChanged());
  }

  isAuth() {
    const isTokensValidity = this.checkTokensValidity();
    if (!isTokensValidity) {
      this.clearTokenData();
    }
    this.isAuth$.next(isTokensValidity);
    return isTokensValidity;
  }

  private checkTokensValidity() {
    const now = Date.now();
    const isAccessTokenValid =
      (this.tokenData.accessTokenEndValidity || 0) > now;
    if (isAccessTokenValid) {
      return true;
    }
    return false;
  }

  clearTokenData() {
    this.tokenData = {};
    localStorage.clear();
  }

  setTokenData(newData: { accessToken: string; accessTokenExpiresIn: number }) {
    const TIME_UNTIL_VALIDATION_IN_MINUTES = 3;
    const now = Date.now();

    const accessTokenEndValidity =
      now +
      newData.accessTokenExpiresIn -
      TIME_UNTIL_VALIDATION_IN_MINUTES * 60000;

    this.tokenData = {
      accessToken: newData.accessToken,
      accessTokenEndValidity,
    };
  }
}
