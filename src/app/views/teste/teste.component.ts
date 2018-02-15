import { Component, OnInit } from '@angular/core';
import * as domHelper from '../../helpers/dom.helper';

@Component({
  selector: 'dashboard',
  templateUrl: './teste.template.html'
})
export class TesteComponent implements OnInit {
 nome:string;
 sobrenome:string;
  constructor() { }
  ngOnInit() {}

}