import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AuthPage } from '../pages/auth/auth';
import { SignUpPage } from "../pages/sign-up/sign-up";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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
import {DetailAssoPage} from "../pages/detail-asso/detail-asso";
import { LogOutProvider } from '../providers/log-out/log-out';
import {MyAssociationsPage} from "../pages/my-associations/my-associations";
import {TabAssociationPage} from "../pages/tab-association/tab-association";
import {TabAssociationCreatedPage} from "../pages/tab-association-created/tab-association-created";
import {AddAssoPage} from "../pages/add-asso/add-asso";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
      AuthPage,
      SignUpPage, 
      AssociationsPage,
      DetailAssoPage,
    MyAssociationsPage,
    TabAssociationPage,
    TabAssociationCreatedPage,
    AddAssoPage

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
      AssociationsPage,
      DetailAssoPage,
    MyAssociationsPage,
    TabAssociationPage,
    TabAssociationCreatedPage,
    AddAssoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AssociationsProvider,
    AngularFireAuth,
    UserProvider,
    SignUpProvider,
    LogOutProvider  
  ]
})

export class AppModule {}
