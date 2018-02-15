import { Routes } from '@angular/router';

import { ExtratoFormComponent } from './extrato/extrato.component';
import { AberturaContaComponent } from './abertura/abertura-conta.component';
import { DetalheContaComponent } from './transacoes/detalhe/detalhe-conta.component';
import { DetalheAberturaContaComponent } from './abertura/detalhe-abertura/detalhe-abertura-conta.component';
import { TransacoesContaComponent } from './transacoes/transacoes-conta.component';

export const ContasRoutes: Routes = [
         
    {
    	path: '',
    	children: [
      {
          path: 'abertura-conta',
          component: AberturaContaComponent,
          data: { title: 'Abertura de Conta', breadcrumb: 'ABERTURA DE CONTA' }
      },
    	{
      		path: 'extrato',
      		component: ExtratoFormComponent,
      		data: { title: 'Extrato', breadcrumb: 'EXTRATO' }
      },
      {
          path: 'transacoes-conta',
          component: TransacoesContaComponent,
          data: { title: 'TRANSAÇÕES', breadcrumb: 'TRANSAÇÕES' }
      },
      {
          path: 'transacoes/detalhe/:id',
          component: DetalheContaComponent,
          data: { title: 'DETALHE CONTA', breadcrumb: 'DETALHE CONTA' }
      },
      {
          path: 'transacoes/abertura/detalhe-abertura/:id',
          component: DetalheAberturaContaComponent,
          data: { title: 'DETALHE', breadcrumb: 'DETALHE' }
      }
        
    	]
    }
]