import Campeonato from "./campeonato.js";

let cadastroCampeonato = document.getElementById("cadastro_campeonato");
let campeonatosCadastrados =
  JSON.parse(localStorage.getItem("campeonato(s)")) || [];

cadastroCampeonato.addEventListener("submit", (e) => {
  e.preventDefault();

  let campeonato = new Campeonato();

  campeonato.setNome(document.getElementById("id_nome").value);
  campeonato.setData(document.getElementById("id_data").value);
  campeonato.setModalidade(document.getElementById("id_modalidade").value);

  campeonatosCadastrados.push({
    nome: campeonato.getNome(),
    data: campeonato.getData(),
    modalidade: campeonato.getModalidade(),
  });

  localStorage.setItem("campeonato(s)", JSON.stringify(campeonatosCadastrados));

  cadastroCampeonato.reset();
});

let consultaCampeonatos = document.getElementById("id_consulta");

let resultadoCampeonatos = document.getElementById("id_resultado");

consultaCampeonatos.addEventListener("click", (e) => {
  e.preventDefault();

  resultadoCampeonatos.innerHTML = "";

  for (let c = 0; c < campeonatosCadastrados.length; c++) {
    let campeonato = campeonatosCadastrados[c];

    let campeonatoConsultado = document.createElement("p");

    campeonatoConsultado.class = "resultados_individuais";

    resultadoCampeonatos.appendChild(campeonatoConsultado);

    campeonatoConsultado.innerHTML = `<b>${campeonato.nome}</b> - ${campeonato.data} - ${campeonato.modalidade} <br> 
        <button class="editar" id="editar_${c}">editar</button> 
        <button class="remover" id="remover_${c}"> excluir torneio </button>`;
  }

  let btnRemover = document.getElementsByClassName("remover");

  for (let r = 0; r < btnRemover.length; r++) {
    btnRemover[r].addEventListener("click", (e) => {
      e.preventDefault();

      let campeonatos = JSON.parse(localStorage.getItem("campeonato(s)")) || [];

      campeonatos.splice(r, 1);

      localStorage.setItem("campeonato(s)", JSON.stringify(campeonatos));

      location.reload();
    });
  }

  let btnEditar = document.getElementsByClassName("editar");

  for (let e = 0; e < btnEditar.length; e++) {
    btnEditar[e].addEventListener("click", (evento1) => {
      evento1.preventDefault();

      let janelaEditar = document.getElementById("janela_editar");

      janelaEditar.showModal();

      let editar = document.getElementById("editar");

      editar.addEventListener("submit", (evento2) => {
        evento2.preventDefault();

        let campeonatos =
          JSON.parse(localStorage.getItem("campeonato(s)")) || [];

        let edicao = new Campeonato();

        edicao.setNome(document.getElementById("id_editar_nome").value);
        edicao.setData(document.getElementById("id_editar_data").value);
        edicao.setModalidade(
          document.getElementById("id_editar_modalidade").value
        );

        campeonatos[e] = {
          nome:
            edicao.getNome() !== "" ? edicao.getNome() : campeonatos[e].nome,
          data:
            edicao.getData() !== "" ? edicao.getData() : campeonatos[e].data,
          modalidade:
            edicao.getModalidade() !== "0"
              ? edicao.getModalidade()
              : campeonatos[e].modalidade,
        };

        localStorage.setItem("campeonato(s)", JSON.stringify(campeonatos));

        location.reload();
      });
    });
  }
});
