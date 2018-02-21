import { Routes } from '@angular/router';

import { CarrinhoComponent } from './produto/carrinho/carrinho.component';
import { VendasComponent } from './produto/vendas/vendas.component';
import { DetalheVendaComponent } from './produto/detalhe/detalhe-venda.component';

export const CaixaRoutes: Routes = [
         
    {
    	path: '',
    	children: [
    	{
      		path: 'carrinho',
      		component: CarrinhoComponent,
      		data: { title: 'Carrinho', breadcrumb: 'CARRINHO' }
      },
      {
          path: 'vendas',
          component: VendasComponent,
          data: { title: 'Vendas', breadcrumb: 'VENDAS' }
      },
       {
          path: 'itens-venda/detalhe/:id',
          component: DetalheVendaComponent,
          data: { title: 'Detalhe', breadcrumb: 'Detalhe ' }
      }
      
    	]
    }
];