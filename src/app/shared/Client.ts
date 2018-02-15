import {Endereco} from './Endereco';

	/**
	*@author Caio
	*@argument Class Client - DTO
	*
	*/
export class Client{

	/**
	*@constructor
	*@param id do client
	*@param name do client
	*@param email email do client
	*@param url foto - caminho
	*@param isAtivo  se e ativo no sistema
	*@param isConta  se possui conta
	*@param endereco endereco client
	**/
	constructor(public id?:number,
							public name?:string,
							public email?:string,
							public url?:string,
							public isAtivo?:boolean,
							public isConta?:boolean,
							public endereco?:Endereco){}
}
