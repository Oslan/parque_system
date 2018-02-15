import { MatSnackBar } from '@angular/material';
import { Component, OnInit,OnChanges,SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Cartao } from '../../../shared/Cartao';
import { Client } from '../../../shared/Client';
import { Conta } from '../../../shared/Conta';
import { Endereco } from '../../../shared/Endereco';
import { Transacao } from '../../../shared/Transacao';
import { TransacaoContaCartao } from '../../../shared/TransacaoContaCartao';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { AppLoaderService } from '../../../services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../services/app-confirm/app-confirm.service';
//Servicos globais do sistema
import { TransactionsService } from '../../../services/transactions/transactions.service';
import { ContaService } from '../app-contas.service';

@Component({
  selector: './abertura-conta.component',
  templateUrl: './abertura-conta.component.html',
  styleUrls: ['./abertura-conta.component.css']
})

/**
* @author Caio
*
*/
export class AberturaContaComponent implements OnInit {

 //@ViewChild('formCartao') formTarefa:NgForm;
  clientCtrl: FormControl;
  filteredClients: any;
  clients:Client[];
  contas:Conta[];
  //Associacao
  transacaoContaCartao:TransacaoContaCartao;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selectedOption;

  valor:number=null;

 /**
  *  @param transacationsServices - Servicos de Sistema
  *  @param contasService - Servico do módulo Abertura de Contas
  *  @param router - navegacao
  **/
  constructor(private fb: FormBuilder,
              private snackBar:MatSnackBar,
              private transactionsService:TransactionsService,
              private contasService:ContaService,
  	 		      private router:Router,
              private loader:AppLoaderService,
              private confirmService: AppConfirmService) {

    //console.log("Constructor");

   //console.log(this.transactionsService.addClients());
   //console.log(this.transactionsService.addContas());
   //this.transactionsService.emptyTransactionsContaCartao();
  //this.transactionsService.emptyTransactions();
   //console.log(this.transactionsService.loadClientsSemcontas());
   //console.log(this.transactionsService.loadClients());
   //console.log(this.transactionsService.loadTransactionOpenAccount());
  }

  ngOnInit() {

  	this.clientCtrl = new FormControl();
    this.contas = this.transactionsService.loadAccounts();

    this.filteredClients = this.clientCtrl.valueChanges
      .startWith(null)
      .map(object => this.filterClients(object));

    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
     secondCtrl: ['', Validators.nullValidator]
    });



  }

   filterClients(val:Conta) {
     return val ? 
     this.contas.filter(s => new RegExp(`^${val}`, 'gi').test(s.client.name)):this.contas;
  }

   openLoaderAssociarContaCartao() {
    this.confirmService.confirm("Associação de Conta no Cartão",
     "Vc deseja vincular o cartão a essa conta?")
      .subscribe((result) => {
        this.selectedOption = result;
        if(this.selectedOption){
           this.loader.open("Aguarde ...");
            setTimeout(() => {
              this.finalizarProcesso();
              this.loader.close();
            }, 500)
        }else{
          console.log("NAO");
        }
      });
  }

   finalizarProcesso():void{
 
      var identificacao = this.firstFormGroup.value.firstCtrl;
      let cartao = new Cartao(new Date().getTime(),identificacao,true,true);
      let conta:Conta = this.clientCtrl.value;
      conta.cartao=cartao;
     
      this.transacaoContaCartao = this.transactionsService.finalizarProcessoConta(conta,identificacao,this.valor);
      this.openSnackBar("Cartão Adcionado!","Fechar");
      this.router.navigate(['/contas/transacoes/abertura/detalhe-abertura/'+
                            this.transacaoContaCartao.id]);

   }

    openSnackBar(title:string,msg:string){
       this.snackBar.open(title, msg, { duration: 2000 });
    }

/**
   private revertObjectClient(clientForm:FormControl):Client{

       var client = new Client(clientForm.value.id,
       						             clientForm.value.name,
       						             clientForm.value.email,
       						             clientForm.value.url,
       						             clientForm.value.isAtivo,
       						             clientForm.value.isConta,
       						   		       new Endereco(clientForm.value.endereco.id,
       						   					              clientForm.value.endereco.bairro,
       						   					              clientForm.value.endereco.rua,
       						   					              clientForm.value.endereco.numero));

       return client;
    }
    */

}
