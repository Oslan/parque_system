import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Transacao } from '../../shared/Transacao';
import { Client } from '../../shared/Client';
import { Cartao } from '../../shared/Cartao';
import { Conta } from '../../shared/Conta';
import { Endereco } from '../../shared/Endereco';
import { TransacaoContaCartao } from '../../shared/TransacaoContaCartao';

@Injectable()
export class TransactionsService{

	constructor(private snackBar:MatSnackBar){}

  /**
  * Loads
  */

  loadTransactionsContaCartao():TransacaoContaCartao[]{
        const transacoes = localStorage['transactions_conta_cartao'];
          return transacoes ? JSON.parse(transacoes) : [];
  }

  loadTransactionsContaCartaoById(id:number):TransacaoContaCartao{
        var transacoes  = this.loadTransactionsContaCartao();
          return transacoes.find(trans=> trans.id === id);
  }

  loadTransactions():Transacao[]{
  			const transacoes = localStorage['transactions'];
  				return transacoes ? JSON.parse(transacoes) : [];
  }

	loadAccounts():Conta[]{
	      const contas = localStorage['accounts'];
	        return contas ? JSON.parse(contas) : [];
	}

  loadAccountsById(id:number):Conta{
        var contas = this.loadAccounts();
          return contas.find(conta => conta.id===id);
  }


  loadAccountsByCod(cod:string):Conta{
        var conta=null;
        var contas:Conta[] = this.loadAccounts();
        contas = contas.filter(conta=> conta.cartao !== null);
           //contas.forEach((obj,index,objs)=>{
            // console.log(obj.cartao);
                  //if(obj.cartao.identificacao == cod){
                  //  conta= objs[index];
                 // }
            //});
          
          //contas= contas.filter(conta=> conta.cartao.identificacao == cod);
           return contas.find(conta=> conta.cartao.identificacao == cod);
  }



  loadTransactionById(id:number):Transacao{
        var trans = this.loadTransactions();
          return trans.find(transacao => transacao.id===id);
  }
  /**
  * ADDS
  */

  addTransaction(transacao:Transacao):void{
        const transactions=this.loadTransactions();
          transactions.push(transacao);

            localStorage['transactions']= JSON.stringify(transactions);
  }

  addTransactionContaCartao(transacao:TransacaoContaCartao):void{
        const transactions=this.loadTransactionsContaCartao();
          transactions.push(transacao);

            localStorage['transactions_conta_cartao']= JSON.stringify(transactions);
  }

  addContas(){

		let contas:Conta[]=[];
		//let rand Math.random() * (1 - 1000) + 1;
		contas.push(new Conta(1,
													(new Date().getTime().toString())+Math.random() * (1 - 1000) + 1 ,
	  										  0,
                          0,
                          null,
                          new Client(1,
                              'Oslan Caio Souza Aguiar',
                              'caio.aguiar2528@gmail.com',
                              'face-1.jpg',
                               true,
                               false,
                               new Endereco(1,
                                            "Nova Cidade",
                                            "Salonika",
                                            "363"))));

    contas.push(new Conta(2,
                         (new Date().getTime().toString())+Math.random() * (1 - 1000) + 1,
                          0,
                          0,
                          null,
                          new Client(2,
                              'Marcos Vinicius Almeida Aguiar',
                              'marcos.aguiar2528@gmail.com',
                              'face-3.jpg',
                              true,
                              false,
                              new Endereco(2,
                                           "Cidade Nova",
                                           "Rua 3",
                                           "33"))));
    contas.push(new Conta(3,
                        (new Date().getTime().toString())+Math.random() * (1 - 1000) + 1,
                          0,
                          0,
                          null,
                          new Client(3,
                              'Raimunda de Fátima Rodrigues Aguiar',
                              'raimunda.aguiar2528@gmail.com',
                              'face-5.jpg',
                              true,
                              false,
                              new Endereco(3,
                                          "Zona Leste",
                                          "Ribeirinho",
                                          "90"))));
    contas.push(new Conta(4,
                          (new Date().getTime().toString())+Math.random() * (1 - 1000) + 1,
                          0,
                          0,
                          null,
                          new Client(4,
                              'Osvaldo da Silva Souza',
                              'osvaldo.aguiar2528@gmail.com',
                              'face-2.jpg',
                              true,
                              false,
                              new Endereco(4,
                                          "Nova Cidade",
                                          "Rodhes",
                                           "230"))));
    contas.push(new Conta(5,
                         (new Date().getTime().toString())+Math.random() * (1 - 1000) + 1,
                          0,
                          0,
                          null,
                          new Client(5,
                              'Sílvia Paiva do Carmo',
                              'silvia.aguiar2528@gmail.com',
                              'face-4.jpg',
                              true,
                              false,
                              new Endereco(5,
                                           "Planalto",
                                           "Av. Dublin",
                                           "300"))));
    contas.push(new Conta(6,
                         (new Date().getTime().toString())+Math.random() * (1 - 1000) + 1,
                          0,
                          0,
                          null,
                          new Client(6,
                              'Ana Regina Rodrigues Aguiar',
                              'ana.aguiar2528@gmail.com',
                              'image01.jpg',
                              true,
                              false,
                              new Endereco(6,
                                           "Zona Leste",
                                           "Rua 144",
                                           "3"))));
    contas.push(new Conta(7,
                         (new Date().getTime().toString())+Math.random() * (1 - 1000) + 1,
                          0,
                          0,
                          null,
                          new Client(7,
                              'Marco Aurelio Aguiar Monteiro',
                              'marco.aguiar2528@gmail.com',
                              'face-6.jpg',
                              true,
                              false,
                              new Endereco(7,
                                           "Zona LEste",
                                           "Rua 104",
                                           "90"))));
      
      localStorage['accounts'] = JSON.stringify(contas);
  }

  finalizarProcessoConta(conta:Conta,val:string,recarga:number):Conta{
      var transacaoContaCartao=null;
      var transacao=null;
      let r:boolean=false;

      var contas:Conta[] = this.loadAccounts();

        //se houve valor de recarga => sentinela setada
        if(recarga  != null && recarga!=0){
            r=true;
        }
        //verifica qual foi a conta , e faz a alteracao do valor saldo e cria uma nova transacao
            contas.forEach((obj,index,objs)=>{
               if(conta.id === obj.id){
                   //+= atribui o valor com o anterior
                   //=+ atribui o valor independente do valor anterior
                   if(r){
                       conta.saldo += parseFloat(recarga.toString());
                       transacao = new Transacao(new Date().getTime(),
                                           new Date().getTime().toString()+'c',
                                           new Date(),recarga,
                                           conta);

                       this.addTransaction(transacao);
                    }
                          objs[index]=conta;
                }
            });

            transacaoContaCartao=new TransacaoContaCartao(
                                        new Date().getTime(),
                                        new Date().getTime().toString(),
                                        new Date(),
                                        conta,
                                        transacao);

                       this.addTransactionContaCartao(transacaoContaCartao);
          
                         localStorage['accounts']= JSON.stringify(contas);

    return transacaoContaCartao;
  }

  openSnackBar(title:string,msg:string){
    this.snackBar.open(title, msg, { duration: 2000 });
  }

  emptyTransactions(){
    localStorage['transactions']=[];
  }

  emptyTransactionsContaCartao(){
    localStorage['transactions_conta_cartao']=[];
  }

}

 
