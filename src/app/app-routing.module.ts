import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ver-ruta',
    loadChildren: () => import('./ver-ruta/ver-ruta.module').then( m => m.VerRutaPageModule)
  },
  {
    path: 'carga',
    loadChildren: () => import('./carga/carga.module').then( m => m.CargaPageModule)
  },
  {
    path: 'inicio-ruta',
    loadChildren: () => import('./inicio-ruta/inicio-ruta.module').then( m => m.InicioRutaPageModule)
  },
  {
    path: 'panatalla-principal',
    loadChildren: () => import('./panatalla-principal/panatalla-principal.module').then( m => m.PanatallaPrincipalPageModule)
  },
  {
    path: 'modal1',
    loadChildren: () => import('./modal1/modal1.module').then( m => m.Modal1PageModule)
  },
  {
    path: 'modal2',
    loadChildren: () => import('./modal2/modal2.module').then( m => m.Modal2PageModule)
  },
  {
    path: 'modal3',
    loadChildren: () => import('./modal3/modal3.module').then( m => m.Modal3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
