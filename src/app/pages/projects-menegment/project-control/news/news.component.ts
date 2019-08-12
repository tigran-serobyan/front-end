import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  @Input() list;
  columns = [
    {
      name: 'Key',
      key: 'key'
    },
    {
      name: 'Locales',
      key: 'locales'
    },
    {
      name: 'Title',
      key: 'title'
    },
    {
      name: 'Image',
      key: 'image',
      type: 'image tag',
      height: 100
    },
    {
      name: 'Image Caption',
      key: 'imgCaption'
    },
    {
      name: 'Body',
      key: 'body'
    },
    {
      name: 'Actions',
      key: 'action buttons',
      buttons: [
        {
          name: 'Edit',
          click: 'edit'
        },
        {
          name: 'Delete',
          click: 'delete'
        }
      ]
    }
  ];

  action(event) {
    console.log(event);
  }
}
