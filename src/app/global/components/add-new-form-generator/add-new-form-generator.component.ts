import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProjectsManagementService} from '../../../dal/projects-menegment/projects-menegment.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';

@Component({
  selector: 'app-add-new-form-generator',
  templateUrl: './add-new-form-generator.component.html',
  styleUrls: ['./add-new-form-generator.component.css']
})
export class AddNewFormGeneratorComponent implements OnInit {
  @Input() inputs;
  @Input() languages;

  @Output() save: EventEmitter<any> = new EventEmitter();
  language = 'hy';

  value = {
    map: {}
  };
  images = {};

  public Editor = ClassicEditor;

  constructor(private projectsManagementService: ProjectsManagementService) {

  }

  ngOnInit() {
    this.projectsManagementService.getLocales().subscribe(data => {
      this.languages = [];
      for (const l of data.okResponse.list) {
        this.languages.push(l.locale);
      }
      this.language = this.languages[0];
      this.value.map = {};
      for (const i of this.inputs) {
        if (i.component === 'value') {
          for (const k of this.languages) {
            this.value.map[k] = {};
            for (const j of i.inputs) {
              if (j.translating) {
                this.value.map[k][j.name] = '';
              } else {
                this.value[j.name] = '';
              }
            }
          }
        }
      }
      for (const i of this.inputs) {
        if (i.component === 'value') {
          for (const k of this.languages) {
            this.images[k] = {};
            for (const j of i.inputs) {
              if (j.translating && j.inputType === 'file') {
                this.images[k][j.name] = '';
              } else {
                this.images[j.name] = '';
              }
            }
          }
        }
      }
    });
    this.value.map = {};
    for (const i of this.inputs) {
      if (i.component === 'value') {
        for (const k of this.languages) {
          this.value.map[k] = {};
          for (const j of i.inputs) {
            if (j.translating) {
              this.value.map[k][j.name] = '';
            } else {
              this.value[j.name] = '';
            }
          }
        }
      }
    }
    for (const i of this.inputs) {
      if (i.component === 'value') {
        for (const k of this.languages) {
          this.images[k] = {};
          for (const j of i.inputs) {
            if (j.translating && j.inputType === 'file') {
              this.images[k][j.name] = '';
            } else {
              this.images[j.name] = '';
            }
          }
        }
      }
    }
  }

  getTextInputValue(fieldConfig) {
    if (fieldConfig.inputType === 'file') {
      return '';
    } else {
      return (fieldConfig.translating) ? this.value.map[this.language][fieldConfig.name] : this.value[fieldConfig.name];
    }
  }

  getImageUrl(fieldConfig) {
    return (fieldConfig.translating) ? this.images[this.language][fieldConfig.name] : this.images[fieldConfig.name];
  }

  setLanguage(event, language) {
    for (const i of event.target.parentElement.getElementsByTagName('li')) {
      i.setAttribute('class', '');
    }
    event.target.setAttribute('class', 'active');
    this.language = language;
  }

  onValueInputText(event, name, translating) {
    if (translating) {
      this.value.map[this.language][name] = event.target.value;
    } else {
      this.value[name] = event.target.value;
    }
  }

  onValueInputFile(event, name, translating) {
    if (translating) {
      this.value.map[this.language][name] = event.target.files[0];
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.images[this.language][name] = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.value[name] = event.target.files[0];
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.images[name] = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onValueEditBox(value, name, translating) {
    if (translating) {
      this.value.map[this.language][name] = value;
    } else {
      this.value[name] = value;
    }
  }

  onValueInput(event, name, translating) {
    if (event.editor) {
      this.onValueEditBox(event.editor.getData(), name, translating);
    }
    if (event.target) {
      if (event.traget.type !== 'file') {
        this.onValueInputText(event, name, translating);
      } else {
        this.onValueInputFile(event, name, translating);
      }
    }
  }

  onButtonClick() {
    this.save.emit(this.value);
  }
}
