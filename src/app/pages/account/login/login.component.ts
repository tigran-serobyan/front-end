import {Component} from '@angular/core';

import {AccountService, ILoginAction} from '../../../dal/account/account.service';
import {HttpClient} from '@angular/common/http';
import {AlertService} from '../../../dal/alert-message/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private accountService: AccountService,
              private alertService: AlertService) {
  }

  data: ILoginAction = {
    username: null,
    password: null
  };

  onFormDataChange(event, name) {
    this.data[name] = event.target.value;
  }

  onLogin() {

    this.accountService.login(this.data);
    //   .subscribe(data => {
    // }, err => {
    //   if (err.error.failResponse) {
    //     this.alertService.showAlert(err.error.failResponse.message, 'error', 2000);
    //   }
    // });
  }
}
