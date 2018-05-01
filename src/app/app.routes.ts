import { TelaQuatroComponent } from './telas/tela-quatro/tela-quatro.component';
import { TelaTresComponent } from './telas/tela-tres/tela-tres.component';
import { Routes } from '@angular/router';
import { TelaUmComponent } from './telas/tela-um/tela-um.component';
import { TelasComponent } from './telas/telas.component';

export const ROUTES: Routes = [
    {path: '', component: TelaUmComponent},
    {path: 'tres', component: TelaTresComponent},
    {path: 'quatro', component: TelaQuatroComponent},
    {path: 'telas', component: TelasComponent}
]