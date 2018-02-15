import {Conta} from './Conta';
import {Client} from './Client';

/**
*@author Caio
* 
* Cartao (0,1)     Conta(1,1)
*
**/
export class Endereco{

/**
*@constructor 
*@param id do cartao
*@param identificacao do cartao
*@param se o caratao e associado a alguma conta
*@param se esta ativado no sistema
*@param conta (object Conta) se possui conta
**/
	constructor(public id?:number,
				public bairro?:string,
				public rua?:string,
				public numero?:string){}
}
