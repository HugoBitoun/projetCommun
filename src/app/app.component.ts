import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AuthPage} from "../pages/auth/auth";
import {AssociationsPage} from "../pages/associations/associations";
import { LogOutProvider } from '../providers/log-out/log-out';
import {MyAssociationsPage} from "../pages/my-associations/my-associations";
import { ParameterCountPage } from '../pages/parameter-count/parameter-count';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AuthPage;

  pages: Array<{title: string, component: any}>;
  user = null;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
                public logOutProvider: LogOutProvider, public alertController: AlertController) {
    this.initializeApp();    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
        {title : 'Associations', component : AssociationsPage},        
      {title : 'Mes associations', component : MyAssociationsPage}
    ];
  }

  ngOnInit(): void {
    this.logOutProvider.getAuthState().subscribe(
      (user) => this.user=user);    
  }

  parameterCount(){
    this.nav.setRoot(ParameterCountPage);
  }

  async logout(){
   this.logOutProvider.logout();   
   this.nav.setRoot(AuthPage);
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //firebase.initializeApp(environment.firebase);
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
