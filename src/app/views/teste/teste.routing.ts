import { Routes } from '@angular/router';

import { TesteComponent } from './teste.component';


export const TesteRoutes: Routes = [
  { path: '', component: TesteComponent, data: { title: 'Teste' } }
];