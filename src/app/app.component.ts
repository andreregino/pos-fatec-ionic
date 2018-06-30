import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ListaComponent } from '../pages/lista/lista.component';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ListaComponent;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }
}
