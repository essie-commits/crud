// import Campeonato from "./campeonato.js";

// // 1- captura de dados e inscricao de campeonato ✅✅

// let cadastroCampeonato = document.getElementById("cadastro_campeonato");
// let campeonatosCadastrados = JSON.parse(localStorage.getItem("campeonato(s)")) || [];

// cadastroCampeonato.addEventListener("submit", (e) => {
//     let campeonato = new Campeonato();

//     campeonato.setNome(document.getElementById("id_nome").value);
//     campeonato.setData(document.getElementById("id_data").value);
//     campeonato.setModalidade(document.getElementById("id_modalidade").value);
//     campeonato.setAlunos([]);

//     campeonatosCadastrados.push({
//         nome: campeonato.getNome(),
//         data: campeonato.getData(),
//         modalidade: campeonato.getModalidade(),
//         alunos: campeonato.getAlunos()
//     })

//     localStorage.setItem("campeonato(s)", JSON.stringify(campeonatosCadastrados));

//     cadastroCampeonato.reset();
// });

// // 2- consulta de campeonato ✅✅

// let consultaCampeonatos = document.getElementById("id_consulta");

// let resultadoCampeonatos = document.getElementById("id_resultado");

// consultaCampeonatos.addEventListener("click", (e) => {
//     e.preventDefault();

//     resultadoCampeonatos.innerHTML = "";


//     for(let c = 0; c < campeonatosCadastrados.length; c++) {

//         let campeonato = campeonatos[c]

//         let campeonatoConsultado = document.createElement("p");

//         resultadoCampeonatos.appendChild(campeonatoConsultado);

//         campeonatoConsultado.innerHTML = `<b>${campeonato.nome}</b> - ${campeonato.data} - ${campeonato.modalidade} <br> 
//         <button class="editar" id="editar_${index}">editar</button> <br> 
//         <button class="consultar_cadastrados" id="consultar_cadastrados_${index}">ver aluno(s) cadastrados</button><br>
//         <button class="remover" id="remover_${index}"> excluir torneio </button>`;
//     };

//     let btnEditar = document.getElementsByClassName("editar");

//     for (let i = 0; i <btnEditar.length; i++) {
//         btnEditar[i].addEventListener("click", (e) => {
//             e.preventDefault();

//             let janelaEditar = document.getElementById("janela_editar");

//             janelaEditar.showModal();

//             let editar = document.getElementById("editar");

//             editar.addEventListener("submit", (e) => {

//                 e.preventDefault();
                
//                 let campeonatos = JSON.parse(localStorage.getItem("campeonato(s)")) || [];

//                 let edicao = new Campeonato();

//                 edicao.setNome(document.getElementById("id_editar_nome").value);
//                 edicao.setData(document.getElementById("id_editar_data").value);
//                 edicao.setModalidade(document.getElementById("id_editar_modalidade").value);

//                 campeonatos[i] = {
//                     nome: edicao.getNome() !== "" ? edicao.getNome() : campeonatos[i].nome, 
//                     data: edicao.getData() !== "" ? edicao.getData() : campeonatos[i].data, 
//                     modalidade: edicao.getModalidade() !== "0" ? edicao.getModalidade() : campeonatos[i].modalidade
//                 };

//                     localStorage.setItem("campeonato(s)", JSON.stringify(campeonatos));

//                 location.reload();
//             })
//         })
//     };

//         let btnRemover = document.getElementsByClassName("remover");
    
//     for (let i = 0; i < btnRemover.length; i++) {
//         btnRemover[i].addEventListener("click", (e) =>{
//             e.preventDefault();

//             let campeonatos = JSON.parse(localStorage.getItem("campeonato(s)")) || [];

//             campeonatos.splice(i, 1);

//             localStorage.setItem("campeonato(s)", JSON.stringify(campeonatos));

//             location.reload();
//         })
//     };

//     let btnAlunos = document.getElementsByClassName("consultar_cadastrados");

//     let campeonatos = JSON.parse(localStorage.getItem("campeonato(s)")) || [];
    
//     for (let i = 0; i < btnAlunos.length; i++) {
//         let campeonato = campeonatos[i];

//         btnAlunos[i].addEventListener("click", (e) => {

//             e.preventDefault();

//             // 1- abrir modal

//             let janelaAlunos = document.getElementById("janela_alunos");

//             janelaAlunos.showModal();

//             let consultaAlunos = document.getElementById("resultado_alunos");

//             consultaAlunos.innerHTML = "";

//             campeonato.alunos.forEach((a, indexAluno) => {
//                 let alunoItem = document.createElement("p");
//                 alunoItem.id = `aluno_${indexAluno}`;
//                 alunoItem.innerHTML = `${a} | <button class="remover_aluno" id="remover_aluno_${indexAluno}">remover aluno</button>`
//                 consultaAlunos.appendChild(alunoItem);

//             });

//             // 2- cadastrar alunos novos

