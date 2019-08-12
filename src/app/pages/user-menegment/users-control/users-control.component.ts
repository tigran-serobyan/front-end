import {Component} from '@angular/core';
import {UserManagementService} from '../../../dal/user-menegment/user-menegment.service';
import {ArrayType} from '@angular/compiler';
import {Router} from '@angular/router';
import {AlertService} from '../../../dal/alert-message/alert.service';

@Component({
  selector: 'app-users-control',
  templateUrl: './users-control.component.html',
  styleUrls: ['./users-control.component.css']
})
export class UsersControlComponent {
  users: any;

  constructor(private userManagementService: UserManagementService,
              private router: Router,
              private alertService: AlertService) {
    this.getUsersList();
  }

  mailRe = /^[a-zA-Z0-9][a-zA-Z0-9]*(([.-_][a-zA-Z0-9][a-zA-Z0-9]*)*[a-zA-Z0-9]*)*@[a-zA-Z0-9_-]*\.[a-zA-Z][a-zA-Z]*/;
  invitationMail = '';

  getUsersList() {
    this.userManagementService.getUsersData().subscribe((data) => {
      this.users = data.okResponse.list;
    });
  }

  onInputInvitationEmail(event) {
    this.invitationMail = event.target.value;
  }

  onUserInvitation() {
    if (this.mailRe.exec(this.invitationMail)) {
      this.userManagementService.inviteUser(this.invitationMail).subscribe((data) => {
        this.getUsersList();
        this.alertService.showAlert(`Your invitation sent to ${this.invitationMail}`, 'message', 3000);
      }, err => {
        this.alertService.showAlert(err.error, 'error', 3000);
      });
    } else {
      this.alertService.showAlert('You can\'t add user with this email', 'warning', 3000);
    }
  }

  onUserResendRequest(username) {
    this.userManagementService.resendRequest(username).subscribe((data) => {
      this.alertService.showAlert('Invitation resending', 'info', 3000);
      this.getUsersList();
    });

  }

  deleteUser(username) {
    this.userManagementService.deleteUser(username).subscribe(data => {
      this.getUsersList();
    }, err => {
      console.log(err);
    });
  }
}
