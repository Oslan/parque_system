import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';


import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: './detalhado.component',
  templateUrl: './detalhado.component.html',
  styleUrls: ['./detalhado.component.css']
})
export class DetalhadoComponent implements OnInit {
  detalhado="DETALAHDO";
  constructor() { }

  ngOnInit() {
    
   console.log("DETALHADO");

  }

btnClick(){
	console.log(this.detalhado);
}


}