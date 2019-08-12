import {Injectable} from '@angular/core';

import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {HttpRequestService} from '../http-request/http-request.service';
import {AccountService} from '../account/account.service';

@Injectable()
export class UserManagementService {


  constructor(private httpRequestService: HttpRequestService, public router: Router,
              private accountService: AccountService) {
  }

  inviteUser(email: string) {
    return this.httpRequestService.post(`api/admin/invite?email=${email}`, email);
  }

  resendRequest(username) {
    return this.httpRequestService.post(`api/admin/invite?email=${username}`, username);
  }

  getUsersData() {
    return this.httpRequestService.get('api/admin/users');
  }

  getAvailableUsersData() {
    return this.httpRequestService.get('api/admin/availableUsers');
  }

  deleteUser(username) {
    return this.httpRequestService.delete(`api/admin/managers/${username}`);
  }
}
