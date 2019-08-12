import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {
  @Input() languages;
  @Input() language;
  @Input() name;
  @Input() translating;
  @Input() config;

  @Input() data;
  @Output() change: EventEmitter<any> = new EventEmitter();

  public Editor = ClassicEditor;

  ngOnInit() {
    if (!this.config) {
      this.config = {
        toolbar: ['Heading', '|', 'Undo', 'Redo', '|', 'Bold', 'Italic']
      };
    }
  }

  onChange(event) {
    this.change.emit(event);
  }
}
