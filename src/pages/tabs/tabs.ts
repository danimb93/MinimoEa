import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import {SubjectsPage} from "../subjects/subjects";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SubjectsPage;

  constructor() {

  }
}
