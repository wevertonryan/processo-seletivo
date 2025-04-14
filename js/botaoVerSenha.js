/*---------------------------- FUNÇÕES DO CÓDIGO --------------------------------------


- botão que permite a visibilidade da senha
- permitir que o botão de visibilidade apareça apenas quando tiver ao menos um caracter


----------------------------------- VETORES -----------------------------------------*/

/* Armazenando os vetores que simbolizam o botão "ver-senha" em uma Constante*/
//Vetor que permite a visibilidade da senha
const viewOn = `<svg id="viewOn" onclick='verSenha()' class="view" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="5" fill="currentColor"/>
<path d="M26.25 15C26.25 15 25 5 15 5C5 5 3.75 15 3.75 15" stroke="currentColor" stroke-width="2"/>
</svg>`;
//Vetor que inibe a visibildade da senha
const viewOff = `<svg id="viewOff" onclick='verSenha()' class="view" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 15C26 15 24.7778 21 15 21C5.22222 21 4 15 4 15" stroke="currentColor" stroke-width="2"/>
<path d="M5.1 18.8L5.9 18.2L4.7 16.6L3.9 17.2L5.1 18.8ZM1.9 18.7C1.45817 19.0314 1.36863 19.6582 1.7 20.1C2.03137 20.5418 2.65817 20.6314 3.1 20.3L1.9 18.7ZM3.9 17.2L1.9 18.7L3.1 20.3L5.1 18.8L3.9 17.2Z" fill="currentColor"/>
<path d="M24.9 18.8L24.1 18.2L25.3 16.6L26.1 17.2L24.9 18.8ZM28.1 18.7C28.5418 19.0314 28.6314 19.6582 28.3 20.1C27.9686 20.5418 27.3418 20.6314 26.9 20.3L28.1 18.7ZM26.1 17.2L28.1 18.7L26.9 20.3L24.9 18.8L26.1 17.2Z" fill="currentColor"/>
<path d="M10.8866 21.2525L11.187 20.2963L9.25985 19.7783L8.95948 20.7345L10.8866 21.2525ZM8.03642 23.6728C7.87053 24.2009 8.16745 24.745 8.69961 24.888C9.23177 25.0311 9.79764 24.7189 9.96353 24.1909L8.03642 23.6728ZM8.95948 20.7345L8.03642 23.6728L9.96353 24.1909L10.8866 21.2525L8.95948 20.7345Z" fill="currentColor"/>
<path d="M19.1134 21.2866L18.813 20.3304L20.7402 19.8124L21.0405 20.7686L19.1134 21.2866ZM21.9636 23.707C22.1295 24.235 21.8325 24.7791 21.3004 24.9221C20.7682 25.0652 20.2024 24.753 20.0365 24.225L21.9636 23.707ZM21.0405 20.7686L21.9636 23.707L20.0365 24.225L19.1134 21.2866L21.0405 20.7686Z" fill="currentColor"/>
</svg>`;

//----------------------- ADIÇÃO/REMOÇÃO BOTÃO VISIBILIDADE ---------------------------//

//criação do botão "ver senha" quando tiver ao menos 1 caracter
const senha = document.getElementById("senha");
const verSenhaBotao = document.getElementById("ver-senha");

senha.addEventListener("input", (event) => {
  if (event.target.value != "" && verSenhaBotao.textContent == "") {
    verSenhaBotao.innerHTML = viewOff;
    //quando não tem nem um valor no Input Senha
  } else if (event.target.value == "") {
    verSenhaBotao.innerHTML = "";
    senha.type = "password"; //quando o usuario apaga todos os digitos desabilita visibilidade
  }
});

//--------------------------------- VISIBILIDADE --------------------------------------//

//função chamada pelo botão "ver senha" para permitir visibilidade da senha
function verSenha() {
  if (senha.type == "password") {
    senha.type = "text";
    verSenhaBotao.innerHTML = viewOn;
  } else {
    senha.type = "password";
    verSenhaBotao.innerHTML = viewOff;
  }
}

//-------------------------------------------------------------------------------------//

const temaBotao = document.querySelector(".tema-botao");

temaBotao.addEventListener("click", () => {
  if (loopTeste()) {
    document.body.classList.remove("tema-escuro");
  } else {
    document.body.classList.add("tema-escuro");
  }
});

function loopTeste() {
  const corpoSiteClasses = document.body.classList;
  const corpoSiteQuantidade = corpoSiteClasses.length;
  for (let i = 0; i < corpoSiteQuantidade; i++) {
    if (corpoSiteClasses[i] == "tema-escuro") {
      return true;
    }
  }
  return false;
}
