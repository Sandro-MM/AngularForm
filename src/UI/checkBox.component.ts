import {Component, Input} from '@angular/core'

@Component({
  selector: 'check-box',
  template:
    `<input type="checkbox" [id]="Id">
    <span>{{Desc}}</span>`,
  styles: [`
    input{
      width: 19px;
      height: 19px;
      border-radius: 3px;
      border: solid 1px #000;
    }
    span{
      position: absolute;
      margin: 0 0;
      color: #406177;
      font-size: 15px;
    }
  `],
})


export class CheckBoxComponent{
  @Input('desc') Desc = '';
  @Input('id') Id = '';


};
