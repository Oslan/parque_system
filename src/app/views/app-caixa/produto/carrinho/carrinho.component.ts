import { Component, OnInit,OnChanges,SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Produto } from '../../../../shared/Produto';

import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { AppLoaderService } from '../../../../services/app-loader/app-loader.service';
import { TransactionsService } from '../../../../services/transactions/transactions.service';

@Component({
  selector: './carrinho.component',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
 
 produtos:Produto[]=[];
 produto:Produto;
 total:number=0.0;

  constructor(private transactionsService:TransactionsService,
  			  private loader:AppLoaderService) {
    
  }

  ngOnInit() {

  
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
   this.total=0.0;
      this.produtos.forEach((obj,index,objs)=>{
       
         this.total+=obj.preco;
      });
      console.log("Cart" +this.produtos);
    }

  }

  

 

}