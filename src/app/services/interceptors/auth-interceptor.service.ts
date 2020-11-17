import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {switchMap} from 'rxjs/operators';
import {User} from '../../components/auth/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  user: User;

  constructor(private store: Store<AppState>) {
    this.store.select('auth')
      .subscribe((state) => {
        this.user = state.user;
      });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    if (!this.user) {
      return next.handle(req);
    }
    const modifiedReq = req.clone({
      params: new HttpParams().set('auth', this.user.idToken)
    });
    return next.handle(modifiedReq);
  }
}

