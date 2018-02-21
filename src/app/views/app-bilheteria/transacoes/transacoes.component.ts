import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { TransactionsService } from '../../../services/transactions/transactions.service';
import { TransacaoRecargaService } from '../transacoes-recarga.service';
import { Transacao } from '../../../shared/Transacao';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.css']


})
export class TransacoesComponent implements OnInit {
  transacoes:Transacao[];

 
  constructor( private transactionsService:TransactionsService,
               private transacaoRecargaService:TransacaoRecargaService ) { }

  ngOnInit() {
   this.transacoes = this.transacaoRecargaService.loadTransactions();
   
     if(this.transacoes.length==0){
        setTimeout(() => {
         this.transactionsService.openSnackBar("Nenhuma transação de recarga efetuada!","Fechar");
        },200);
     }
  }
}