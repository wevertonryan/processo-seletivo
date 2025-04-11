/*---------------------------- FUNÇÕES DO CÓDIGO --------------------------------------


- Validar Dados (ver se estão no formato correto)
- Caso esteja errado enviar mensagens de Erro
- Tirar mensangens erro automaticamente caso os dados apareçam corretamente
- Enviar informações para o alert
- altera a aparencia conforme interação do usuario (coisas que não seja possivel em css)


---------------------------- VARIAVEIS E CONSTANTES ---------------------------------*/

//Elemento Input dados formulário
const inputElemento = {
  nome: document.getElementById("nome"),
  email: document.getElementById("email"),
  senha: document.getElementById("senha")
};

//Elemento Botão para enviar dados
const enviarBotao = document.getElementById("enviar");


/*------------------ ATUALIZAÇÃO DINÂMICA DAS MENSAGEM DE ERRO ------------------------*/

/*Atualiza o campo mensagem de erro do Input conforme o usuario digita*/
inputElemento.nome.addEventListener("input", ()=>(inputMensagemErro("nome")));
inputElemento.email.addEventListener("input", ()=>(inputMensagemErro("email")));
inputElemento.senha.addEventListener("input", ()=>(inputMensagemErro("senha")));

function inputMensagemErro(input) {
  const inputErro = document.getElementById("erro-" + input);

  if (inputErro) { //verificando se o Elemento erro existe
    inputErro.textContent = condicaoInput[input](inputElemento[input].value);
  }
}

/*Quando o usuário clicar no input tirar a classe de erro que altera cor*/
inputElemento.nome.addEventListener("focus", ()=>{desativarVisualErro("nome")});
inputElemento.email.addEventListener("focus", ()=>{desativarVisualErro("email")});
inputElemento.senha.addEventListener("focus", ()=>{desativarVisualErro("senha")});

function desativarVisualErro(input) {
  inputElemento[input].parentNode.classList.remove("erro");
}


/*----------------------- VALIDAÇÃO E MENSAGENS DE ERRO -------------------------------*/

/*Verifica como o dado do formulario fornecido pelo usuário se enquadra*/
const condicaoInput = {
  nome: (nome) => {
    tamanhoNome = nome.length;
    if (tamanhoNome < 3) {
      //retorna a mensagem de erro
      if (tamanhoNome == 0) {
        return "* Nome é obrigatório!";
      } else {
        return "* Nome Inválido!";
      }
    }
    return "";
  },
  
  email: (email) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { //o teste de validação de email /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test() foi fornecido por IA
      if (email == "") {
        return "* Email é obrigatório!";
      } else {
        return "* Email Inválido!";
      }
    }
    return "";
  },

  senha: (senha) => {
    const tamanho = senha.length;
    let validacao = [false, false, false];

    if (tamanho >= 6) {
      //pega a senha que o usuário colocou, e verifica cada caracter individualmente
      for (let i = 0; i < tamanho; i++) {
        //em cada loop ele verifica qual tipo o caracter é
        if (/[0-9]/.test(senha[i])) { //o teste de validação de numero /[0-9]/.test() foi fornecido por IA
          //numero
          validacao[0] = true;
        } else if (/[a-zA-Z]/.test(senha[i])) { //o teste de validação de letra /[a-zA-Z]/.test() foi fornecido por IA
          //letra
          validacao[1] = true;
        } else {
          //caracter especial
          validacao[2] = true;
        }
        //preciso que tenha ao menos 1 caracter de cada tipo na senha
        if (validacao[0] && validacao[1] && validacao[2]) { //caso encontre os 3 tipos de caracteres já retorna
          return "";
        }
      }
      // se não der return é porque não tem algum dos caracteres pedidos
      // vai ser feita verificação para ver qual deles é falso
      switch (false) {
        case validacao[0]:
          return "* Sua Senha precisa ter números!";
        case validacao[1]:
          return "* Sua Senha precisa ter letras!";
        case validacao[2]:
          return "* Sua Senha precisa ter no mínimo um caracter especial";
      }
    } else if (tamanho == 0) {
      return "* Senha Inválida!";
    } else {
      return "* A Senha tem que ter pelo menos 6 caracteres!";
    }
  },
};

/* Valida se o valor fornecido pelo usuário está formatado corretamente */
//- Retorno será Verdadeiro ou Falso
function validacaoInput(valor, tipo) {
  const mensagem = condicaoInput[tipo](valor);
  let inputErro = document.getElementById("erro-"+tipo);
  if(mensagem == ""){
    if(inputErro){ //para remover a mensagem de erro caso o usuario envie os dados corretamente
      inputErro.parentNode.removeChild(inputErro)
    }
    return true;
  }

  //O elemento erro irá mostrar as informações de erro de formatação
  //Eu decidi não criar o Elemento erro no html direto pois queria que aparecesse apenas no caso de alguém enviar alguma informação incorreta
  //então é necessário verificar sua existencia
  if(!inputErro){ //no caso de não existir (só acontece na priveira vez que essa função for chamada)
    //criação do elemento erro conforme o seu tipo
    inputErro = document.createElement("p");
    inputErro.id = "erro-"+tipo;
    inputErro.classList.add("input-mensagem", "erro");
    inputErro.textContent = mensagem;
    inputElemento[tipo].parentNode.insertBefore(inputErro, inputElemento[tipo].nextSibling)
  } else { //caso já exista
    inputErro.textContent = mensagem;
  }
  inputElemento[tipo].parentNode.classList.add("erro"); //altera a aparencia do input
  return false;
}


/*--------------------------- ENVIAR DADOS DO FORMULÁRIO ------------------------------*/

/*para enviar os dados para o Alert()*/
enviarBotao.addEventListener("click", enviarDados)
function enviarDados(){
  const nome = inputElemento.nome.value;
  const nomeValido = validacaoInput(nome, "nome");
  const email = inputElemento.email.value;
  const emailValido = validacaoInput(email, "email");
  const senha = inputElemento.senha.value;
  const senhaValido = validacaoInput(senha, "senha");

  if(nomeValido && emailValido && senhaValido){
    window.alert("Nome: " + nome + "\nEmail: " + email + "\nSenha: " + senha);
  }
}

/*-------------------------------------------------------------------------------------*/