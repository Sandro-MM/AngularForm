import {Component, Input} from '@angular/core'

@Component({
  selector: 'input-field',
  template:`
  <div class = 'container '>
    <div class="desc">{{Desc}}</div>
    <div >
      <form class="border">
        <textarea class="input"></textarea>
      </form>
    </div>
  </div>
  `,

  styles:[`
  .container{
    width: 100%;
    height: 100%;
  }
  .desc{
    padding: 5px 0;
    font-size: 15px;
    color: #406177;
    font-style: italic;
  }
  .border{
    width: 100%;
    height: 79px;
    outline: #FFAE00 solid 2px;
  }
  .input{
    all: unset;
    padding: 5px;
  }
  `]
})


export class InputField{
  @Input('desc') Desc = '';

};
