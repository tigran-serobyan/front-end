import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.css']
})
export class TableGeneratorComponent{
  @Input() list;
  @Input() columns;

  @Output() action: EventEmitter<any> = new EventEmitter();

  emitAction(action) {
    this.action.emit(action);
  }
}
