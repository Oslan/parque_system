import { Routes } from '@angular/router';

import { ExtratoFormComponent } from './extrato/extrato.component';
import { AssociacaoContaComponent } from './associacao/associacao-conta.component';
import { DetalheContaComponent } from './transacoes/detalhe/detalhe-conta.component';
import { DetalheAssociacaoComponent } from './associacao/detalhe-associacao/detalhe-associacaocomponent';
import { TransacoesContaComponent } from './transacoes/transacoes-conta.component';

export const ContasRoutes: Routes = [      
    {
    	path: '',
    	children: [
      {
          path: 'associar-conta',
          component: AssociacaoContaComponent,
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
          path: 'transacoes/associacao/detalhe-associacao/:id',
          component: DetalheAssociacaoComponent,
          data: { title: 'DETALHE', breadcrumb: 'DETALHE' }
      }
        
    	]
    }
]