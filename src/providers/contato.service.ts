import { Injectable } from '@angular/core';
import { Contato } from '../models/contato';
@Injectable()
export class ContatoService {

  public lista: Array<Contato> = new Array<Contato>();
  constructor() { 
    let c: Contato = new Contato("André", "andre_regino@hotmail.com", "https://avatars2.githubusercontent.com/u/7707514?v=4");
    this.lista.push(c);
  }


  public create(c: Contato) : void {
    this.lista.push(c);
  }

  public read() : Array<Contato> {
    return this.lista;
  }
}