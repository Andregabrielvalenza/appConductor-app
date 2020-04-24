import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanatallaPrincipalPage } from './panatalla-principal.page';

const routes: Routes = [
  {
    path: '',
    component: PanatallaPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanatallaPrincipalPageRoutingModule {}
