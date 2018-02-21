import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { TransactionsService } from '../../../../services/transactions/transactions.service';

import { ItensVenda} from '../../../../shared/ItensVenda';
import { Conta} from '../../../../shared/Conta';
import { Venda} from '../../../../shared/Venda';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'detalhe-venda',
  templateUrl: './detalhe-venda.component.html',
  styleUrls: ['./detalhe-venda.component.css']

})
export class DetalheVendaComponent implements OnInit {

  itensVenda:ItensVenda[];
  conta:Conta;
  venda:Venda;


  constructor( private transactionsService:TransactionsService,
                private route:ActivatedRoute ) { }

  ngOnInit() {

     let id =+ this.route.snapshot.params['id'];

     this.itensVenda = this.transactionsService.loadTransactionItensVendaByIdVenda(id);

  
     if(this.itensVenda.length==0){
        setTimeout(() => {
         this.transactionsService.openSnackBar("Nenhum item de venda a ser mostrado!","Fechar");
        },200);
     }else{
          this.venda= this.itensVenda[0].venda;
          this.conta = this.itensVenda[0].venda.conta;
         console.log(this.itensVenda);
     }
  }
}