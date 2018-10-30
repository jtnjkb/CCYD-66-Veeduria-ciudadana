import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LocalidadesPage } from '../pages/localidades/localidades';
import { BuscarPage } from '../pages/buscar/buscar';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AgregarProyectoPage } from '../pages/agregar-proyecto/agregar-proyecto';
import { AgregarCronogramaPage } from '../pages/agregar-cronograma/agregar-cronograma';
import { AgregarEstadoPage } from '../pages/agregar-estado/agregar-estado';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { ProyectoPage } from '../pages/proyecto/proyecto';
import { DetallesPage } from '../pages/detalles/detalles';
import { CronogramaPage } from '../pages/cronograma/cronograma';
import { EstadoPage } from '../pages/estado/estado';


import { InicioPage } from '../pages/inicio/inicio';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = InicioPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InicioPage);
  }goToLocalidades(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LocalidadesPage);
  }goToBuscar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BuscarPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }goToAgregarProyecto(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AgregarProyectoPage);
  }goToAgregarCronograma(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AgregarCronogramaPage);
  }goToAgregarEstado(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AgregarEstadoPage);
  }goToFavoritos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FavoritosPage);
  }goToProyecto(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProyectoPage);
  }goToDetalles(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DetallesPage);
  }goToCronograma(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CronogramaPage);
  }goToEstado(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EstadoPage);
  }
}
