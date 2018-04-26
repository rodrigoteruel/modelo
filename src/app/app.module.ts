
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { TelaUmComponent } from './tela-um/tela-um.component';
import { TelaTresComponent } from './tela-tres/tela-tres.component';
import { TelaQuatroComponent } from './tela-quatro/tela-quatro.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaUmComponent,
    TelaTresComponent,
    TelaQuatroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
