import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthPage } from './auth';
import {AuthProvider} from "../../providers/auth/auth";

@NgModule({
  declarations: [
    AuthPage,
      AuthProvider
  ],
  imports: [
    IonicPageModule.forChild(AuthPage),
  ],
})
export class AuthPageModule {}
