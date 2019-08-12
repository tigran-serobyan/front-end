import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent {
  @Input() list;
  @Input() languages;
  @Input() projectKey;
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
      name: 'Image',
      type: 'image tag',
      key: 'imageUrl',
      height: '100'
    },
    {
      name: 'Placement',
      key: 'placement'
    },
    {
      name: 'Order',
      key: 'order'
    },
    {
      name: 'Rotation',
      key: 'rotation',
      min: 0,
      max: 100
    },
    {
      name: 'Url',
      key: 'url'
    },
    {
      name: 'Deep link',
      key: 'deepLink'
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
