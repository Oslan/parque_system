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

  loadClients():Client[]{
          const clients = localStorage['clients'];
          return clients ? JSON.parse(clients) : [];
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
    //Capital Cities - Safe And Sound 

 //tarefas = tarefas.filter(tarefa=> tarefa.id !== id);
  loadClientsSemcontas():Client[]{
          const clients = this.loadClients();
          return clients.filter(client=> !client.isConta);
  }
   loadCartoes():Cartao[]{
     var cartoes:Cartao[]=[];
          var contas = this.loadAccounts();
           contas = contas.filter(conta=> conta.cartao !== null);
         
           contas.forEach((obj,index,objs)=>{
                  cartoes.push(objs[index].cartao);
            });

           return cartoes;
  }

    loadCartaoById(id:string):Cartao{
        var cartoes:Cartao[] = this.loadCartoes();
        return cartoes.find(cartao=> cartao.identificacao == id);
    }


    
   addTransaction(transacao:Transacao):void{
      console.log("Adicionar Transacao");
      const transactions=this.loadTransactions();
      transactions.push(transacao);

      localStorage['transactions']= JSON.stringify(transactions);
  }

   addTransactionContaCartao(transacao:TransacaoContaCartao):void{
      console.log("Adicionar Transacao Conta Cartao");
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
                                           "Rua 104",))));
      
      localStorage['accounts'] = JSON.stringify(contas);
  }


 addClients():void{

      let clients:Client[]=[];

      clients.push(new Client(1,
                              'Oslan Caio Souza Aguiar',
                              'caio.aguiar2528@gmail.com',
                              'face-1.jpg',
                              true,
                              false,
                              new Endereco(1,
                                           "Nova Cidade",
                                           "Salonika",
                                           "363")));
      clients.push(new Client(2,
                              'Marcos Vinicius Almeida Aguiar',
                              'marcos.aguiar2528@gmail.com',
                              'face-3.jpg',
                              true,
                              false,
                              new Endereco(2,
                                           "Cidade Nova",
                                           "Rua 3",
                                           "33")));
      clients.push(new Client(3,
                              'Raimunda de Fátima Rodrigues Aguiar',
                              'raimunda.aguiar2528@gmail.com',
                              'face-5.jpg',
                              true,
                              false,
                              new Endereco(3,
                                          "Zona Leste",
                                          "Ribeirinho",
                                          "90")));
      clients.push(new Client(4,
                              'Osvaldo da Silva Souza',
                              'osvaldo.aguiar2528@gmail.com',
                              'face-2.jpg',
                              true,
                              false,
                              new Endereco(4,
                                          "Nova Cidade",
                                          "Rodhes",
                                           "230")));
      clients.push(new Client(5,
                              'Sílvia Paiva do Carmo',
                              'silvia.aguiar2528@gmail.com',
                              'face-4.jpg',
                              true,
                              false,
                              new Endereco(5,
                                           "Planalto",
                                           "Av. Dublin",
                                           "300")));

       clients.push(new Client(6,
                              'Ana Regina Rodrigues Aguiar',
                              'ana.aguiar2528@gmail.com',
                              'image01.jpg',
                              true,
                              false,
                              new Endereco(6,
                                           "Zona Leste",
                                           "Rua 144",
                                           "3")));

       clients.push(new Client(7,
                              'Marco Aurelio Aguiar Monteiro',
                              'marco.aguiar2528@gmail.com',
                              'face-6.jpg',
                              true,
                              false,
                              new Endereco(7,
                                           "Zona LEste",
                                           "Rua 104",
                                           "30")));

      localStorage['clients'] = JSON.stringify(clients);

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

//  addTransactionOpenAccount(client:Client):AberturaConta{
    /**
         const accounts= this.loadTransactionOpenAccount();

         var novaConta = new Conta(new Date().getTime(),
                                  new Date().getTime().toString(),
                                  0,
                                  0,
                                  false,
                                  client);


          var cartao = new Cartao(new Date().getTime(),
                                  new Date().getTime().toString(),
                                  true,
                                  true,
                                  novaConta
                                  );


         var aberturaConta = new AberturaConta(new Date().getTime(),
                                               new Date(),
                                               TipoTransacaoConta.ABERTURA_CONTA,
                                               cartao);



         client.isConta=true;
         this.alterarClient(client);
         accounts.push(aberturaConta);
         localStorage['accountsWithCards'] = JSON.stringify(accounts);

     return aberturaConta;
  }

  empyTransactionAssociationCardAccount():void{

   localStorage['accountsWithCards'] = [];
	 **/
//  }


    finalizarProcessoConta(conta:Conta,val:string,recarga:number):Conta{
        var transacaoContaCartao=null;
        var transacao=null;
        let r:boolean=false;
        var contas:Conta[] = this.loadAccounts();

          if(recarga  != null && recarga!=0){
          //contas = this.carregaCartao(contas,conta,recarga);
            r=true;
          }

         contas.forEach((obj,index,objs)=>{
           if(conta.id === obj.id){

               //+= atribui o valor com o anterior
               //=+ atribui o valor independente do valor anterior
              //conta.saldo += parseFloat(val);
          
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

 