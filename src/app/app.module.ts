import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AuthPage } from '../pages/auth/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SignInPage} from "../pages/sign-in/sign-in";
import { HttpClientModule } from '@angular/common/http';
import { AssociationsProvider } from '../providers/associations/associations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestoreCollection } from 'angularfire2/firestore';
import {environment} from "../environments/environment";
import {AssociationsPage} from "../pages/associations/associations";
import { SignInProvider } from '../providers/sign-in/sign-in';
import { UserProvider } from '../providers/user/user';
import {PopoverAssoPageModule} from "../pages/popover-asso/popover-asso.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
      AuthPage,
      SignInPage,
      AssociationsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      HttpClientModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      PopoverAssoPageModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
      AuthPage,
      SignInPage,
      AssociationsPage,



  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AssociationsProvider,
    SignInProvider,AngularFireAuth,
    UserProvider
  ]
})

export class AppModule {}
