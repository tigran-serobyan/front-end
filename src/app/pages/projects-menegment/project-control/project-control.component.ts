import {Component, OnInit} from '@angular/core';
import {ProjectsManagementService} from '../../../dal/projects-menegment/projects-menegment.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-project-control',
  templateUrl: './project-control.component.html',
  styleUrls: ['./project-control.component.css']
})
export class ProjectControlComponent implements OnInit {
  projectKey: string;
  tabName: string;
  languages = [];
  tabsList = [
    {
      name: 'Resources',
      link: 'resources'
    },
    {
      name: 'Banners',
      link: 'banners'
    },
    {
      name: 'News',
      link: 'news'
    },
    {
      name: 'Branches',
      link: 'branches'
    },
    {
      name: 'Email templates',
      link: 'emailTemplates'
    },
    {
      name: 'SMS templates',
      link: 'smsTemplates'
    },
    {
      name: 'Image uploads',
      link: 'imageUploads'
    },
    {
      name: 'Icon uploads',
      link: 'iconUploads'
    }
  ];
  resources = [];
  banners = [];
  news = [];
  branches = [];
  emailTemplates = [];
  smsTemplates = [];
  imageUploads = [];
  iconUploads = [];

  constructor(private projectsManagementService: ProjectsManagementService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.languages = [];
    this.projectsManagementService.getLocales().subscribe(data => {
      for (const l of data.okResponse.list) {
        if (l.locale === localStorage.getItem('language')) {
          this.languages.unshift(l.locale);
        } else {
          this.languages.push(l.locale);
        }
      }
    });
    this.projectKey = this.activatedRoute.snapshot.params.projectKey;
    this.getProjectInfo();
    if (this.activatedRoute.snapshot.params.tabName) {
      this.tabName = this.activatedRoute.snapshot.params.tabName;
    } else {
      this.router.navigate([`manager/project/${this.projectKey}/resources`]);
    }
  }

  getProjectInfo() {
    this.projectsManagementService.getProjectInfo(this.projectKey).subscribe(data => {
      for (const i in data.okResponse.map) {
        if (data.okResponse.map[i]) {
          if (localStorage.getItem('language')) {
            this[i] = data.okResponse.map[i][localStorage.getItem('language')];
          } else {
            this[i] = data.okResponse.map[i][this.languages[0]];
          }
          for (const r in this[i]) {
            if (this[i][r]) {
              this[i][r].locales = [localStorage.getItem('language')];
            }
          }
          for (const j in data.okResponse.map[i]) {
            if (data.okResponse.map[i][j] && j !== localStorage.getItem('language')) {
              for (const k of data.okResponse.map[i][j]) {
                for (const r in this[i]) {
                  if (k.key === this[i][r].key) {
                    this[i][r].locales.push(j);
                  }
                }
              }
            }
          }
        }
      }
    });
  }

  changeLanguage(event) {
    localStorage.setItem('language', event.target.value);
    this.ngOnInit();
  }
}
