import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
import { AlertController } from '@ionic/angular';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.component.html',
  styleUrls: ['./tab4.component.scss']
})
export class Tab4Component implements OnInit {
  public item;
  public data: Array<string>;
  public dataServiceMock: Array<string>;
  public fecha: any;

  constructor(
    private dataService: DataService,
    private alertController: AlertController
  ) {
    this.data = [
      'royer',
      'angie daniela',
      'luis',
      'fernando',
      'fernanda',
      'daniela'
    ];
    this.getData();
  }

  ngOnInit() {
    //    this.getData();
  }

  public getData() {
    this.dataService.getData().subscribe(
      res => {
        console.log(res.data);
        this.dataServiceMock = res.data.estudiantes;
        this.fecha = res.data.clasroom;
      },
      error => {
        console.log('error');

        /*
  return new Promise(resolve => {
      this.paramService.getDataReference(attribute.api_reference).subscribe(
        res => {
          this.loading = false;
          dataReference = res[attribute.data_response];
          resolve(dataReference);
        },
        error => {
          this.loading = false;
          this.modalService.showRequestError('GET', error);
          resolve(dataReference);
        }
      );
    });

    async listaAreas() {
    await this._listar.listarAreas().toPromise().then(us => {
      this.areas = us.areas;
    });
  }
*/

        /*this.toastrService.error('error en la consulta', 'Error',  {
          timeOut: 6000,
          positionClass: 'toast-top-right'
      });*/
        const alert = this.alertController.create({
          header: 'Alert',
          subHeader: 'Subtitle',
          message: 'Error con laconsulta.',
          buttons: ['Cancel', 'Open Modal', 'Delete']
        });
        // alert.present();
        alert.then(x => x.present());
      }
    );
  }

  unread(item) {
    this.item = item;
  }

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
