export default class Campeonato {
    #nome;
    #data;
    #modalidade;

    constructor(nome, data, modalidade){
        this.#nome = nome;
        this.#data = data;
        this.#modalidade = modalidade;
    };

    getNome(){
        return this.#nome;
    }
    
    getData(){
        return this.#data;
    }

    getModalidade(){
        return this.#modalidade;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    setData(data){
        this.#data = data;
    }

    setModalidade(modalidade){
        this.#modalidade = modalidade;
    }
    
}