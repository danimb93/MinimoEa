import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatriculaPage } from './matricula';

@NgModule({
  declarations: [
    MatriculaPage,
  ],
  imports: [
    IonicPageModule.forChild(MatriculaPage),
  ],
})
export class MatriculaPageModule {}
