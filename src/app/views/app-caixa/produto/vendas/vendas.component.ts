import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { TransactionsService } from '../../../../services/transactions/transactions.service';

import { Venda} from '../../../../shared/Venda';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']


})
export class VendasComponent implements OnInit {

  transacoes:Venda[];

  constructor( private transactionsService:TransactionsService) { }

  ngOnInit() {

     this.transacoes = this.transactionsService.loadTransactionVenda();

     if(this.transacoes.length==0){
        setTimeout(() => {
         this.transactionsService.openSnackBar("Nenhuma Venda efetuada!","Fechar");
        },200);
     }else{
         
         console.log(this.transacoes);
     }
  }
}