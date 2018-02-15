import { Routes } from '@angular/router';

import { RecargaFormComponent } from './recarga/app-recarga.component';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { ExtratoComponent } from './transacoes/extrato-detalhe/extrato.component';

export const BilheteriaRoutes: Routes = [
         
    {
    	path: '',
    	children: [
    	{
      		path: 'recarga',
      		component: RecargaFormComponent,
      		data: { title: 'Recarga', breadcrumb: 'RECARGA' }
      	},
      	{
      		path: 'transacoes',
     		component: TransacoesComponent,
     		data: { title: 'Transacoes', breadcrumb: 'TRANSACOES' }
    	},
    	{
      		path: 'transacoes/extrato-detalhe/:id',
     		component: ExtratoComponent,
     		data: { title: 'Comprovante Detalhe', breadcrumb: 'COMPROVANTE DETALHE' }
    	}
    	]
    }
];