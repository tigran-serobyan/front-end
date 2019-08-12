import {Component} from '@angular/core';
import {AccountService} from '../../../dal/account/account.service';

@Component({
  selector: 'app-user-main-layout',
  templateUrl: './user-main-layout.component.html',
  styleUrls: ['./user-main-layout.component.css']
})
export class UserMainLayoutComponent {
  constructor(private accountService: AccountService) {
  }

  list = [
    {
      icon: 'fas fa-users',
      name: 'Users',
      link: 'admin/users'
    },
    {
      icon: 'fas fa-folder',
      name: 'Projects',
      link: 'admin/projects'
    }
  ];

  logout() {
    this.accountService.logout();
  }
}
