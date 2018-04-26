import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TelaUmComponent } from './tela-um/tela-um.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaUmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
