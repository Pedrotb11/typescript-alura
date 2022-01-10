export class Negociacao {
    private _data; //um getter não pode ter o mesmo nome de uma propriedade da classe.
    private _quantidade;  //por isso estamos usando o "_" (underline)
    private _valor;

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor
    }

    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}