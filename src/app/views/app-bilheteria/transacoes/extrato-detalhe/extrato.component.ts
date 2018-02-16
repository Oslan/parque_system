import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { TransactionsService } from '../../../../services/transactions/transactions.service';
import { TransacaoRecargaService} from '../../transacoes-recarga.service';
import {  Router,ActivatedRoute } from '@angular/router';
import { Transacao } from '../../../../shared/Transacao';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'extrato',
  templateUrl: './extrato.component.html',

})
export class ExtratoComponent implements OnInit {
 	comprovante:Transacao=null;


  constructor(private route:ActivatedRoute,
  			  private transacaoRecargaService:TransacaoRecargaService,
  			  private transactionsService:TransactionsService) { }

  ngOnInit() {
   	let id =+ this.route.snapshot.params['id'];
	this.comprovante = this.transacaoRecargaService.findTransaction(id);

              

   		if(!this.comprovante){
   			  	setTimeout(()=>{
    			this.showSnackBar();
    			},200);  
   		}else{
   			console.log(this.comprovante);
   		}



  }


   showSnackBar(){
     this.transactionsService.openSnackBar("Nenhum comprovante encontrado!","Fechar");
   }

}