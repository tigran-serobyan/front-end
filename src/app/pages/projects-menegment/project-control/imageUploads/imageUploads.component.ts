import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-uploads',
  templateUrl: './imageUploads.component.html',
  styleUrls: ['./imageUploads.component.css']
})
export class ImageUploadsComponent {
  @Input() list;
  columns = [
    {
      name: 'Image',
      key: 'image',
      type: 'image tag',
      height: 100
    },
    {
      name: 'Name',
      key: 'name'
    },
    {
      name: 'Caption',
      key: 'caption',
    },
    {
      name: 'Description',
      key: 'description'
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
