import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { MainPage } from '..';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';
  Localidades=['Usaquén',
		'Chapinero',
		'Santa Fe',
		'San Cristóbal',
		'Usme',
		'Tunjuelito',
		'Bosa',
		'Kennedy',
		'Fontibón',
		'Engativá',
		'Suba',
		'Barrios Unidos',
		'Teusaquillo',
		'Los Mártires',
		'Antonio Nariño',
		'Puente Aranda',
		'La Candelaria',
		'Rafael Uribe Uribe',
		'Ciudad Bolívar',
		'Sumapaz']

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: "Bienvenido a Veedo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim commodi similique cum debitis assumenda ea eos provident. Fugiat molestiae iure mollitia aut error? Corrupti, harum ullam. Assumenda, harum explicabo.",
            image: 'assets/img/Veedo_Logo.png',
          },
          {
            title: "¿Cómo Usar Veedo?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim commodi similique cum debitis assumenda ea eos provident. Fugiat molestiae iure mollitia aut error? Corrupti, harum ullam. Assumenda, harum explicabo.",
            image: 'assets/img/ica-slidebox-img-2.png',
          }
        ];
      });
  }

  startApp() {
    this.navCtrl.setRoot(MainPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
