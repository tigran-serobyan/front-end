import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-email-templates',
  templateUrl: './emailTemplates.component.html',
  styleUrls: ['./emailTemplates.component.css']
})
export class EmailTemplatesComponent {
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
      name: 'Subject',
      key: 'subject',
    },
    {
      name: 'Sender',
      key: 'sender'
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
