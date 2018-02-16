import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Conta } from '../../../shared/Conta';
import { TransacaoConta } from '../../../shared/TransacaoConta';


import { TransactionsService } from '../../../services/transactions/transactions.service';
import { AppLoaderService } from '../../../services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../services/app-confirm/app-confirm.service';

import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: './extrato.component',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoFormComponent implements OnInit {
	val;
	flag={true:true};
	conta:Conta=null;
	transactions:TransacaoConta[];

 
  constructor(private transactionsService:TransactionsService,
  			  private loader:AppLoaderService) { }

  ngOnInit() {}

    openLoaderPesquisarCartao(id:number) {
    	this.loader.open("Pesquisando Cartão...");
      		setTimeout(() => {
       			this.pesquisarCartao(id);
				this.loader.close();
			}, 500);
  	}

    pesquisarCartao(id){
		
  		this.conta = this.transactionsService.loadAccountsByCod(id);
  		
  		if(!this.conta){
  			this.showSnackBar();
  		}else{
  		this.transactions = this.transactionsService.loadTransactionContaById(this.conta.id);
     
    	}
    }

    showSnackBar(){
     this.transactionsService.openSnackBar("Nenhum cartão encontrado!","Fechar");
    }

}