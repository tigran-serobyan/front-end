import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ArrayType} from '@angular/compiler';
import {ProjectsManagementService} from '../../../dal/projects-menegment/projects-menegment.service';
import {RoleGuardServiceAdmin, RoleGuardServiceManager} from '../../../global/guards/role-guard.service';
import {UserManagementService} from '../../../dal/user-menegment/user-menegment.service';

@Component({
  selector: 'app-users-control',
  templateUrl: './projects-control.component.html',
  styleUrls: ['./projects-control.component.css']
})
export class ProjectsControlComponent implements OnInit {


  projects: any;
  users: any;
  canCreateNewProject: boolean;
  newProjectName: string;
  dropdown: any;
  isAdmin: boolean;
  languagesObject = {};

  constructor(private projectsManagementService: ProjectsManagementService,
              private userManagementService: UserManagementService,
              private roleGuardServiceManager: RoleGuardServiceManager,
              private roleGuardServiceAdmin: RoleGuardServiceAdmin) {
  }

  ngOnInit() {
    if (this.roleGuardServiceManager.canActivate()) {
      this.canCreateNewProject = true;
      this.isAdmin = false;
    } else if (this.roleGuardServiceAdmin.canActivate()) {
      this.canCreateNewProject = false;
      this.isAdmin = true;
    }
    this.getProjectsAndUsers();
  }

  getProjectsAndUsers() {
    if (this.isAdmin) {
      this.projectsManagementService.getProjects().subscribe(data => {
        this.projects = data.okResponse.list;
        this.userManagementService.getAvailableUsersData().subscribe(usersData => {
          this.users = [];
          for (const i in usersData.okResponse.list) {
            this.users.push(usersData.okResponse.list[i].username);
          }
        }, err => {
          console.log(err);
        });
      }, err => {
        console.log(err);
      });
    } else {
      this.projectsManagementService.getActiveUsersProjects().subscribe(data => {
        this.projects = data.okResponse.list;
        this.userManagementService.getAvailableUsersData().subscribe(usersData => {
          this.users = [];
          for (const i in usersData.okResponse.list) {
            this.users.push(usersData.okResponse.list[i].username);
          }
        }, err => {
          console.log(err);
        });
      }, err => {
        console.log(err);
      });
    }
  }

  isNotOwner(user, owners) {
    for (const owner of owners) {
      if (user === owner) {
        return false;
      }
    }
    return true;
  }

  addOwner(user, project) {
    for (const i in this.projects) {
      if (this.projects[i].key === project.key) {
        this.projects[i].owners.push(user);
      }
    }
  }

  deleteOwner(user, project) {
    for (const i in this.projects) {
      if (this.projects[i].key === project.key) {
        for (const j in this.projects[i].owners) {
          if (this.projects[i].owners[j] === user) {
            this.projects[i].owners.splice(j, 1);
          }
        }
      }
    }
  }

  onNewProject() {
    const languagesArray = [];
    for (const i in this.languagesObject) {
      if (this.languagesObject[i]) {
        languagesArray.push(i);
      }
    }
    this.projectsManagementService.newProject(this.newProjectName, languagesArray).subscribe(data => {
      console.log(data);
    });
  }

  onInputProjectName(event) {
    this.newProjectName = event.target.value;
  }

  changeLanguage(event) {
    this.languagesObject[event.target.value] = event.target.checked;
  }

  saveProject(index) {
    if (this.isAdmin) {
      this.projectsManagementService.saveProjectChanges(this.projects[index].key, this.projects[index].owners).subscribe(data => {
        this.getProjectsAndUsers();
      }, err => {
        console.log(err);
      });
    }
  }

  deleteProject(index) {
    if (!this.isAdmin) {
      this.projectsManagementService.deleteProject(this.projects[index].key).subscribe(data => {
        this.getProjectsAndUsers();
      }, err => {
        console.log(err);
      });
    }
  }
}
