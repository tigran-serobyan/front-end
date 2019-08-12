import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AccountService} from '../../dal/account/account.service';
import {Observable} from 'rxjs';

@Injectable()
export class NoAuthGuardService implements CanActivate {

  constructor(public accountService: AccountService,
              public router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean  {
    if (!this.accountService.getRole()) {
      return true;
    }
    return false;
  }
}
