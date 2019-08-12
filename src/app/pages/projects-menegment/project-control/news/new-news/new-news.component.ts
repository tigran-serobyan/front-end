import {Component, Input} from '@angular/core';
import {ProjectsManagementService} from '../../../../../dal/projects-menegment/projects-menegment.service';
import {ActivatedRoute} from '@angular/router';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-new-banner',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.css']
})
export class NewNewsComponent {
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
          placeholder: 'Title',
          name: 'title',
          translating: true
        },
        {
          type: 'input',
          inputType: 'editBox',
          placeholder: 'Body',
          name: 'body',
          translating: true

        },
        {
          type: 'input',
          inputType: 'file',
          placeholder: 'Image',
          name: 'image',
          translating: true
        },
        {
          type: 'input',
          inputType: 'text',
          placeholder: 'Image Caption',
          name: 'imageCaption',
          translating: true
        },
        {
          type: 'input',
          inputType: 'listEditor',
          placeholder: 'List',
          name: 'listEditor',
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
    console.log(event);
    // event.projectKey = this.projectKey;
    // const formData = new FormData();
    // for (const key in event) {
    //   if (event.key) {
    //     if (key === 'map') {
    //       for (const l in event.map) {
    //         if (event.map[l]) {
    //           for (const i in event.map[l]) {
    //             if (event.map[l][i]) {
    //               formData.append(`${i}-${l}`, event.map[l][i]);
    //             }
    //           }
    //         }
    //       }
    //     } else {
    //       formData.append(key, event[key]);
    //     }
    //   }
    // }
    // this.projectsManagementService.addNewTabRow('banners', formData).subscribe(data => {
    //   console.log(data);
    // }, err => {
    //   console.log(err);
    // });
  }
}
