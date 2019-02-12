import { NgModule } from '@angular/core';
import {IonicPage, IonicPageModule} from 'ionic-angular';
import { PopoverAssoPage } from './popover-asso';

@NgModule({
  declarations: [
    PopoverAssoPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverAssoPage),
  ],
})
export class PopoverAssoPageModule {}
