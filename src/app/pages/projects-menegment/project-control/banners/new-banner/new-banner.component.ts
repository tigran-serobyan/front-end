import {Component, Input} from '@angular/core';
import {ProjectsManagementService} from '../../../../../dal/projects-menegment/projects-menegment.service';
import {ActivatedRoute} from '@angular/router';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-new-banner',
  templateUrl: './new-banner.component.html',
  styleUrls: ['./new-banner.component.css']
})
export class NewBannerComponent {
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
          type: 'input',
          placeholder: 'placement',
          name: 'placement',
          translating: false
        },
        {
          type: 'input',
          inputType: 'number',
          placeholder: 'order',
          name: 'ordering',
          translating: false

        },
        {
          type: 'input',
          inputType: 'number',
          placeholder: 'rotation',
          name: 'rotation',
          translating: false

        },
        {
          type: 'input',
          inputType: 'file',
          placeholder: 'image',
          name: 'image',
          translating: true

        },
        {
          type: 'input',
          inputType: 'text',
          placeholder: 'url',
          name: 'url',
          translating: true

        },
        {
          type: 'input',
          inputType: 'text',
          placeholder: 'Deep link',
          name: 'deepLink',
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
    this.projectKey = this.activatedRoute.snapshot.params.projectKey;
  }

  save(event) {
    event.projectKey = this.projectKey;
    const formData = new FormData();
    for (const key in event) {
      if (event.key) {
        if (key === 'map') {
          for (const l in event.map) {
            if (event.map[l]) {
              for (const i in event.map[l]) {
                if (event.map[l][i]) {
                  formData.append(`${i}-${l}`, event.map[l][i]);
                }
              }
            }
          }
        } else {
          formData.append(key, event[key]);
        }
      }
    }
    this.projectsManagementService.addNewTabRow('banners', formData).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
}
