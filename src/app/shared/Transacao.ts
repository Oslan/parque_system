import { Conta } from './Conta';

/**
*@author Caio
*Transacao (0,n)     Cartao(1,1)
*
**/

/**
	*@constructor
	*@param id 
	*@param cod 
	*@param data
	*@param valor
	*@param conta

	**/
export class Transacao{

	constructor(public id?:number,
							public cod?:string,
							public data?:Date,
							public valor?:number,
							public conta?:Conta){}
}


