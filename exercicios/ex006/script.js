const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    mensagem.textContent = "Você conseguiu!";
})