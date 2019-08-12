import {Component, Input} from '@angular/core';
import {ProjectsManagementService} from '../../../../../dal/projects-menegment/projects-menegment.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-resources',
  templateUrl: './new-resources.component.html',
  styleUrls: ['./new-resources.component.css']
})
export class NewResourcesComponent {
  @Input() list;
  languages = ['eng', 'hy', 'ru'];
  projectKey: string;
  inputs = [
    {
      component: 'key',
      placeholder: 'key'
    },
    {
      component: 'value',
      inputs: [
        {
          type: 'textarea',
          placeholder: 'value',
          name: 'value',
          translating: true
        }
      ]
    },
    {
      component: 'button',
      value: 'Save'
    }
  ];

  constructor(private projectsManagementService: ProjectsManagementService,
              private activatedRoute: ActivatedRoute) {
    this.projectsManagementService.getLocales().subscribe(data => {
      this.languages = [];
      for (const l of data.okResponse.list) {
        this.languages.push(l.locale);
      }
    });
    this.projectKey = this.activatedRoute.snapshot.params.projectKey;
    this.projectsManagementService.getProjectInfo(this.projectKey).subscribe(data => {
    });
  }

  save(event) {
    event.projectKey = this.projectKey;
    this.projectsManagementService.addNewTabRow('resources', event).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
}
