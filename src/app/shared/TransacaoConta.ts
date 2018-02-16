import { Conta } from './Conta';
import { Transacao } from './Transacao';
import { TipoTransacaoConta } from './TipoTransacaoConta';

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
	*@param tipoTransacaoConta

	**/

export class TransacaoConta{

	constructor(public id?:number,
				public cod?:string,
				public data?:Date,
				public conta?:Conta,
				public tipoTransacaoConta?:TipoTransacaoConta,
				public transacao?:Transacao
				){}
}