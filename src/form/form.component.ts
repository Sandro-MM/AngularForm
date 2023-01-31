import {AfterViewInit, Component, Input, ViewChild} from '@angular/core'
import {InputFieldComponent} from '../UI/inputField.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent {

  save = 'Save'
  cancel = 'Cancel'

  inactive = 'Inactive'
  default ='Default'

   sucsess = ''

  cleart = ''

  toast():any{
    this.sucsess = 'Sucsess!'
    setTimeout(()=>this.sucsess = ' ', 1000 )

  }

  @ViewChild(InputFieldComponent) child:any;
  clear():any{
    this.child.title = this.cleart
    this.child.title2 = this.cleart
  }

  displayToggle= false


}
