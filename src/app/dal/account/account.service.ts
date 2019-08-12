import {Injectable} from '@angular/core';

import {first, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpRequestService} from '../http-request/http-request.service';
import {CookieService} from 'ngx-cookie-service';

export interface ILoginAction {
  username: string;
  password: string;
}

@Injectable()
export class AccountService {


  constructor(private httpRequestService: HttpRequestService,
              public router: Router,
              private cookieService: CookieService) {
  }

  setAuth(username, password, role) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('role', role);
  }

  getRole() {
    return localStorage.getItem('role');
  }

  login(data: ILoginAction) {
    return this.httpRequestService.postWithoutHttpOptionsHeaders('api/token', data).pipe(first()).subscribe(responseData => {
      if (responseData.okResponse) {
        this.cookieService.set('token', responseData.okResponse.list[0].token);
        this.httpRequestService.get('api/userByToken').subscribe(userRole => {
          console.log(userRole.okResponse);
          this.setAuth(
            data.username,
            data.password,
            userRole.okResponse.list[0].role
          );
          this.router.navigate(['/']);
        }, err => {
          console.log(err);
        });
      }
      return responseData;
    });
  }

  register(data) {
    return this.httpRequestService.post('api/account/activate', data);
  }

  logout() {
    this.httpRequestService.post('api/revoke', '').subscribe(data => {
      console.log(data);
    });
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
  }

  getEmailAddressByToken(token): Observable<any> {
    return this.httpRequestService.get(`api/account/activate/${token}`);
  }
}
