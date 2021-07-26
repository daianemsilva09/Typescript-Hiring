//boolean

const contaPaga: boolean = false;

// number 
const idade: number = 23;
const avaliacao: number = 4.5;

//string
const nome: string = 'Dai Silva';

//array
const idades: number[] = [23, 28, 12, 13, 14];
const idade2: Array<number> = [199, 19, 190, 67];

//tuple
let jogadores: [string, number, boolean];
jogadores = ['Dai', 3, true];

//enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

/*Any
const retornoDaAPI: any[] = [123, 'Dai', false];
const retornoDaAPI2 = any = {
    // .....
}
*/
//Void 
function printarNaTela(msg: string): void {
    console.log(msg);
}

//Null e Undefined

const u: undefined = undefined;
const n: null = null;

//Object
function criar(objecto: object) {
    //.
}
criar({ propriedade: 1, })
 // criar ('Victor')// da erro




