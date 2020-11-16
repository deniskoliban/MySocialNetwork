import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {UserService} from '../services/user.service';
import {State, Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    if (!this.userService.user) {
      return next.handle(req);
    }
    const modifiedReq = req.clone({
      params: new HttpParams().set('auth', this.userService.user.idToken)
    });
    return next.handle(modifiedReq);
  }
}
