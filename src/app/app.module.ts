import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ListaComponent } from '../pages/lista/lista.component';
import { ContatoService } from '../providers/contato.service';
import { CadastroComponent } from '../pages/cadastro/cadastro.component';
@NgModule({
  declarations: [
    MyApp,
    ListaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaComponent,
    CadastroComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContatoService
  ]
})
export class AppModule {}
