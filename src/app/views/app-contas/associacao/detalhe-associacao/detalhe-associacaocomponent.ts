import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {  Router, ActivatedRoute} from '@angular/router';

import { CustomValidators } from 'ng2-validation';
import { Cartao } from '../../../../shared/Cartao';
import { Client } from '../../../../shared/Client';
import { Conta } from '../../../../shared/Conta';
import { Transacao } from '../../../../shared/Transacao';
import { TransacaoContaCartao } from '../../../../shared/TransacaoContaCartao';

import { AppLoaderService } from '../../../../services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../../services/app-confirm/app-confirm.service';
import { TransactionsService } from '../../../../services/transactions/transactions.service';

@Component({
  selector: './detalhe-associacao.component',
  templateUrl: './detalhe-associacao.component.html',
  styleUrls: ['./detalhe-associacao.component.css']
})
export class DetalheAssociacaoComponent implements OnInit {
  detalhe:TransacaoContaCartao;
 
  constructor(private route:ActivatedRoute,
  			      private transactionsService:TransactionsService) { }

  ngOnInit() {

  		  let id =+ this.route.snapshot.params['id'];
			  this.detalhe = 
     		this.transactionsService.loadTransactionsContaCartaoById(id);
     		console.log(this.detalhe);
         if(!this.detalhe){
             setTimeout(()=>{
             this.showSnackBar("Nenhum detalhe de conta encontrado!","Fechar");
            },200);
         }
  }

  showSnackBar(title,msg){
      this.transactionsService.openSnackBar(title,msg);
  }

}