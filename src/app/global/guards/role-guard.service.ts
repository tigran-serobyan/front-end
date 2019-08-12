import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AccountService} from '../../dal/account/account.service';
import {Observable} from 'rxjs';

@Injectable()
export class RoleGuardServiceManager implements CanActivate {

  constructor(public accountService: AccountService,
              public router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.accountService.getRole() === 'ROLE_MANAGER') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

@Injectable()
export class RoleGuardServiceAdmin implements CanActivate {

  constructor(public accountService: AccountService,
              public router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.accountService.getRole() === 'ROLE_ADMIN') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
