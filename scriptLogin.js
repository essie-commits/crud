let formulario = document.getElementById("id_formulario");
let senha = document.getElementById("id_senha");

let dialog = document.getElementById("confirmacao");

let confirmSenha = document.getElementById("id_confirmacao");

formulario.addEventListener("submit", e => {
    e.preventDefault();

    dialog.showModal();


});

let reenvio = document.getElementById("id_reenvio");

reenvio.addEventListener("click", e => {
    e.preventDefault();

    if (confirmSenha.value === senha.value) {
        window.location.href = "cadastro.html"
    } else (
        alert(`senha incorreta`)
    )
})

// funcionando...