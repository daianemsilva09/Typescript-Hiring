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
//Union types 
var nota = 5;
function exibirNota(nota) {
    console.log("a nota \u00E9 $(nota)");
}
exibirNota('10');
exibirNota(10);
//type Funcionarios = array<funcionario>;
var funcionarios = [{
        nome: 'Dai',
        sobrenome: 'Silva',
        dataNascimento: new Date()
    },
    {
        nome: 'Daiane',
        sobrenome: 'Silvaaa',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('nome do funcionario:', funcionario.nome);
    }
}
var altura = 1.6;
// ponto de interrogação deixa indefinido
var contato = {
    nome: 'Dai',
    telefone1: '12345'
};
