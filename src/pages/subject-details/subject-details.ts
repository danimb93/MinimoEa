import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { SubjectsProvider} from "../../providers/subjects/subjects";
import { MatriculaPage } from "../matricula/matricula";

/**
 * Generated class for the SubjectDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject-details',
  templateUrl: 'subject-details.html',
})
export class SubjectDetailsPage {

  subject: {};
  nombre: string;
  estudios: string;
  cuatrimestre: string;
  alumnos: {}[];
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: SubjectsProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    this.getSubject(this.id);
  }


  ionViewWillEnter() {
    this.getSubject(this.id);
  }

  ionViewDidEnter() {
    this.getSubject(this.id);
  }


  getSubject(id){
    this.rest.showSubject(id).then(
      (subject) => {
        this.subject = subject;
        this.nombre = subject['nombre'];
        this.estudios = subject['estudios'];
        this.cuatrimestre = subject['cuatrimestre'];
        this.alumnos = subject['estudiantes'];
      },
      (error) => {
        let toast = this.toastCtrl.create({
          message: `Error al cargar detalles`,
          duration: 1500
        });
        toast.present();
        setTimeout(() => {
          this.navCtrl.pop();
        }, 1700);
      }
    )
  }

  deleteStudentFromSubject(idsubject, idstudent){
    this.rest.deleteStudentFromSubject(idsubject, idstudent).then(
      (subject) => {
        let toast = this.toastCtrl.create({
          message: `Estudiante desmatriculado`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          this.ionViewDidLoad();
        }, 1200);
      },
      (error) => {
        let toast = this.toastCtrl.create({
          message: `Error al desmatricular`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          this.ionViewDidLoad();
        }, 1200);
      }
    )
  }

  toMatricula(){
    this.navCtrl.push(MatriculaPage, {id: this.id})
  }
}
