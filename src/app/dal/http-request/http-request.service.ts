import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class HttpRequestService {

  httpOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.cookieService.get('token')
      })
    };
  }

  httpOptionsWithoutHeaders() {
    return {
      withCredentials: true
    };
  }

  constructor(private http: HttpClient,
              private cookieService: CookieService) {

  }

  postWithoutHttpOptionsHeaders(urlEndPoint, data) {
    const url = `${environment.backendUrl}${urlEndPoint}`;
    return this.http.post<any>(url, data, this.httpOptionsWithoutHeaders());
  }

  post(urlEndPoint, data) {
    const url = `${environment.backendUrl}${urlEndPoint}`;
    return this.http.post<any>(url, data, this.httpOptions());
  }

  get(urlEndPoint) {
    const url = `${environment.backendUrl}${urlEndPoint}`;
    return this.http.get<any>(url, this.httpOptions());
  }

  put(urlEndPoint, data) {
    const url = `${environment.backendUrl}${urlEndPoint}`;
    return this.http.put<any>(url, data, this.httpOptions());
  }

  delete(urlEndPoint) {
    const url = `${environment.backendUrl}${urlEndPoint}`;
    return this.http.delete(url, this.httpOptions());
  }
}
