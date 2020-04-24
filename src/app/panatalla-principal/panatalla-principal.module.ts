import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanatallaPrincipalPageRoutingModule } from './panatalla-principal-routing.module';

import { PanatallaPrincipalPage } from './panatalla-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanatallaPrincipalPageRoutingModule
  ],
  declarations: [PanatallaPrincipalPage]
})
export class PanatallaPrincipalPageModule {}
