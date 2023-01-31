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

  l = '128'
  l2 = '1024'



}
