import { Routes } from '@angular/router';

import { CarrinhoComponent } from './produto/carrinho/carrinho.component';

export const CaixaRoutes: Routes = [
         
    {
    	path: '',
    	children: [
    	{
      		path: 'carrinho',
      		component: CarrinhoComponent,
      		data: { title: 'Carrinho', breadcrumb: 'CARRINHO' }
      }
      
    	]
    }
];