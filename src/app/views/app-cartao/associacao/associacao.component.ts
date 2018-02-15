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
  selector: './associacao.component',
  templateUrl: './associacao.component.html',
  styleUrls: ['./associacao.component.css']
})
export class AssociacaoComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  stateCtrl: FormControl;
  clientCtrl: FormControl;

  filteredStates: any;
  filteredClients: any;
  clients:Client[];
  states = [
    '0000000001',
    '0000000002',
    '0000000003',
    '0000000004',
    '0000000005',
    '0000000006',
    '0000000007',
    '0000000008',
    '0000000009',
    '0000000010',
    '0000000011',
    '0000000012',
    '0000000013',
    '0000000014',
    '0000000015',
    '0000000016',
    '0000000017',
    '0000000018',
    '0000000019',
    '0000000020',
    '0000000021',
    '0000000022',
    '0000000023',
    '0000000024',
    '0000000025',
    '0000000026'
   
  ];


  constructor( private fb: FormBuilder,
  				private cartaoService:CartaoService) {console.log("Constructor"); }

  

  ngOnInit() {

  this.clients = this.cartaoService.listarClientes();
  console.log(this.clients);

console.log("OK");
  	this.stateCtrl = new FormControl();
  	this.clientCtrl = new FormControl();

    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));

       this.filteredClients= this.clientCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterName(name));

    
 this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });

  }


 submit() {
    console.log(this.firstFormGroup.value.firstCtrl);
    console.log(this.secondFormGroup.value.secondCtrl);
  }

   filterStates(val: string) {
    return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s))
      : this.states;
  }

   filterName(val: string) {
    return val ? this.clients.filter(s => new RegExp(`^${val}`, 'gi').test(s.name))
      : this.clients;
  }

}