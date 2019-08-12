import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sms-templates',
  templateUrl: './smsTemplates.component.html',
  styleUrls: ['./smsTemplates.component.css']
})
export class SmsTemplatesComponent {
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
      name: 'Body',
      key: 'body',
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
