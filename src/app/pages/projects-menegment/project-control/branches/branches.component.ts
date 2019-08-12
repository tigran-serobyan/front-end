import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent {
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
      name: 'Name',
      key: 'name'
    },
    {
      name: 'Phone',
      key: 'phone'
    },
    {
      name: 'Latitude',
      key: 'latitude'
    },
    {
      name: 'Longitude',
      key: 'longitude'
    },
    {
      name: 'Country',
      key: 'country'
    },
    {
      name: 'Region',
      key: 'region'
    },
    {
      name: 'Street',
      key: 'street'
    },
    {
      name: 'Building',
      key: 'building'
    },
    {
      name: 'Work time',
      key: 'workTime'
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
