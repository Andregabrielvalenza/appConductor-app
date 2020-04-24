import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-panatalla-principal',
  templateUrl: './panatalla-principal.page.html',
  styleUrls: ['./panatalla-principal.page.scss'],
})
export class PanatallaPrincipalPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController,public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Eventos de retraso',
      buttons: [{
        text: 'Almuerzo',
        role: 'destructive',
        icon: 'fast-food-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Llegada al almacén',
        icon: 'aperture-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cliente ausente',
        icon: 'caret-forward-outline',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Falla mecánica',
        icon: 'build-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      },{
        text: 'Accidente',
        icon: 'car-sport-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      } ,{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      ]
    });
    await actionSheet.present();
  }

  async presententrega() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Fin de entrega',
      buttons: [{
        text: 'Entrega exitosa',
        role: 'destructive',
        icon: 'ellipse',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Rechazo parcial',
        icon: 'ellipse',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Rechazo total',
        icon: 'ellipse',
        handler: () => {
          console.log('Play clicked');
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      ]
    });
    await actionSheet.present();
  }

}

