import {Client} from './Client';

export class Dependente{
	/**
	*@author Caio
	*
	**/

	/**
	*@constructor
	*@param id do Dependente
	*@param cod do Dependente
	*@param nome do dependente
	*@param url 
	*@param client
	**/
	constructor(public id?:number,
				public cod?:string,
				public nome?:string,
				public url?:string,
				public client?:Client
				){}


}