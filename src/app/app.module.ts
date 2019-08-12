import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './pages/account/login/login.component';
import {PageNotFoundComponent} from './pages/core/page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app-routing';
import {UserMainLayoutComponent} from './pages/core/user-main-layout/user-main-layout.component';
import {HttpClientModule} from '@angular/common/http';
import {AccountService} from './dal/account/account.service';
import {NoAuthGuardService} from './global/guards/no-auth-guard.service';
import {DropdownMenuComponent} from './pages/core/user-main-layout/dropdown/dropdown-menu.component';
import {BackgroundCubesAnimateComponent} from './global/components/background-cubes-animate/background-cubes-animate.component';
import {UsersControlComponent} from './pages/user-menegment/users-control/users-control.component';
import {ProjectsControlComponent} from './pages/projects-menegment/projects-control/projects-control.component';
import {UserManagementService} from './dal/user-menegment/user-menegment.service';
import {ProjectsManagementService} from './dal/projects-menegment/projects-menegment.service';
import {MessageBoxComponent} from './global/components/message-box/message-box.component';
import {ActivateAccountComponent} from './pages/account/activate-account/activate-account.component';
import {AlertService} from './dal/alert-message/alert.service';
import {ManagerMainLayoutComponent} from './pages/core/manager-main-layout/manager-main-layout.component';
import {RoleGuardServiceAdmin, RoleGuardServiceManager} from './global/guards/role-guard.service';
import {HttpRequestService} from './dal/http-request/http-request.service';
import {CookieService} from 'ngx-cookie-service';
import {ProjectControlComponent} from './pages/projects-menegment/project-control/project-control.component';
import {BannersComponent} from './pages/projects-menegment/project-control/banners/banners.component';
import {TableGeneratorComponent} from './global/components/table-generator/table-generator.component';
import {ResourcesComponent} from './pages/projects-menegment/project-control/resources/resources.component';
import {NewsComponent} from './pages/projects-menegment/project-control/news/news.component';
import {BranchesComponent} from './pages/projects-menegment/project-control/branches/branches.component';
import {SmsTemplatesComponent} from './pages/projects-menegment/project-control/smsTemplates/smsTemplates.component';
import {EmailTemplatesComponent} from './pages/projects-menegment/project-control/emailTemplates/emailTemplates.component';
import {ImageUploadsComponent} from './pages/projects-menegment/project-control/imageUploads/imageUploads.component';
import {IconUploadsComponent} from './pages/projects-menegment/project-control/iconUploads/iconUploads.component';
import {AddNewFormGeneratorComponent} from './global/components/add-new-form-generator/add-new-form-generator.component';
import {NewResourcesComponent} from './pages/projects-menegment/project-control/resources/new-resource/new-resources.component';
import {NewBannerComponent} from './pages/projects-menegment/project-control/banners/new-banner/new-banner.component';
import {NewNewsComponent} from './pages/projects-menegment/project-control/news/new-news/new-news.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import {CkeditorComponent} from './global/components/add-new-form-generator/ckeditor/ckeditor.component';

@NgModule({
  declarations: [
    AppComponent,
    UserMainLayoutComponent,
    LoginComponent,
    PageNotFoundComponent,
    DropdownMenuComponent,
    BackgroundCubesAnimateComponent,
    UsersControlComponent,
    ProjectsControlComponent,
    MessageBoxComponent,
    ActivateAccountComponent,
    ManagerMainLayoutComponent,
    ProjectControlComponent,
    TableGeneratorComponent,
    ResourcesComponent,
    BannersComponent,
    NewsComponent,
    BranchesComponent,
    SmsTemplatesComponent,
    EmailTemplatesComponent,
    ImageUploadsComponent,
    IconUploadsComponent,
    AddNewFormGeneratorComponent,
    NewResourcesComponent,
    NewBannerComponent,
    NewNewsComponent,
    CkeditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CKEditorModule,
    FormsModule
  ],
  providers: [
    AccountService,
    NoAuthGuardService,
    UserManagementService,
    ProjectsManagementService,
    AlertService,
    RoleGuardServiceAdmin,
    RoleGuardServiceManager,
    HttpRequestService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
