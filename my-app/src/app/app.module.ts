import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  declarations: [
    
    XyzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [XyzComponent]
})
export class AppModule { }
