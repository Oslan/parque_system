import {Conta} from './Conta';

/**
*@author Caio
*/
export class Cartao{


	constructor(public id?:number,
							public identificacao?:string,
							public isAtivo?:boolean,
							public isAssociative?:boolean
							){}
}
