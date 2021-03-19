import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    token = 'ba57cb21fa7c5cc75d878a13c2da1ada364d965a1edc9a26dff28bdae64694b7';

    constructor() {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        request = request.clone({
        setHeaders: {
                Authorization: `Bearer ${this.token}`
            }
        });
    return next.handle(request);
  }
}
