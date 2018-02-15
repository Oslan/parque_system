import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Conta } from '../../../shared/Conta';
import { Transacao } from '../../../shared/Transacao';
import { AppLoaderService } from '../../../services/app-loader/app-loader.service';
import { TransactionsService } from '../../../services/transactions/transactions.service';
import { AppConfirmService } from '../../../services/app-confirm/app-confirm.service';
import { TransacaoRecargaService } from '../transacoes-recarga.service';


@Component({
  selector: 'app-recarga-form',
  templateUrl: './app-recarga.component.html',
  //styleUrls: ['./basic-form.component.css']
})
export class RecargaFormComponent implements OnInit {
 formData = {}
 console = console;
 basicForm: FormGroup;
 selectedOption;

 @ViewChild('formCartao') formTarefa:NgForm;
 val;
 conta:Conta;
 transacao:Transacao;
 valor:number;


  constructor(
              private transactionsService:TransactionsService,
              private transacaoRecargaService:TransacaoRecargaService ,
              private router:Router,
              private loader:AppLoaderService,
              public confirmService: AppConfirmService) { 

 
  }

  ngOnInit() {}

  openLoaderPesquisarCartao(id:string) {
    this.loader.open("Pesquisando Cartão...");
      setTimeout(() => {
        this.pesquisarCartao(id);
        this.loader.close();
      }, 500);
  }

  openLoaderCarregarCartao(val:string) {
    this.confirmService.confirm("Recarga",
     "Vc deseja carregar o cartão de nº " + this.conta.cartao.identificacao + " de " + this.conta.client.name + "?")
      .subscribe((result) => {
        this.selectedOption = result;
        if(this.selectedOption){
           this.loader.open("Aguarde ...");
            setTimeout(() => {
              this.carregarCartao(val);
              this.loader.close();
            }, 500)
        }else{
          console.log("NAO");
        }
      });
  }

  pesquisarCartao(id:string):void{
      this.conta= this.transactionsService.loadAccountsByCod(id);
      if(!this.conta){
          this.showSnackBar();
     }   
  }

  carregarCartao(val:string):void{
     this.transacao= this.transacaoRecargaService.finalizarProcessoConta(this.conta,val);
     this.router.navigate(['/bilheteria/transacoes/extrato-detalhe/'+this.transacao.id]);
     console.log(this.transacao.id);
  }

   showSnackBar(){
     this.transactionsService.openSnackBar("Nenhum cartão encontrado!","Fechar");
   }
 
}