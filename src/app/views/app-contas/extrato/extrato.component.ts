import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Cartao } from '../../../shared/Cartao';
import { Client } from '../../../shared/Client';
import { Conta } from '../../../shared/Conta';
import { Transacao } from '../../../shared/Transacao';
import { AppLoaderService } from '../../../services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../services/app-confirm/app-confirm.service';

import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: './extrato.component',
  templateUrl: './extrato.component.html',
  //styleUrls: ['./basic-form.component.css']
})
export class ExtratoFormComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
    


  }



}