import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieService } from './movies.service';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(AppComponent), HttpModule],
  providers: [MovieService, StatusBar, SplashScreen, {provide: ErrorHandler, useClass: IonicErrorHandler}],
  bootstrap: [IonicApp],
  entryComponents: [AppComponent, HomePage]
})
export class AppModule { }
