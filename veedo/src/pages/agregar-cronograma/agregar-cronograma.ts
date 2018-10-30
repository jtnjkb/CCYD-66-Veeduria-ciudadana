import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarEstadoPage } from '../agregar-estado/agregar-estado';

@Component({
  selector: 'page-agregar-cronograma',
  templateUrl: 'agregar-cronograma.html'
})
export class AgregarCronogramaPage {

  constructor(public navCtrl: NavController) {
  }
  goToAgregarEstado(params){
    if (!params) params = {};
    this.navCtrl.push(AgregarEstadoPage);
  }
}
