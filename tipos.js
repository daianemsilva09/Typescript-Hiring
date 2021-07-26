"use strict";
//boolean
var contaPaga = false;
// number 
var idade = 23;
var avaliacao = 4.5;
//string
var nome = 'Dai Silva';
//array
var idades = [23, 28, 12, 13, 14];
var idade2 = [199, 19, 190, 67];
//tuple
var jogadores;
jogadores = ['Dai', 3, true];
//enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
/*Any
const retornoDaAPI: any[] = [123, 'Dai', false];
const retornoDaAPI2 = any = {
    // .....
}
*/
//Void 
function printarNaTela(msg) {
    console.log(msg);
}
//Null e Undefined
var u = undefined;
var n = null;
//Object
function criar(objecto) {
    //.
}
criar({ propriedade: 1, });
// criar ('Victor')// da erro
