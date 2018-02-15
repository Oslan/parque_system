import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
//import { TransactionsService } from '../../../services/transactions/transactions.service';
import { TransactionsService } from '../../../services/transactions/transactions.service';

import { TransacaoContaCartao } from '../../../shared/TransacaoContaCartao';
import { Conta } from '../../../shared/Conta';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'transacoes-conta',
  templateUrl: './transacoes-conta.component.html'
})
export class TransacoesContaComponent implements OnInit {
  transacoes:TransacaoContaCartao[];

 
  constructor( private transacoesService:TransactionsService) { }

    ngOnInit() {
     this.transacoes = this.transacoesService.loadTransactionsContaCartao();
     
     	if(this.transacoes.length==0){
     		setTimeout(()=>{
     		this.showSnackBar("Nenhuma transação encontrada!","Fechar");
     		},200);
     	}
    } 

  
	showSnackBar(title:string,msg:string){
       this.transacoesService.openSnackBar(title, msg);
    }

  

}