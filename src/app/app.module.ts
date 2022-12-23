import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StorageModule } from '../../src/app/storage/storage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StorageModule,
    BrowserModule, 
    HttpClientModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25})
  ],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy 
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
