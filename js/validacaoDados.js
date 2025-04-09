//Organizar código:
//1° para que serve cada parte do código
//2° Como deixar enxuto (sem deixar partes repetidas)
//3° Deixar mais otimizado
//4° Separar em partes
//5° Comentar

//Funções do Código:
//- Validar Dados (ver se estão no formato correto)
//- Caso esteja errado enviar mensagens de Erro
//- Tirar mensangens erro automaticamente caso os dados apareçam corretamente
//- Enviar informações para o alert

//- Caso enviar errado aparecer mensagem de erro
//- atualizar erros enquanto o usuário digita
//- caso escreva certo mas erre de novo mostrar erro

//Input dados formulário
const nomeElemento = document.getElementById("nome");
const emailElemento = document.getElementById("email");
const senhaElemento = document.getElementById("senha");

//validação nome: apenas ser maior ou igual a três
nomeElemento.addEventListener("input", (event) => {
  const nomeErro = document.getElementById("erro-nome");
  const tamanho = event.target.value.length;
  if(nomeErro){
    if (tamanho == 0) {
      nomeErro.textContent = "* Nome é obrigatório!";
    } else if (tamanho < 3) {
      nomeErro.textContent = "* Nome Inválido!";
    } else {
      nomeErro.textContent = "";
    }
  }
});

nomeElemento.addEventListener("focus", () => {
  nomeElemento.classList.remove("placeholder-erro");
})

emailElemento.addEventListener("input", (event) => {
  const emailErro = document.getElementById("erro-email");
  if(emailErro){
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value)) {
      emailErro.textContent = "";
    } else if(event.target.value == "") {
      emailErro.textContent = "* Email é obrigatório!";
    } else {
      emailErro.textContent = "* Email Inválido!";
    }
  }
});

emailElemento.addEventListener("focus", () => {
  emailElemento.classList.remove("placeholder-erro");
})

senhaElemento.addEventListener("input", (event) => {
  validacaoSenha(event.target)
  const view = document.querySelector(".view");
  if(view){
    view.style.color = "var(--cor-selecionado)";
  }
});

senhaElemento.addEventListener("focus", () => {
  senhaElemento.classList.remove("placeholder-erro");

  const view = document.querySelector(".view");
  if(view){
    view.style.color = "var(--cor-selecionado)";
  }
})

senhaElemento.addEventListener("focusout", () => {

  const view = document.querySelector(".view");
  if(view){
    view.style.color = "var(--cor-secundaria)";
  }
})




//função para enviar os dados para um Alert e direcionar uma nova página
const enviar = document.getElementById("enviar");
enviar.addEventListener("click", enviarDados);

//captura e validação dos dados
function enviarDados() {
  const nome = validacaoNome(nomeElemento);
  const email = validacaoEmail(emailElemento);
  const senha = validacaoSenha(senhaElemento, true);

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
  nomeElemento.classList.remove("placeholder-erro");
  nomeElemento.classList.add("placeholder-erro");
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
  emailElemento.classList.remove("placeholder-erro");
  emailElemento.classList.add("placeholder-erro");
}

function validacaoSenha(elementoSenha, submit){
  const senha = elementoSenha.value;
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
        return senha;
    }
  } else if (tamanho == 0) {
    if(submit == true){
      mensagemErro.textContent = "* Senha Inválida!";
    } else {
      mensagemErro.textContent = "";
    }
  } else {
    mensagemErro.textContent =
      "* A Senha tem que ter pelo menos 6 caracteres!";
  }
  if(submit == true){
    senhaElemento.classList.remove("placeholder-erro");
    senhaElemento.classList.add("placeholder-erro");
    const view = document.querySelector(".view");
    if(view){
      view.style.color = "var(--cor-erro)";
    }
  }
}

//-----------------------------------------------------------

function removerErro(erroId) {
  if (document.getElementById(erroId)) {
    const erroEmail = document.getElementById(erroId);
    erroEmail.parentNode.removeChild(erroEmail);
  }
}

//-----------------------------------------------------------
