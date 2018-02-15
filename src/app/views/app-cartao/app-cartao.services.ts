import { Injectable } from '@angular/core';
import { Transacao } from '../../shared/Transacao';
import { Cartao } from '../../shared/Cartao';
import { Conta } from '../../shared/Conta';
import { Client } from '../../shared/Client';

@Injectable()
export class CartaoService{

private cartao:Cartao;
private clients:Client[]=[];

	constructor(){
          //localStorage['cartoes']= JSON.stringify(this.cartoes);
        
	}

   listarClientes():Client[]{
     var cartoes = localStorage['cartoes'];
      
          cartoes = JSON.parse(cartoes);
          cartoes.forEach((obj,index,objs)=>{
             this.clients.push(objs[index].conta.client);
            
        });
         
          return this.clients;
    }
  
  listarCartoes():Cartao[]{
        const cartoes = localStorage['cartoes'];
          return cartoes ? JSON.parse(cartoes) : [];
    }


}