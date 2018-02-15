import { Component, OnInit,OnChanges,SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Cartao } from '../../../shared/Cartao';
import { Client } from '../../../shared/Client';
import { Conta } from '../../../shared/Conta';
import { Transacao } from '../../../shared/Transacao';
import { AppLoaderService } from '../../../services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../services/app-confirm/app-confirm.service';
import { CartaoService } from '../app-cartao.services';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: './cadastro-cartao.component',
  templateUrl: './cadastro-cartao.component.html',
  styleUrls: ['./cadastro-cartao.component.css']
})
export class CadastroCartaoComponent implements OnInit {
 

  constructor() {
    console.log("Constructor"); 
  }

  ngOnInit() {

  
  }


}