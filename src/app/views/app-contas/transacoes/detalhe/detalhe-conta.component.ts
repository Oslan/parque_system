import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {  Router, ActivatedRoute} from '@angular/router';

import { CustomValidators } from 'ng2-validation';
import { Cartao } from '../../../../shared/Cartao';
import { Client } from '../../../../shared/Client';
import { Conta } from '../../../../shared/Conta';
import { TransacaoContaCartao } from '../../../../shared/TransacaoContaCartao';

import { AppLoaderService } from '../../../../services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../../services/app-confirm/app-confirm.service';
import { TransactionsService } from '../../../../services/transactions/transactions.service';

@Component({
  selector: './detalhe-conta.component',
  templateUrl: './detalhe-conta.component.html',
  styleUrls: ['./detalhe-conta.component.css']
})
export class DetalheContaComponent implements OnInit {
  transacao:TransacaoContaCartao;
  nCartao:string;
 
  constructor(private route:ActivatedRoute,
  			      private transactionsService:TransactionsService) { }

  ngOnInit() {

  		  let id =+ this.route.snapshot.params['id'];
			  this.transacao = 
     		this.transactionsService.loadTransactionsContaCartaoById(id);

           
         if(!this.transacao){
          setTimeout(() => {
             this.showSnackBar("Nenhuma dado encontrado!","Fechar");
           },500);

         }else{
           
         this.nCartao = this.transactionsService.loadAccountsById(this.transacao.conta.id).cartao.identificacao;

         setTimeout(() => {
             this.showSnackBar("Detalhe da Conta","Fechar");
           },500);
         }  
        
  }

  
  

  showSnackBar(title,msg){
      this.transactionsService.openSnackBar(title,msg);
  }

  

}