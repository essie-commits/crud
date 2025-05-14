export default class Competicao {
    #nome;
    #data;
    #modalidade;
    #alunosCadastrados

    constructor(nome, data, modalidade) {
        this.#nome = nome;
        this.#data = data;
        this.#modalidade = modalidade;
        
        this.#alunosCadastrados = [];
    }

    getNomeC () {
        return this.#nome;
    };

    getDataC () {
        return this.#data;
    };

    getModalidadeC() {
        return this.#modalidade;
    }

    setNomeC (nome) {
        this.#nome = nome;
    };

    setDataC (data) {
        this.#data = data;
    };

    setModalidadeC (modalidade) {
        this.#modalidade = modalidade;
    }

    setAlunosCadastrados(alunos) {
    this.#alunosCadastrados = alunos;
    }
    
    addAluno(aluno) {
        this.#alunosCadastrados.push(aluno);
    }

    getAlunosCadastrados() {
        return this.#alunosCadastrados;
    }
    
}
