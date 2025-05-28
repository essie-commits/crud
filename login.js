let formulario = document.getElementById("login");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let senha = document.getElementById("id_senha");

    if (senha.value !== "123456") {
        alert(`senha incorreta`);
    } else {
        window.location.href = "cadastro.html"
    }
}
)