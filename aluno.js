export default class Aluno {
    #nome;
    #turma;
    #curso;

    constructor(nome, turma, curso){
        this.#nome = nome;
        this.#curso = curso;
        this.#turma = turma;
    }
    
    getNome () {
        return this.#nome;
    }
    
    getTurma () {
        return this.#turma;
    }    
    
    getCurso () {
        return this.#curso;
    }

    setNome (nome) {
        this.#nome = nome;
    }

    setTurma (turma) {
        this.#turma = turma;
    }

    setCurso (curso) {
        this.#curso = curso;
    }
    

}