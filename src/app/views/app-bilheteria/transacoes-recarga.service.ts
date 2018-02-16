import { Injectable } from '@angular/core';
import { Transacao } from '../../shared/Transacao';
import { TransacaoConta } from '../../shared/TransacaoConta';
import { TipoTransacaoConta } from '../../shared/TipoTransacaoConta';
import { Conta } from '../../shared/Conta';

import { TransactionsService } from '../../services/transactions/transactions.service';


@Injectable()
export class TransacaoRecargaService{


	constructor(private transactionsService:TransactionsService){}

    findTransaction(id:number):Transacao{
       const transactions = this.loadTransactions();
          return transactions.find(transacao => transacao.id===id);

     }

  	loadTransactions():Transacao[]{
  			const transacoes = localStorage['transactions'];
  				return transacoes ? JSON.parse(transacoes) : [];
  	}

    
     loadAccounts():Conta[]{
            const contas = localStorage['accounts'];
            return contas ? JSON.parse(contas) : [];
    }

    loadAccountsById(id:string):Conta{
            
          var contas = this.loadAccounts();
          return contas.find(conta => conta.cod===id);
    }

    addTransaction(transacao:Transacao):void{
      console.log("Adicionar Transacao");
      const transactions=this.loadTransactions();
      transactions.push(transacao);

      localStorage['transactions']= JSON.stringify(transactions);
  }


   finalizarProcessoConta(conta:Conta,val:string):Transacao{
       let transacaoConta:TransacaoConta=null;
       var contas:Conta[] = this.loadAccounts();
       let contaTemp:Conta =null;
       
          contas.forEach((obj,index,objs)=>{
             if(conta.id === obj.id){
               //+= atribui o valor com o anterior
               //=+ atribui o valor independente do valor anterior
              // cartao.conta.saldo += parseFloat(val);
              //cartao.saldo=20;
               transacaoConta = new TransacaoConta(new Date().getTime(),
                                                         new Date().getTime().toString()+'cc',
                                                         new Date(),
                                                         conta,
                                                         TipoTransacaoConta.MENSAGEM);



              contas[index].saldo += parseFloat(val);
              }
            //  objs[index]=cartao;
 
            //}
          });

        localStorage['accounts']= JSON.stringify(contas);

       //contas = this.loadAccounts();
       contaTemp= this.loadAccountsById(conta.cod);
       console.log("CONTA " + contaTemp.id);
       let  recarga = new Transacao(new Date().getTime(),new Date().getTime().toString()+'c',new Date(),parseFloat(val),contaTemp);
       this.addTransaction(recarga);
       transacaoConta.transacao=recarga;
       this.transactionsService.addTransactionConta(transacaoConta);

       return recarga;

     }


}