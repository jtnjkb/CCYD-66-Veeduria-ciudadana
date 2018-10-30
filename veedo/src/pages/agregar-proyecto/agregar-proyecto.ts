import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarCronogramaPage } from '../agregar-cronograma/agregar-cronograma';
import { AgregarEstadoPage } from '../agregar-estado/agregar-estado';

@Component({
  selector: 'page-agregar-proyecto',
  templateUrl: 'agregar-proyecto.html'
})
export class AgregarProyectoPage {

  constructor(public navCtrl: NavController) {
  }
  goToAgregarCronograma(params){
    if (!params) params = {};
    this.navCtrl.push(AgregarCronogramaPage);
  }goToAgregarEstado(params){
    if (!params) params = {};
    this.navCtrl.push(AgregarEstadoPage);
  }
}
