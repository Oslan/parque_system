import { Injectable } from '@angular/core';
import { Transacao } from '../../shared/Transacao';
import { Cartao } from '../../shared/Cartao';
import { Conta } from '../../shared/Conta';
import { Client } from '../../shared/Client';


@Injectable()
export class ContaService{

	constructor(){}

   loadCartoes(){
        var cartoes =  localStorage['cartoes'] ;
        return cartoes ? JSON.parse(cartoes):[];
   }

  loadClients():Client[]{
          const clients = localStorage['clients'];
          return clients ? JSON.parse(clients) : [];
  }

  loadClientsSemcontas():Client[]{
          const clients = this.loadClients();
          return clients.filter(client=> !client.isConta);
  }



  private alterarClient(client:Client):void{
             const clients = this.loadClientsSemcontas();
            clients.forEach((obj,index,objs)=>{
                  if(obj.id == client.id){
                     objs[index]=client;
                  }
            });

         localStorage['clients']= JSON.stringify(clients);

      }

  private alterarClientisConta(client:Client):void{
             const clients = this.loadClientsSemcontas();
            clients.forEach((obj,index,objs)=>{
                  if(obj.id == client.id){
                     objs[index]=client;
                  }
            });

         localStorage['clients']= JSON.stringify(clients);

      }

 

   finalizarProcessoConta(conta:Conta,val:string):void{

       var contas:Conta[] = this.loadCartoes();
       
      contas.forEach((obj,index,objs)=>{
           // if(cartao.id === obj.id){
               //+= atribui o valor com o anterior
               //=+ atribui o valor independente do valor anterior
              // cartao.conta.saldo += parseFloat(val);
              //cartao.saldo=20;
             
            //  objs[index]=cartao;
        console.log(obj[index]);
            //}
        });

  
         localStorage['cartoes']= JSON.stringify(contas);

     }

   addCartoes(cartao){

        var cartoes = this.loadCartoes();
        cartoes.push(cartao);
        localStorage['cartoes'] = JSON.stringify(cartoes);
   }

  

     loadTransactions():Transacao[]{
        const transacoes = localStorage['transactions'];
          return transacoes ? JSON.parse(transacoes) : [];
  }


}
