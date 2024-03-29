import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { TokenService } from '../../services/token/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const isAuth = this.authService.isAuth();
    if (!isAuth) {
      return next.handle(req);
    }
    const accessToken = this.tokenService.getAccessToken();
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `${accessToken}`),
    });

    return next.handle(authReq);
  }
}
