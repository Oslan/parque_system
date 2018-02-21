import {Conta} from './Conta';
import {Client} from './Client';
import {Produto} from './Produto';
import {Venda} from './Venda';

/**
*@author Caio
* 
* 
*
**/
export class ItensVenda{

/**
*@constructor 
*@param id 
*@param codigo  
*@param produto 
*@param venda

**/
	constructor(public id?:number,
				public codigo?:string,
				public produto?:Produto,
				public venda?:Venda){}
}