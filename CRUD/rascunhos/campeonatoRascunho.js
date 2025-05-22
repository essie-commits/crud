export default class Campeonato {
    #nome;
    #data;
    #modalidade;
    #alunos; 

    constructor(nome, data, modalidade, alunos = []){
        this.#nome = nome;
        this.#data = data;
        this.#modalidade = modalidade;
        this.#alunos = alunos;
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

    getAlunos(){
        return this.#alunos;
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

    setAlunos(alunos){
        this.#alunos = alunos;
    }
    
}