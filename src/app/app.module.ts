import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/**
*  Services
*/
import { InspectFieldService } from './service/inspectField/inspect-field.service';


/**
*  Providers
*/
import { LoginService } from './providers/login/login.service';
import { SignupService } from './providers/signup/signup.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
    ],
    providers: [
      StatusBar,
      SplashScreen,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    /**
    *  Providers
    */
      LoginService,
      SignupService,
      
    /**
    *  Services
    */
      InspectFieldService

     ],
  bootstrap: [AppComponent],
})
export class AppModule {}
