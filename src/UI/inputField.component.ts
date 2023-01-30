import {Component, Input, Output} from '@angular/core'
@Component({
  selector: 'input-field',
  template:`
  <div class = 'container '>
    <div class="desc">{{Desc}}</div>
    <div >
      <form >
        <div class="border">
          <textarea class="input" [value] = 'title' (keyup)="onInput($event)" ></textarea>
        </div>
        <div class="desc">{{Desc2}}</div>
        <div class="border">
          <textarea class="input" [value] = 'title2' (keyup)="input($event)" ></textarea>
        </div>

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
    margin: 10px;
    width: 100%;
    height: 79px;
    outline: #FFAE00 solid 2px;
  }
  .input{
    all: unset;
    padding: 5px;
    width: 95%;
    overflow: hidden;
  }
  `]
})


export class InputFieldComponent {
  @Input('desc') Desc = '';
  @Input('desc2') Desc2 = '';

  title = ''

  title2 = ''




  obj2:{ [char: string]: string }={
    a : 'а',
    b	: 'б',
    v : 'в',
    g	: 'г',
    d : 'д',
    e	: 'е',
    z	: 'з',
    i : 'и',
    y	: 'й',
    k	: 'к',
    l	: 'л',
    m	: 'м',
    n	: 'н',
    o	: 'о',
    p	: 'п',
    r	: 'р',
    s	: 'с',
    t	: 'т',
    u	: 'у',
    f :	'ф',
    h	: 'х',
    ts : 'ц',
    ch : 'ч',
    sh	: 'ш',
    sht	: 'щ',
    yu	: 'ю',
    ya	: 'я',
    zh	: 'ж',
    A : 'А',
    B  : 'Б',
    V : 'В',
    G  : 'Г',
    D : 'Д',
    E  : 'Е',
    Z  : 'З',
    I : 'И',
    Y  : 'Й',
    K  : 'К',
    L  : 'Л',
    M  : 'М',
    N  : 'Н',
    O  : 'О',
    P  : 'П',
    R  : 'Р',
    S  : 'С',
    T  : 'Т',
    U  : 'У',
    F :  'Ф',
    H  : 'Х',
    TS : 'Ц',
    CH : 'Ч',
    SH : 'Ш',
    SHT  : 'Щ',
    YU : 'Ю',
    YA : 'Я',
    ZH : 'Ж',


  }
  obj:{ [char: string]: string }={
    а : 'a',
    б	: 'b',
    в : 'v',
    г	: 'g',
    д : 'd',
    е	: 'e',
    ж	: 'zh',
    з	: 'z',
    и : 'i',
    й	: 'y',
    к	: 'k',
    л	: 'l',
    м	: 'm',
    н	: 'n',
    о	: 'o',
    п	: 'p',
    р	: 'r',
    с	: 's',
    т	: 't',
    у	: 'u',
    ф :	'f',
    х	: 'h',
    ц	: 'ts',
    ч : 'ch',
    ш	: 'sh',
    щ	: 'sht',
    ъ	: 'a',
    ь	: 'y',
    ю	: 'yu',
    я	: 'ya',
    ѝ : 'i',
    А : 'A',
    Б : 'B',
    В : 'V',
    Г : 'G',
    Д : 'D',
    Е : 'E',
    Ж : 'ZH',
    З : 'Z',
    И : 'I',
    Й : 'Y',
    К : 'K',
    Л : 'L',
    М : 'M',
    Н : 'N',
    О : 'O',
    П : 'P',
    Р : 'R',
    С : 'S',
    Т : 'T',
    У : 'U',
    Ф :  'F',
    Х : 'H',
    Ц : 'TS',
    Ч : 'CH',
    Ш : 'SH',
    Щ : 'SHT',
    Ъ : 'A',
    Ь : 'Y',
    Ю : 'YU',
    Я : 'YA',
    Ѝ : 'I',
  }
  onInput(event: any){
    this.title=event.target.value
    let text = []
    for (const c of this.title) {
      if (c in this.obj)
        text.push(this.obj[c])
      else text.push(c)
    }
    this.title2 = text.join('')


  }
  input(event: any){
    this.title2=event.target.value
    let text = []
    for (const c of this.title2) {
      if (c in this.obj2)
        text.push(this.obj2[c])
      else text.push(c)
      this.title = text.join('')
    }
  }
}

