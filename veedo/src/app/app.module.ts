import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { InicioPage } from '../pages/inicio/inicio';
import { ProyectoPage } from '../pages/proyecto/proyecto';
import { AgregarProyectoPage } from '../pages/agregar-proyecto/agregar-proyecto';
import { LocalidadesPage } from '../pages/localidades/localidades';
import { BuscarPage } from '../pages/buscar/buscar';
import { DetallesPage } from '../pages/detalles/detalles';
import { CronogramaPage } from '../pages/cronograma/cronograma';
import { EstadoPage } from '../pages/estado/estado';
import { AgregarCronogramaPage } from '../pages/agregar-cronograma/agregar-cronograma';
import { AgregarEstadoPage } from '../pages/agregar-estado/agregar-estado';
import { FavoritosPage } from '../pages/favoritos/favoritos';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    InicioPage,
    ProyectoPage,
    AgregarProyectoPage,
    LocalidadesPage,
    BuscarPage,
    DetallesPage,
    CronogramaPage,
    EstadoPage,
    AgregarCronogramaPage,
    AgregarEstadoPage,
    FavoritosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    InicioPage,
    ProyectoPage,
    AgregarProyectoPage,
    LocalidadesPage,
    BuscarPage,
    DetallesPage,
    CronogramaPage,
    EstadoPage,
    AgregarCronogramaPage,
    AgregarEstadoPage,
    FavoritosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}