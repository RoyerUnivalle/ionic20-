import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

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
