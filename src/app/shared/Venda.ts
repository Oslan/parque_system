import {Conta} from './Conta';
import {Client} from './Client';

/**
*@author Caio
* 
*
*
**/
export class Venda{

/**
*@constructor 
*@param id 
*@param codigo 
*@param data 
*@param conta 
**/
	constructor(public id?:number,
				public codigo?:string,
				public data?:Date,
				public conta?:Conta){}

}