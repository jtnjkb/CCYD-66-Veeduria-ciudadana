import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscarPage } from '../buscar/buscar';
import { FavoritosPage } from '../favoritos/favoritos';
import { AgregarProyectoPage } from '../agregar-proyecto/agregar-proyecto';
import { AgregarCronogramaPage } from '../agregar-cronograma/agregar-cronograma';
import { AgregarEstadoPage } from '../agregar-estado/agregar-estado';
import { InicioPage } from '../inicio/inicio';




@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = InicioPage;
  tab2Root: any = AgregarProyectoPage;
  tab3Root: any = FavoritosPage;
  tab4Root: any = BuscarPage;
  constructor(public navCtrl: NavController) {
  }
  goToBuscar(params){
    if (!params) params = {};
    this.navCtrl.push(BuscarPage);
  }goToFavoritos(params){
    if (!params) params = {};
    this.navCtrl.push(FavoritosPage);
  }goToAgregarProyecto(params){
    if (!params) params = {};
    this.navCtrl.push(AgregarProyectoPage);
  }goToAgregarCronograma(params){
    if (!params) params = {};
    this.navCtrl.push(AgregarCronogramaPage);
  }goToAgregarEstado(params){
    if (!params) params = {};
    this.navCtrl.push(AgregarEstadoPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }
}
