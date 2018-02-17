/**
*@author Caio
* 
* Cartao (0,1)     Conta(1,1)
*
**/
export class Produto{

/**
*@constructor 
*@param id - id do produto
*@param codigo - cod do produto
*@param descricao - descricao do produto
*@param preco - preco do produto
**/
	constructor(public id?:number,
				public codigo?:string,
				public descricao?:string,
				public preco?:number){}
}
