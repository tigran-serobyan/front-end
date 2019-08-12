import {Component, OnInit} from '@angular/core';
import {RoleGuardServiceManager, RoleGuardServiceAdmin} from './global/guards/role-guard.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private roleGuardServiceManager: RoleGuardServiceManager,
              private roleGuardServiceAdmin: RoleGuardServiceAdmin,
              private router: Router) {

  }

  ngOnInit() {
    // if (window.location.href.split('/')[3] === 'account') {
    //   this.router.navigate([window.location.href.split(':4200')[1]]);
    // } else {
    //   if (this.roleGuardServiceManager.canActivate()) {
    //     if (window.location.href.split('/')[3] !== 'manager') {
    //       this.router.navigate(['/manager']);
    //     } else {
    //       this.router.navigate([window.location.href.split(':4200')[1]]);
    //     }
    //   } else if (this.roleGuardServiceAdmin.canActivate()) {
    //     if (window.location.href.split('/')[3] !== 'admin') {
    //       this.router.navigate(['/admin']);
    //     } else {
    //       this.router.navigate([window.location.href.split(':4200')[1]]);
    //     }
    //   } else {
    //     this.router.navigate(['/login']);
    //   }
    // }
  }
}
