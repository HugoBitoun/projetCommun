import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursDetailsPage } from './cours-details';

@NgModule({
  declarations: [
    CoursDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CoursDetailsPage),
  ],
})
export class CoursDetailsPageModule {}
