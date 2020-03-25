import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

  public alerta() {
    console.log('hola');
    const alert = this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'PRUEBAAAAAAAAAAAAAAAAAAAAAA.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });
    // alert.present();
    alert.then(x => x.present());
  }

}
