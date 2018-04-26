import { TelaQuatroComponent } from './tela-quatro/tela-quatro.component';
import { TelaTresComponent } from './tela-tres/tela-tres.component';
import { Routes } from '@angular/router';
import { TelaUmComponent } from './tela-um/tela-um.component';

export const ROUTES: Routes = [
    {path: '', component: TelaUmComponent},
    {path: 'tres', component: TelaTresComponent},
    {path: 'quatro', component: TelaQuatroComponent}
]