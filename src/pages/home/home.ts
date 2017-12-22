import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AddstudentPage} from "../addstudent/addstudent";
import {ToastController} from "ionic-angular";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  students: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider,  private toastCtrl: ToastController) {

  }
  ionViewDidLoad() {
    this.getStudents();
  }

  ionViewWillEnter(){
    this.getStudents();
  }

  getStudents() {
    this.rest.getAllStudents().then(
      (students) => {
        this.students = students;
      },
      (error) => {
        this.errorMessage = <any>error;
      });
  }
  toAddStudent(){
    this.navCtrl.push(AddstudentPage);
  }
  deleteStudent(id){
    this.rest.deleteStudent(id).then(
      (deleted) => {
        let toast = this.toastCtrl.create({
          message: `Alumno borrado`,
          duration: 1500
        });
        toast.present();
        setTimeout(() => {
          this.ionViewDidLoad();
        }, 1700);
      },
      (error) => {
        let toast = this.toastCtrl.create({
          message: `Error al borrar al alumno`,
          duration: 1500
        });
        toast.present();
        setTimeout(() => {
          // this.navCtrl.popToRoot();
          // might try this instead
        }, 1700);
      }
    )
  }

}

