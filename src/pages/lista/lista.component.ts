import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CadastroComponent } from '../cadastro/cadastro.component';
import { Contato } from '../../models/contato';
import { ContatoService } from '../../providers/contato.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {
  public lista: Array<Contato>;
  constructor(private cs : ContatoService, private navCtrl: NavController) {
    this.lista = cs.read();
  }

  ngOnInit() {
  }

  public adicionar(): void {
    this.navCtrl.push(CadastroComponent);
  }

}