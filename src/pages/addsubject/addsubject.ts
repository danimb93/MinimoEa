import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubjectsProvider} from "../../providers/subjects/subjects";
import { ToastController} from "ionic-angular";

/**
 * Generated class for the AddsubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addsubject',
  templateUrl: 'addsubject.html',
})
export class AddsubjectPage {

  nombre:string;
  modalidad:string;
  cuatrimestre:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: SubjectsProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddsubjectPage');
  }

  saveSubject() {
    this.rest.saveSubject({nombre:this.nombre, estudios:this.modalidad, cuatrimestre:this.cuatrimestre})
      .then((result) => {
        let toast = this.toastCtrl.create({
          message: `Asignatura añadida`,
          duration: 1500
        });
        toast.present();
        setTimeout(() => {
          this.navCtrl.pop();
        }, 1700);
      }, (err) => {
        console.log(err);
        let toast = this.toastCtrl.create({
          message: `Error al añadir estudiante`,
          duration: 2000
        });
        toast.present();
      });
  }

}
