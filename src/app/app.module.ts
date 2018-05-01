
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { TelaUmComponent } from './telas/tela-um/tela-um.component';
import { TelaTresComponent } from './telas/tela-tres/tela-tres.component';
import { TelaQuatroComponent } from './telas/tela-quatro/tela-quatro.component';
import { TelasComponent } from './telas/telas.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaUmComponent,
    TelaTresComponent,
    TelaQuatroComponent,
    TelasComponent
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
