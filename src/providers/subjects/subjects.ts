import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the SubjectsProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubjectsProvider {

  private apiUrl = 'http://localhost:3000/subject';

  constructor(public http: HttpClient) {
    console.log('Hello SubjectsProvider Provider');
  }

  getAllSubjects() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/')
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showSubject(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/' + id)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showSubjectSorted() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/sorted')
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showSubject_byName(name) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/filter_nombre/' + name)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  showSubject_byEstudios(name) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/filter_estudios/' + name)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showSubject_byCuatri(name) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/filter_cuatri/' + name)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveSubject(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/', data)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateSubject(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/' + id, data)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteSubject(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl+'/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteStudentFromSubject(id, idstudent) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/' + id + '/students/' + idstudent, null)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addStudentToSubject(id, idstudent) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/' + id + '/students/' + idstudent, null)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


}
