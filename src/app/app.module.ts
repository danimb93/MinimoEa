import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {AddstudentPage} from "../pages/addstudent/addstudent";
import {AddsubjectPage} from "../pages/addsubject/addsubject";
import {SubjectDetailsPage} from "../pages/subject-details/subject-details";
import {SubjectsPage} from "../pages/subjects/subjects";
import { SubjectsProvider } from '../providers/subjects/subjects';
import {MatriculaPage} from "../pages/matricula/matricula";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddstudentPage,
    AddsubjectPage,
    SubjectDetailsPage,
    SubjectsPage,
    MatriculaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddstudentPage,
    AddsubjectPage,
    SubjectDetailsPage,
    SubjectsPage,
    MatriculaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    HttpClient,
    SubjectsProvider
  ]
})
export class AppModule {}
