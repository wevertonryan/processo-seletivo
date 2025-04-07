//Input dados formulário
const nomeElemento = document.getElementById("nome");
const emailElemento = document.getElementById("email");
const senhaElemento = document.getElementById("senha");

nomeElemento.addEventListener("input", (event) => {
  if (event.target.value.length >= 3) {
    removerErro("erro-nome");
  } 
});

emailElemento.addEventListener("input", (event) => {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value)) {
    removerErro("erro-email");
  }
});

senhaElemento.addEventListener("input", (event) => {
  if (document.getElementById("erro-senha")) {
    const senha = event.target.value;
    const tamanho = senha.length;
    let validacao = [false, false, false];

    const mensagemErro = document.getElementById("erro-senha");

    if (tamanho >= 6) {
      for (let i = 0; i < tamanho; i++) {
        if (/[0-9]/.test(senha[i])) {
          validacao[0] = true;
        } else if (/[a-zA-Z]/.test(senha[i])) {
          validacao[1] = true;
        } else {
          validacao[2] = true;
        }
      }
      switch (false) {
        case validacao[0]:
          mensagemErro.textContent = "* Sua Senha precisa ter números!";
          break;
        case validacao[1]:
          mensagemErro.textContent = "* Sua Senha precisa ter letras!";
          break;
        case validacao[2]:
          mensagemErro.textContent =
            "* Sua Senha precisa ter no mínimo um caracter especial";
          break;
        default:
          mensagemErro.textContent = "";
      }
    } else if (tamanho == 0) {
        removerErro("erro-senha");
    } else {
      mensagemErro.textContent =
        "* A Senha tem que ter pelo menos 6 caracteres!";
    }
  }
});

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

//função para enviar os dados para um Alert e direcionar uma nova página
const enviar = document.getElementById("enviar");
enviar.addEventListener("click", enviarDados);

//captura e validação dos dados
function enviarDados() {
  const nome = validacaoNome(nomeElemento);
  const email = validacaoEmail(emailElemento);
  const senha = validacaoSenha(senhaElemento);

  if (nome && email && senha) {
    window.alert("Nome: " + nome + "\nEmail: " + email + "\nSenha: " + senha);
    window.location.href = "./paginas/cadastro_sucesso.html";
  }
}

function validacaoNome(nome) {
  if (nome.value.length >= 3) {
    return nome.value;
  }
  removerErro("erro-nome");
  const mensagemErro = `<p id="erro-nome" class="erro">${
    nome.value == "" ? "* Nome é obrigatório!" : "* Nome Inválido!"
  }"</p>`;
  nome.insertAdjacentHTML("afterend", mensagemErro);
}

function validacaoEmail(email) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    return email.value;
  }
  removerErro("erro-email");
  const mensagemErro = `<p id="erro-email" class="erro">${
    email.value == "" ? "* Email é obrigatório!" : "* Email Inválido!"
  }"</p>`;
  email.insertAdjacentHTML("afterend", mensagemErro);
}

function validacaoSenha(elementoSenha) {
  const senha = elementoSenha.value;
  const tamanho = senha.length;
  let validacao = [false, false, false];

  const mensagemErro = document.createElement("p");
  mensagemErro.id = "erro-senha";
  mensagemErro.classList.add("erro");
  removerErro("erro-senha");

  if (tamanho >= 6) {
    for (let i = 0; i < tamanho; i++) {
      if (/[0-9]/.test(senha[i])) {
        validacao[1] = true;
      } else if (/[a-zA-Z]/.test(senha[i])) {
        validacao[2] = true;
      } else {
        validacao[3] = true;
      }
      if (validacao[1] && validacao[2] && validacao[3]) {
        return senha;
      }
    }
    switch (false) {
      case validacao[1]:
        mensagemErro.textContent = "* Sua Senha precisa ter números!";
        break;
      case validacao[2]:
        mensagemErro.textContent = "* Sua Senha precisa ter letras!";
        break;
      case validacao[3]:
        mensagemErro.textContent =
          "* Sua Senha precisa ter no mínimo um caracter especial";
    }
  } else if (tamanho == 0) {
    mensagemErro.textContent = "* Senha inválida!";
  } else {
    mensagemErro.textContent = "* A Senha tem que ter pelo menos 6 caracteres!";
  }
  elementoSenha.parentNode.insertBefore(
    mensagemErro,
    elementoSenha.nextSibling.nextSibling
  );
}

//-----------------------------------------------------------

function removerErro(erroId) {
  if (document.getElementById(erroId)) {
    const erroEmail = document.getElementById(erroId);
    erroEmail.parentNode.removeChild(erroEmail);
  }
}

//-----------------------------------------------------------
