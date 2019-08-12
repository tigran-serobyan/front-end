import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from '../../../dal/alert-message/alert.service';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit, OnDestroy {

  messageText: string;
  type: string;

  private subscription = new Subscription();

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.subscription.add(this.alertService.messageText.subscribe(messageData => {
      this.messageText = messageData;
    }));
    this.subscription.add(this.alertService.type.subscribe(typeData => {
      this.type = typeData;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
