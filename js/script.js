//função para permitir visibilidade da senha por um botão
const ver_senha = document.getElementById("ver-senha");
ver_senha.addEventListener("click", verSenha);

function verSenha() {
  const senha = document.getElementById("senha");
  if (senha.type == "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
}