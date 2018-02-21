import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Transacao } from '../../shared/Transacao';
import { Client } from '../../shared/Client';
import { Dependente } from '../../shared/Dependente';
import { Cartao } from '../../shared/Cartao';
import { Conta } from '../../shared/Conta';
import { Endereco } from '../../shared/Endereco';
import { Produto } from '../../shared/Produto';
import { Venda } from '../../shared/Venda';
import { ItensVenda } from '../../shared/ItensVenda';
import { TipoTransacaoConta } from '../../shared/TipoTransacaoConta';
import { TransacaoContaCartao } from '../../shared/TransacaoContaCartao';
import { TransacaoConta } from '../../shared/TransacaoConta';

@Injectable()
export class TransactionsService{

	constructor(private snackBar:MatSnackBar){}

  /**
  *Loads
  */
  //produtos
  loadProducts():Produto[]{
        const produtos = localStorage['products'];
          return produtos ? JSON.parse(produtos) : [];
  }

   loadAccountsByNameClient(name:string):Conta[]{
        const contas = this.loadAccounts();
          return contas.filter(conta=> conta.client.name.startsWith(name));
  }

  loadDependentes():Dependente[]{
        const dependentes = localStorage['dependentes'];
          return dependentes ? JSON.parse(dependentes) : [];
  }

  loadDependentesByIdClient(id:number):Dependente[]{
       const dependentes = this.loadDependentes();
          return dependentes.filter(dependente=> dependente.client.id===id);
  }


  loadTransactionsContaCartao():TransacaoContaCartao[]{
        const transacoes = localStorage['transactions_conta_cartao'];
          return transacoes ? JSON.parse(transacoes) : [];
  }

