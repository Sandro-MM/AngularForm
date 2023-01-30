import {Component, Input} from '@angular/core'

@Component({
  selector: 'button-component',
  template: `<button
    [class.a]="Desc=='Save'"
    [class.b]="Desc=='Cancel'"
  >
    {{Desc}} </button>`,
  styles:[`
    button {
        all: unset;
        cursor: pointer;
        border-radius: 5px;
        text-align: center;
        font-size: 15px;
        height: 50px;
        width: 112px;
    }
  .a{
    color: #fff;
    background: #60C696;

  }
  .b{
    color: #000;
    background: #fff;

  }
  `]
})

export class ButtonComponent{
  @Input('desc') Desc = '';
};