//             let formularioAlunos = document.getElementById("alunos");

//             formularioAlunos.addEventListener("submit", (e) => {
                
//                 e.preventDefault();

//                 campeonatos = JSON.parse(localStorage.getItem("campeonato(s)")) || [];

//                 let alunoNovo = document.getElementById("id_aluno").value;

//                 if (alunoNovo !== "") {

//                 if (!Array.isArray(campeonato.alunos)) {
//                     campeonato.alunos = [];
//                 }

//                 campeonato.alunos = campeonatos[i].alunos.map(a => a.toString());
//                 campeonato.alunos.push(alunoNovo.toString());

//                 localStorage.setItem("campeonato(s)", JSON.stringify(campeonatos));

//                 let novoIndex = campeonato.alunos.length - 1;
//                 let novoAluno = document.createElement("p");
//                 novoAluno.id = `aluno_${novoIndex}`;
//                 novoAluno.innerHTML = `${alunoNovo} | <button class="remover_aluno" id="remover_aluno_${novoIndex}">remover aluno</button>`;
//                 consultaAlunos.appendChild(novoAluno);

//                 localStorage.setItem("campeonato(s)", JSON.stringify(campeonatos));

//             }
//             });

//             // 3- remover alunos

//             let btnRemoverAlunos = document.getElementsByClassName("remover_aluno");

//             for (let n = 0; n < btnRemoverAlunos.length; n++) {
//                 btnRemoverAlunos[n].addEventListener("click", (e) => {
//                     e.preventDefault();
                
//                     let numeroAluno = n;
                    
//                     campeonatos[i].alunos.splice(numeroAluno, 1);

//                     localStorage.setItem("campeonato(s)", JSON.stringify(campeonatos));

//                     let alunoSelecionado = document.getElementById(`aluno_${numeroAluno}`);

//                     alunoSelecionado.innerHTML = "";
//                 })
//             }

//         })

        
//     }

// });

//     let btnAlunos = document.getElementsByClassName("consultar_cadastrados");

//     let campeonatos = JSON.parse(localStorage.getItem("campeonato(s)")) || [];
    
//     for (let a = 0; a < btnAlunos.length; a++) {
//         let campeonato = campeonatos[a];

//         btnAlunos[a].addEventListener("click", (e) => {

//             e.preventDefault();

//             // 1- abrir modal

//             let janelaAlunos = document.getElementById("janela_alunos");

//             janelaAlunos.showModal();

//             let consultaAlunos = document.getElementById("resultado_alunos");

//             consultaAlunos.innerHTML = "";

//             campeonato.alunos.forEach((aluno, indexAluno) => {
//                 let alunoItem = document.createElement("p");
//                 alunoItem.id = `aluno_${indexAluno}`;
//                 alunoItem.innerHTML = `${aluno} | <button class="remover_aluno" id="remover_aluno_${indexAluno}">remover aluno</button>`
//                 consultaAlunos.appendChild(alunoItem);

//             });

//             // 2- cadastrar alunos novos

//             let btnCadastroAlunos = document.getElementById("id_envio_aluno");

//             btnCadastroAlunos.addEventListener("click", (e) => {
                
//                 e.preventDefault();

//                 campeonatos = JSON.parse(localStorage.getItem("campeonato(s)")) || [];

//                 let alunoNovo = document.getElementById("id_aluno").value;

//                 if (alunoNovo !== "") {

//                 if (!Array.isArray(campeonato.alunos)) {
//                     campeonato.alunos = [];
//                 }

//                 campeonato.alunos = campeonatos[a].alunos.map(aluno => aluno.toString());
//                 campeonato.alunos.push(alunoNovo.toString());

//                 localStorage.setItem("campeonato(s)", JSON.stringify(campeonatos));

//                 let novoIndex = campeonato.alunos.length - 1;
//                 let novoAluno = document.createElement("p");
//                 novoAluno.id = `aluno_${novoIndex}`;
//                 novoAluno.innerHTML = `${alunoNovo} | <button class="remover_aluno" id="remover_aluno_${novoIndex}">remover aluno</button>`;
//                 consultaAlunos.appendChild(novoAluno);

//                 localStorage.setItem("campeonato(s)", JSON.stringify(campeonatos));

//             }
//             });

//             // 3- remover alunos

//             let btnRemoverAlunos = document.getElementsByClassName("remover_aluno");

//             for (let n = 0; n < btnRemoverAlunos.length; n++) {
//                 btnRemoverAlunos[n].addEventListener("click", (e) => {
//                     e.preventDefault();
                
//                     let numeroAluno = n;
                    
//                     campeonatos[i].alunos.splice(numeroAluno, 1);

//                     localStorage.setItem("campeonato(s)", JSON.stringify(campeonatos));

//                     let alunoSelecionado = document.getElementById(`aluno_${numeroAluno}`);

//                     alunoSelecionado.innerHTML = "";
//                 })
//             }

//         })

        
//     }