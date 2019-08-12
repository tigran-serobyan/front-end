import {Component, OnInit} from '@angular/core';

import {AccountService} from '../../../dal/account/account.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {AlertService} from '../../../dal/alert-message/alert.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  username = '';
  data: {
    password?: string,
    passwordConfirm?: string
  } = {};
  errorMessage;
  activateToken = null;

  constructor(private accountService: AccountService,
              private activatedRoute: ActivatedRoute,
              public router: Router,
              private alertService: AlertService) {

  }

  ngOnInit() {
    this.activateToken = this.activatedRoute.snapshot.params.activateToken;
    this.accountService.getEmailAddressByToken(this.activateToken).subscribe(data => {
      if (data.okResponse) {
        this.username = data.okResponse.list[0].username;
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  onFormDataChange(event, name) {
    this.data[name] = event.target.value;
  }

  onRegister() {
    if (this.data.password === this.data.passwordConfirm && this.data.password.length > 0) {
      const requestData = {
        token: this.activateToken,
        password: this.data.password,
      };
      this.accountService.register(requestData).subscribe(data => {
        this.accountService.login({username: this.username, password: this.data.password});
        //     .subscribe(data => {
        //     // this.router.navigate(['/']);
        //   });
        // }, err => {
        //
        // }
        // )
      });
    }
  }
}
