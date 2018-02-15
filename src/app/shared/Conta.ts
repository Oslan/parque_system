import {Client} from './Client';
import {Cartao} from './Cartao';

export class Conta{
	/**
	*@author Caio
	*
	* Conta (1,1)     Cartao(1,1)
	* Conta (1,1)     Client(1,1)
	*
	**/

	/**
	*@constructor
	*@param id da Conta
	*@param cod Conta
	*@param saldo
	*@param limit
	*@param cartao
	*@param client
	**/
	constructor(public id?:number,
				public cod?:string,
				public saldo?:number,
				public limit?:number,
				public cartao?:Cartao,
				public client?:Client){

	}
}
