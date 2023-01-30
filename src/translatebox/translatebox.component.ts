import {Component,  Input} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-translatebox',
  templateUrl: './translatebox.component.html',
  styleUrls: ['./translatebox.component.css']
})
export class TranslateboxComponent {
  lf = 'Legal Form'
  lffd = 'Legal Form full description'

  lftr = 'Legal Form (Transliterated)'
  lffdtr = 'Legal Form full description (Transliterated)'

  rateControl = new FormControl("", [Validators.max(128), Validators.min(1)])
  rateControl2 = new FormControl("", [Validators.max(1024), Validators.min(1)])



}
