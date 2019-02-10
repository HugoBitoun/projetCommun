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
import {SignUpPage} from "../pages/sign-up/sign-up";
import { HttpClientModule } from '@angular/common/http';
import { AssociationsProvider } from '../providers/associations/associations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from "../environments/environment";
import {AssociationsPage} from "../pages/associations/associations";
import { UserProvider } from '../providers/user/user';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SignUpProvider } from '../providers/sign-up/sign-up';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
      AuthPage,
      SignUpPage,
      AssociationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      HttpClientModule,
      AngularFireModule.initializeApp(environment.firebase),      
      AngularFirestoreModule,
      AngularFireAuthModule,
      AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
      AuthPage,
      SignUpPage,
      AssociationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AssociationsProvider,
    AngularFireAuth,
    UserProvider,
    SignUpProvider  
  ]
})
export class AppModule {}
