import {Injectable} from '@angular/core';
import {Subject} from "rxjs";


export interface ILoginAction {
  username: string;
  password: string;
}

@Injectable()
export class AlertService {
  messageText  = new Subject<string>();
  type  = new Subject<string>();

  showAlert(messageText, type = 'error', timer = 5000) {
    this.messageText.next(messageText);
    this.type.next(type);
    setTimeout(() => {
      this.messageText.next('');
    }, timer);
  }

}
