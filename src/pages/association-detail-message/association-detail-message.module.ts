import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssociationDetailMessagePage } from './association-detail-message';

@NgModule({
  declarations: [
    AssociationDetailMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(AssociationDetailMessagePage),
  ],
})
export class AssociationDetailMessagePageModule {}
