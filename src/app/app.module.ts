import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './myfirst.component';
import { MysecondComponent } from './mysecond/mysecond.component'


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MysecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
