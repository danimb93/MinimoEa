import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubjectsProvider } from "../../providers/subjects/subjects";
import {AddsubjectPage} from "../addsubject/addsubject";
import {SubjectDetailsPage} from "../subject-details/subject-details";
import {ToastController} from "ionic-angular";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class SubjectsPage {

  subjects: any;
  errorMessage: string;
  search: string;

  constructor(public navCtrl: NavController, private rest: SubjectsProvider, private toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    this.getSubjects();
  }

  ionViewWillEnter(){
    this.getSubjects();
  }

  getSubjects() {
    this.rest.getAllSubjects().then(
      (subjects) => {
        this.subjects = subjects;
      },
      (error) => {
        this.errorMessage = <any>error;
      });
  }

  deleteSubject(id){
    this.rest.deleteSubject(id).then(
      (deleted) => {
        let toast = this.toastCtrl.create({
          message: `Asignatura borrada`,
          duration: 1500
        });
        toast.present();
        setTimeout(() => {
          this.ionViewDidLoad();
        }, 1700);
      },
      (error) => {
        let toast = this.toastCtrl.create({
          message: `Error al borrar la asignatura`,
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

  toAddSubject(){
    this.navCtrl.push(AddsubjectPage);
  }

  toDetails(id){
    this.navCtrl.push(SubjectDetailsPage, {id: id});
  }
}
