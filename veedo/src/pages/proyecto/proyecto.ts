import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallesPage } from '../detalles/detalles';
import { CronogramaPage } from '../cronograma/cronograma';
import { EstadoPage } from '../estado/estado';

@Component({
  selector: 'page-proyecto',
  templateUrl: 'proyecto.html'
})
export class ProyectoPage {

  constructor(public navCtrl: NavController) {
  }
  goToDetalles(params){
    if (!params) params = {};
    this.navCtrl.push(DetallesPage);
  }goToCronograma(params){
    if (!params) params = {};
    this.navCtrl.push(CronogramaPage);
  }goToEstado(params){
    if (!params) params = {};
    this.navCtrl.push(EstadoPage);
  }
}
