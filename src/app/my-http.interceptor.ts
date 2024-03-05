import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken :any ={
      token : localStorage.getItem('userToken')
    }
    if(localStorage.getItem('userToken') != null){
      request = request.clone(
      {
        setHeaders:myToken
      }
      )
    }
    return next.handle(request);
  }
}
