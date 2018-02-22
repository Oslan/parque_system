import { Component, OnInit,OnChanges,SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Produto } from '../../../../shared/Produto';
import { Conta } from '../../../../shared/Conta';
import { Dependente } from '../../../../shared/Dependente';
import { Venda } from '../../../../shared/Venda';

import { Location } from '@angular/common';


import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { AppLoaderService } from '../../../../services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../../services/app-confirm/app-confirm.service';
import { TransactionsService } from '../../../../services/transactions/transactions.service';

@Component({
  selector: './carrinho.component',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
 
 produtos:Produto[]=[];
 produto:Produto;
 conta:Conta;
 venda:Venda;
 total:number=0.0;
 dependentes:Dependente[];
  selectedOption;
    

  constructor(private transactionsService:TransactionsService,
  			      private loader:AppLoaderService,
              private confirmService:AppConfirmService,
              private router:Router
             ){}

  ngOnInit(){
    console.log("INIT");
  }

openLoaderPesquisarProduto(codigo:string) {
    this.loader.open("Pesquisando Produto...");
      setTimeout(() => {
        this.pesquisarProduto(codigo);
       
        this.loader.close();
      }, 200);
  }


  pesquisarProduto(codigo){
  	this.produto = this.transactionsService.findProdutosByCod(codigo);
  	if(!this.produto){
      	this.transactionsService.openSnackBar("Produto não cadastrado","Fechar");
  	}	 else{
      this.produtos=this.transactionsService.addCarrinho(this.produtos,this.produto);
      this.total = this.transactionsService.getTotal(this.produtos);

      console.log("Cart" +this.produtos);
    }
  }

  removerProdutoCarrinho(id){
    this.produtos= this.transactionsService.removeCarrinho(this.produtos,parseInt(id));
    this.total = this.transactionsService.getTotal(this.produtos);
  }

  openLoaderPesquisarCartao(codigo:string) {
    this.loader.open("Pesquisando Cartão...");
      setTimeout(() => {

        this.pesquisarCartao(codigo);
       
        this.loader.close();
      }, 200);
  }

   openLoaderProcessarVenda() {
     this.confirmService.confirm("Confirmar",
       "Realizar Venda ?")
       .subscribe((result) => {
         this.selectedOption = result;
           if (this.selectedOption) {
               this.loader.open("Processando Venda...");
                 setTimeout(() => {
                   this.processarVenda();
                   this.loader.close();
                  }, 1000);
           }
       });
  }

  pesquisarCartao(codigo:string){
    
     this.conta= this.transactionsService.loadAccountsByCod(codigo);
     if(this.conta){
        console.log(this.conta);
        this.dependentes = this.transactionsService.loadDependentesByIdClient(this.conta.client.id);
     }else{
       this.showSnackBar();    
      }
    

  }

  processarVenda(){
    console.log("Processo Venda");
    if((this.conta.saldo - this.total) <= this.conta.saldo){
       this.venda = this.transactionsService.finalizarVenda(this.conta,this.total,this.produtos);
       this.router.navigate(['/caixas/itens-venda/detalhe/'+this.venda.id]);
    }
    else{
        this.showSnackBarVenda();
    }
   
  }

  showSnackBar(){
     this.transactionsService.openSnackBar("Nenhum cartão encontrado. Verifique o número e tente novamente!","Fechar");
  }

  showSnackBarVenda(){
    this.transactionsService.openSnackBar("Saldo insuficiente no cartão!","Fechar");
  }

  reload(){
    location.reload();
  }

 

}