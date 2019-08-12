import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon-uploads',
  templateUrl: './iconUploads.component.html',
  styleUrls: ['./iconUploads.component.css']
})
export class IconUploadsComponent {
  @Input() list;
  columns = [
    {
      name: 'Key',
      key: 'key'
    },
    {
      name: 'Image',
      key: 'image',
      type: 'image tag',
      height: 70
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
