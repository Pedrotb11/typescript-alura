export class Negociacao {
    private _data: Date; //um getter não pode ter o mesmo nome de uma propriedade da classe.
    private _quantidade: number;  //por isso estamos usando o "_" (underline)
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor
    }

    get data(): Date {
        return this._data;
    }
    get quantidade(): number {
        return this._quantidade;
    }
    get valor(): number {
        return this._valor;
    }
    get volume(): number {
        return this._quantidade * this._valor;
    }
}