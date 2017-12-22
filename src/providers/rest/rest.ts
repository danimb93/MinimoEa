import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  private apiUrl = 'http://localhost:3000/student';

  getStudents(): Observable<string[]> {
    return this.http.get(this.apiUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  getAllStudents() {
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
  saveStudent(data) {
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
  updateStudent(id, data) {
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
  deleteStudent(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl+'/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getStudentsNotInSubject(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/not_in/' + id)
        .map(res => res)
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  showStudent(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/' + id)
        .map(res => res)
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }


}
