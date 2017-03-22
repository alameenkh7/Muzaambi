import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core" ;

@Component({
  selector:'helloworld ',
  template:`
  <ul>
  <li *ngFor="#name of names">Hello {{name}}</li>
  </ul>
  `
})

class Helloworld{
  names: string[];

  constructor(){
    this.names=['ameen','me','kate'];
  }
}

bootstrap(Helloworld);
