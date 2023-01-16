import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HydroponicgardenComponent } from './hydroponicgarden/hydroponicgarden.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HydroponicgardenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
