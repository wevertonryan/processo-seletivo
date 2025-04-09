//criação do botão "ver senha" quando tiver ao menos 1 caracter
const senha = document.getElementById("senha");
senha.addEventListener("input", (event) => {
  const verSenhaElemento = document.getElementById("ver-senha"); //pega o botão "ver senha" caso ele exista

  //caso não exista botão e exista um valor no input cria um novo botão
  if (!verSenhaElemento && event.target.value != "") {
    const verSenhaBotao = "<button id='ver-senha' onclick='verSenha()'>Olhinho</button>";
    senha.insertAdjacentHTML("afterend", verSenhaBotao);

  //caso exista um botão e não tenha nem um caracter deleta botão existente
  } else if (event.target.value == "") {
    ver_senha.parentNode.removeChild(ver_senha);
    senha.type = "password"; //toda vez que apaga tudo desabilita visibilidade
  }
});

//função chamada pelo botão "ver senha" para permitir visibilidade da senha
function verSenha() {
  if (senha.type == "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
}