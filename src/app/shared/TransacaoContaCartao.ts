import { Conta } from './Conta';
import { Transacao } from './Transacao';


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
	*@param conta
	*@param transacao

	**/
export class TransacaoContaCartao{

	constructor(public id?:number,
				public cod?:string,
				public data?:Date,
				public conta?:Conta,
				public transacao?:Transacao
				){}
}