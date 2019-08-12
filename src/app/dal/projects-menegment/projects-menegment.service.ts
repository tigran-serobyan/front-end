import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {HttpRequestService} from '../http-request/http-request.service';

@Injectable()
export class ProjectsManagementService {


  constructor(private http: HttpClient,
              private httpRequestService: HttpRequestService,
              public router: Router) {
  }

  newProject(projectName: string, requiredLocales) {
    return this.httpRequestService.post('api/projects', {key: projectName, list: requiredLocales});
  }

  getProjects() {
    return this.httpRequestService.get('api/admin/projects');
  }

  getActiveUsersProjects() {
    return this.httpRequestService.get('api/projects/loggedIn');
  }

  saveProjectChanges(key, owners) {
    return this.httpRequestService.put('api/admin/projects/update', {key, list: owners});
  }

  deleteProject(key) {
    return this.httpRequestService.delete(`api/projects?key=${key}`);
  }

  getProjectInfo(key) {
    return this.httpRequestService.get(`api/projects?key=${key}`);
  }

  addNewTabRow(tabName, data) {
    return this.httpRequestService.post(`api/${tabName}`, data,);
  }

  getLocales() {
    return this.httpRequestService.get('api/locales');
  }
}
