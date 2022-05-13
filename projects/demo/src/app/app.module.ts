import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxStarPortModule } from 'ngx-star-port';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { MasterComponent } from './components/master/master.component';
import { StarShipComponent } from './components/star-ship/star-ship.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent,
    StarShipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStarPortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
