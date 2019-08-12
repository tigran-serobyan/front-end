import {Component} from '@angular/core';
import {AccountService} from '../../../dal/account/account.service';
import {ProjectsManagementService} from '../../../dal/projects-menegment/projects-menegment.service';

@Component({
  selector: 'app-manager-main-layout',
  templateUrl: './manager-main-layout.component.html',
  styleUrls: ['./manager-main-layout.component.css']
})
export class ManagerMainLayoutComponent {
  projects;
  list = [
    {
      icon: 'fas fa-folder-open',
      name: 'Projects',
      link: 'manager/projects',
      dropdown: [
        {
          icon: '',
          name: '',
          link: '',
          dropdown: [
            {
              icon: '',
              name: '',
              link: ''
            }
          ]
        }
      ]
    }
  ];

  constructor(private accountService: AccountService,
              private projectsManagementService: ProjectsManagementService) {
    this.projectsManagementService.getActiveUsersProjects().subscribe(data => {
      this.projects = data.okResponse.list;
      const dropdown = [];
      for (const i in this.projects) {
        if (this.projects[i]) {
          const project = {
            icon: 'fas fa-file',
            name: this.projects[i].key,
            link: `manager/project/${this.projects[i].key}`,
            dropdown: [
              {
                icon: 'fas fa-language',
                name: 'Resources',
                link: `manager/project/${this.projects[i].key}/resources`
              },
              {
                icon: 'fas fa-flag',
                name: 'Banners',
                link: `manager/project/${this.projects[i].key}/banners`
              },
              {
                icon: 'fas fa-newspaper',
                name: 'News',
                link: `manager/project/${this.projects[i].key}/news`
              },
              {
                icon: 'fas fa-code-branch',
                name: 'Branches',
                link: `manager/project/${this.projects[i].key}/branches`
              },
              {
                icon: 'fas fa-at',
                name: 'Email templates',
                link: `manager/project/${this.projects[i].key}/emailTemplates`
              },
              {
                icon: 'fas fa-sms',
                name: 'SMS templates',
                link: `manager/project/${this.projects[i].key}/smsTemplates`
              },
              {
                icon: 'fas fa-image',
                name: 'Image uploads',
                link: `manager/project/${this.projects[i].key}/imageUploads`
              },
              {
                icon: 'fas fa-icons',
                name: 'Icon uploads',
                link: `manager/project/${this.projects[i].key}/iconUploads`
              }
            ]
          };
          dropdown.push(project);
        }
      }
      if (dropdown.length > 0) {
        this.list = [
          {
            icon: 'fas fa-folder-open',
            name: 'Projects',
            link: 'manager/projects',
            dropdown
          }
        ];
      }
    }, err => {
      console.log(err);
    });

  }

  logout() {
    this.accountService.logout();
  }


}