  loadTransactionsConta():TransacaoConta[]{
        const transacoes = localStorage['transactions_conta'];
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

  loadTransactionContaById(id:number):TransacaoConta[]{
        var trans = this.loadTransactionsConta();
          return trans.filter(transacao => transacao.conta.id===id);
  }

  loadTransactionById(id:number):Transacao{
        var trans = this.loadTransactions();
          return trans.find(transacao => transacao.id===id);
  }

  loadTransactionItensVenda():ItensVenda[]{
        const transacoes = localStorage['transactions_itens_venda'];
          return transacoes ? JSON.parse(transacoes) : [];
  }

   loadTransactionVenda():Venda[]{
        const transacoes = localStorage['transactions_venda'];
          return transacoes ? JSON.parse(transacoes) : [];
  }
  

  /**
  *FINDS
  */
  //produtos
  findProdutosByCod(cod):Produto{
      let produtos = this.loadProducts();
         return produtos.find(produto=> produto.codigo === cod);
  }

  /**
  *ADDS
  */

  getTotal(produtos:Produto[]){
      var total:number=0.0;
          produtos.forEach((obj,index,objs)=>{
            total+=obj.preco;
          })

      return total;
  }

  addCarrinho(produtos:Produto[],produto:Produto):Produto[]{
    produtos.push(produto);
    return produtos;
   }

  removeCarrinho(produtos:Produto[],id):Produto[]{
    return produtos.filter(produto=> produto.id != id);
  }

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

    updateTransactionConta(conta:Conta){
           var contas = this.loadAccounts();
             contas.forEach((obj,index,objs)=>{
                objs[index]=conta;

             })

             localStorage['accounts']= JSON.stringify(contas);
             
    }
    addTransactionConta(transacao:TransacaoConta):void{
        const transactions=this.loadTransactionsConta();
          transactions.push(transacao);

            localStorage['transactions_conta']= JSON.stringify(transactions);
  }

  addTransactionItensVenda(itensVenda:ItensVenda):void{
        const transactions=this.loadTransactionItensVenda();
          transactions.push(itensVenda);
            localStorage['transactions_itens_venda']= JSON.stringify(transactions);
  }

  addTransactionVenda(venda:Venda):void{
        const transactions=this.loadTransactionVenda();
          transactions.push(venda);
            localStorage['transactions_venda']= JSON.stringify(transactions);
  }

  addProducts(){
    let produtos:Produto[]=[];

        produtos.push(new Produto(1,
                                 (new Date().getTime().toString())+Math.random()*(1 - 1000) + 1,
                                  'Água Mineral',
                                  2,));

        produtos.push(new Produto(2,
                                 (new Date().getTime().toString())+Math.random()*(1 - 1000) + 1,
                                  'Refrigerante  Fanta Laranja Lt - 250 ml ',
                                  3,));

        produtos.push(new Produto(3,
                                 (new Date().getTime().toString())+Math.random()*(1 - 1000) + 1,
                                  'Batata Frita Rufles pct ',
                                  5,));

        produtos.push(new Produto(4,
                                 (new Date().getTime().toString())+Math.random()*(1 - 1000) + 1,
                                  'Caixa Chocolate - Garoto',
                                  10,));

        produtos.push(new Produto(5,
                                 (new Date().getTime().toString())+Math.random()*(1 - 1000) + 1,
                                  'Amedoin Chines cx ',
                                  2,));

    localStorage['products'] = JSON.stringify(produtos);
  }



  addDependente(){
     let dependentes:Dependente[]=[]; 

     dependentes.push(new Dependente(1,
                                     new Date().getTime().toString(),
                                     'Joao Albuquerque',
                                     'crianca01.jpg',
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
     dependentes.push(new Dependente(2,
                                     new Date().getTime().toString(),
                                     'Marcos Vinicius',
                                     'crianca02.jpg',
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
     dependentes.push(new Dependente(3,
                                     new Date().getTime().toString(),
                                     'Daniel Santos',
                                     'crianca03.jpg',
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
     dependentes.push(new Dependente(4,
                                     new Date().getTime().toString(),
                                     'Carlos Nogueira',
                                     'crianca04.jpg',
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

     localStorage['dependentes'] = JSON.stringify(dependentes);
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

  finalizarVenda(conta:Conta,valor:number,produtos:Produto[]){

    console.log(typeof valor);
   
    conta.saldo-=valor;
    let venda = new Venda(new Date().getTime(),
                          new Date().getTime().toString()+'v',
                          new Date(),
                          conta);

    this.updateTransactionConta(conta);
    
    for (var i = 0; i < produtos.length; i++) {
          this.addTransactionItensVenda(new ItensVenda(new Date().getTime()+i,
                                                       new Date().getTime()+i+"iv",
                                                       produtos[i],
                                                       venda));

    }

      this.addTransactionVenda(venda);
      var transacaoConta = new TransacaoConta(new Date().getTime(),
                                                         new Date().getTime().toString()+'cc',
                                                         new Date(),
                                                         conta,
                                                         TipoTransacaoConta.MENSAGEM_COMPRA);
      var transacao = new Transacao(new Date().getTime(),
                                           new Date().getTime().toString()+'c',
                                           new Date(),valor,
                                           conta);

                       this.addTransaction(transacao);
                       transacaoConta.transacao=transacao;


       this.addTransactionConta(transacaoConta);


       console.log(this.loadTransactionVenda());
       console.log(this.loadTransactionItensVenda());

  }

  finalizarProcessoConta(conta:Conta,recarga:number){
      var transacaoContaCartao=null;
      var transacao=null;
      var transacaoConta:TransacaoConta=null;
      let r:boolean=false;

   
       let re=null;
      var contas:Conta[] = this.loadAccounts();

        //se houve valor de recarga => sentinela setada
        if(recarga  != null && recarga!=0){
           re = parseFloat(recarga.toString());
            r=true;
        }
        //verifica qual foi a conta , e faz a alteracao do valor saldo e cria uma nova transacao
            contas.forEach((obj,index,objs)=>{
               if(conta.id === obj.id){
                   //+= atribui o valor com o anterior
                   //=+ atribui o valor independente do valor anterior
                   if(r){

                       transacaoConta = new TransacaoConta(new Date().getTime(),
                                                         new Date().getTime().toString()+'cc',
                                                         new Date(),
                                                         conta,
                                                         TipoTransacaoConta.MENSAGEM);

                      
                       conta.saldo += parseFloat(recarga.toString());
                       transacao = new Transacao(new Date().getTime(),
                                           new Date().getTime().toString()+'c',
                                           new Date(),re,
                                           conta);

                       this.addTransaction(transacao);
                       transacaoConta.transacao=transacao;
                       this.addTransactionConta(transacaoConta);
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

 
