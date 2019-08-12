import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/account/login/login.component';
import {PageNotFoundComponent} from './pages/core/page-not-found/page-not-found.component';
import {RoleGuardServiceAdmin, RoleGuardServiceManager} from './global/guards/role-guard.service';
import {NoAuthGuardService} from './global/guards/no-auth-guard.service';
import {UserMainLayoutComponent} from './pages/core/user-main-layout/user-main-layout.component';
import {ProjectsControlComponent} from './pages/projects-menegment/projects-control/projects-control.component';
import {UsersControlComponent} from './pages/user-menegment/users-control/users-control.component';
import {activateRoutes} from '@angular/router/src/operators/activate_routes';
import {ActivateAccountComponent} from './pages/account/activate-account/activate-account.component';
import {ManagerMainLayoutComponent} from './pages/core/manager-main-layout/manager-main-layout.component';
import {ProjectControlComponent} from './pages/projects-menegment/project-control/project-control.component';
import {NewResourcesComponent} from './pages/projects-menegment/project-control/resources/new-resource/new-resources.component';
import {NewBannerComponent} from './pages/projects-menegment/project-control/banners/new-banner/new-banner.component';
import {NewNewsComponent} from './pages/projects-menegment/project-control/news/new-news/new-news.component';
// import { MainLayoutComponent } from './core/main-layout/main-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'admin',
    component: UserMainLayoutComponent,
    children: [
      {
        path: 'users',
        component: UsersControlComponent,
      },
      {
        path: 'projects',
        component: ProjectsControlComponent,
      },
    ]
  },
  {
    path: 'manager',
    component: ManagerMainLayoutComponent,
    children: [
      {
        path: 'projects',
        component: ProjectsControlComponent,
      },
      {
        path: 'project/:projectKey',
        component: ProjectControlComponent,
      },
      {
        path: 'project/resource/new/:projectKey',
        component: NewResourcesComponent,
      },
      {
        path: 'project/banner/new/:projectKey',
        component: NewBannerComponent,
      },
      {
        path: 'project/news/new/:projectKey',
        component: NewNewsComponent,
      },
      {
        path: 'project/:projectKey/:tabName',
        component: ProjectControlComponent,
      }
    ]
  },
  {
    path: 'login',
    canActivate: [NoAuthGuardService],
    component: LoginComponent,
  },
  {
    path: 'account/activate/:activateToken',
    component: ActivateAccountComponent
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/page-not-found'
  }
];

