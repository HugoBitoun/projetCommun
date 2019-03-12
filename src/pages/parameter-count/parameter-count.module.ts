import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParameterCountPage } from './parameter-count';

@NgModule({
  declarations: [
    ParameterCountPage,
  ],
  imports: [
    IonicPageModule.forChild(ParameterCountPage),
  ],
})
export class ParameterCountPageModule {}
