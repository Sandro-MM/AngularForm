import {Component, Input} from '@angular/core'

@Component({
  selector: 'add-btn',
  template:
    `<button class="btn">
        <div class="a"></div>
        <div class="b"></div>
    </button>`,
  styles:[`
    button{

      all: unset;
      width: 30px;
      height: 30px;
      background: #006FBA;
      border-radius: 4px;
      cursor: pointer;
    }
    div{
      position: absolute;
      margin: 0 7px;
      width: 16px;
      height: 2px;
      background: #fff;
    }
    .a{
      transform: rotate(90deg);

    }
  `]
})

export class AddbtnComponent{

};
