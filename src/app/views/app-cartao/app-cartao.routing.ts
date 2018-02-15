import { Routes } from '@angular/router';
import { AssociacaoComponent } from './associacao/associacao.component';
import { CadastroCartaoComponent } from './cadastro/cadastro-cartao.component';

export const CartaoRoutes: Routes = [
         
    {
    	path: '',
    	children: [
    	{
      		path: 'associacao',
      		component: AssociacaoComponent,
      		data: { title: 'Associar Cartao', breadcrumb: 'ASSOCIACAO' }
      },
      {
          path: 'cadastro',
          component: CadastroCartaoComponent,
          data: { title: 'Cadastrar Cartao', breadcrumb: 'CADASTRO' }
      }
      	
    	]
    }
]