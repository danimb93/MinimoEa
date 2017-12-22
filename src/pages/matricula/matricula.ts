import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";
import { SubjectsProvider} from "../../providers/subjects/subjects";

/**
 * Generated class for the MatriculaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matricula',
  templateUrl: 'matricula.html',
})
export class MatriculaPage {

  students: any;
  errorMessage: string;
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private rest: RestProvider, private subject: SubjectsProvider, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    this.getStudents();
  }

  getStudents() {
    this.rest.getStudentsNotInSubject(this.id).then(
      (students) => {
        console.log(students);
        this.students = students;
      },
      (error) => {
        this.errorMessage = <any>error;
      });
  }

  matricularStudent(id){
    this.subject.addStudentToSubject(this.id, id).then(
      (result) => {
        let toast = this.toastCtrl.create({
          message: `Estudiante matriculado`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          this.getStudents();
        }, 1200);
      },
      (error) => {
        this.errorMessage = <any>error;
        let toast = this.toastCtrl.create({
          message: `Error al matricular estudiante`,
          duration: 1500
        });
        toast.present();
        setTimeout(() => {
          this.getStudents();
        }, 1700);
      });
  }

}
