import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAssociationsPage } from './my-associations';

@NgModule({
  declarations: [
    MyAssociationsPage,

  ],
  imports: [
    IonicPageModule.forChild(MyAssociationsPage),

  ],
})
export class MyAssociationsPageModule {}
