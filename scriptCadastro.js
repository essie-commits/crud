import Aluno from "./classes/aluno.js";
import Competicao from "./classes/competicao.js";

let competicoes = JSON.parse(localStorage.getItem("competições")) || [];

let formCompeticao = document.getElementById("formulario_competicao");

formCompeticao.addEventListener("submit", (e) => {
    e.preventDefault();

    let competicao = new Competicao();

    competicao.setNomeC(document.getElementById("id_nome").value);
    competicao.setDataC(document.getElementById("id_data").value);
    competicao.setModalidadeC(document.getElementById("id_modalidades").value);

    competicoes.push({
        nome: competicao.getNomeC(),
        data: competicao.getDataC(),
        modalidade: competicao.getModalidadeC(),
        alunos: competicao.getAlunosCadastrados()  
    });

    localStorage.setItem("nome", competicao.getNomeC());
    localStorage.setItem("data", competicao.getDataC());
    localStorage.setItem("modalidade", competicao.getModalidadeC());

    localStorage.setItem("competições", JSON.stringify(competicoes));
    formCompeticao.reset();

});

let formAluno = document.getElementById("formulario_aluno");

formAluno.addEventListener("submit", (e) => {
    e.preventDefault();

    if (competicoes.length === 0) {
        alert(`você precisa ter, pelo menos, uma competição cadastrada para inscrever um aluno`)
    } else {

        let aluno = new Aluno ();

        aluno.setNome(document.getElementById("id_aluno").value);
        aluno.setTurma(document.querySelector('input[name=turma]:checked').value);
        aluno.setCurso(document.querySelector('input[name=curso]:checked').value);
        
        let competicaoInscrita = document.getElementById("id_competicaoInscrita").value;

        let competicaoSelecionada = competicoes.find(competicao => competicao.getNomeC() === competicaoInscrita);

        if (competicaoSelecionada) {
            competicaoInscrita.addAluno(aluno);
            localStorage.setItem("competições", JSON.stringify(competicoes));
        } else {
            alert(`verifique se digitou uma competição válida`)
        }


    }

    formAluno.reset();

})


