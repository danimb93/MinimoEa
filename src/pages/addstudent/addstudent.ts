import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the AddstudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addstudent',
  templateUrl: 'addstudent.html',
})
export class AddstudentPage {

  nombre:string;
  apellido:string;
  edad:number;
  genero:string;
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, public toastCtrl: ToastController) {
    console.log("AddStudentPage")
  }

  saveStudent() {
    this.rest.saveStudent({nombre:this.nombre, apellido:this.apellido, edad:this.edad, genero:this.genero})
      .then((result) => {
        let toast = this.toastCtrl.create({
          message: `Estudiante añadido`,
          duration: 1500
        });
        toast.present();
        setTimeout(() => {
          // this.navCtrl.popToRoot();
          // might try this instead
          this.navCtrl.pop();
        }, 1700);
        //this.router.navigate(['/student-details', id]);
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
