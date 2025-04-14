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

const sunIcon = `<svg width="55" height="55" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle class="preenchimento" cx="33" cy="33" r="12.5" stroke="currentColor" stroke-width="3"/>
<path class="preenchimento" d="M33 8.5V1.5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path class="preenchimento" d="M33 64.5V57.5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path class="preenchimento" d="M50.3243 15.6748L55.274 10.7251" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path class="preenchimento" d="M10.7263 55.2754L15.676 50.3257" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path class="preenchimento" d="M57.5 33L64.5 33" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path class="preenchimento" d="M1.5 33L8.5 33" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path class="preenchimento" d="M50.3243 50.3252L55.274 55.2749" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path class="preenchimento" d="M10.7263 10.7246L15.676 15.6743" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
</svg>`
const moonIcon = `<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="preenchimento" fill-rule="evenodd" clip-rule="evenodd" d="M22.0859 6.05506C23.3602 4.24168 23.9973 3.335 23.6311 2.76873C23.2648 2.20247 22.3201 2.38413 20.4308 2.74745C19.232 2.97797 18.0361 3.30927 16.8533 3.74611C5.18101 8.05719 -0.786434 21.0143 3.52464 32.6866C7.83571 44.3589 20.7928 50.3263 32.4651 46.0152C33.648 45.5783 34.7723 45.0526 35.8332 44.4485C37.5052 43.4964 38.3411 43.0204 38.2513 42.352C38.1616 41.6837 37.088 41.4088 34.941 40.8591C28.012 39.0852 22.041 34.0491 19.3755 26.832C16.71 19.6151 17.9738 11.907 22.0859 6.05506Z" fill="currentColor"/>
<path class="linha" d="M38.2513 42.352L36.7647 42.5517L38.2513 42.352ZM23.6311 2.76873L22.3716 3.58338L23.6311 2.76873ZM17.373 5.15321C18.4786 4.74488 19.5954 4.43557 20.714 4.22046L20.1475 1.27444C18.8686 1.52038 17.5935 1.87367 16.3336 2.33902L17.373 5.15321ZM4.93173 32.1669C0.907682 21.2717 6.47783 9.17726 17.373 5.15321L16.3336 2.33902C3.8842 6.93711 -2.48055 20.7568 2.11755 33.2063L4.93173 32.1669ZM31.9454 44.6081C21.0502 48.6322 8.95579 43.062 4.93173 32.1669L2.11755 33.2063C6.71564 45.6557 20.5354 52.0204 32.9848 47.4223L31.9454 44.6081ZM35.091 43.145C34.101 43.7088 33.0511 44.1998 31.9454 44.6081L32.9848 47.4223C34.2449 46.9569 35.4436 46.3965 36.5755 45.752L35.091 43.145ZM35.313 39.406C28.841 37.749 23.2702 33.0476 20.7826 26.3123L17.9684 27.3517C20.8119 35.0505 27.183 40.4213 34.5689 42.3122L35.313 39.406ZM20.7826 26.3123C18.295 19.5771 19.4723 12.3835 23.3132 6.91748L20.8587 5.19265C16.4753 11.4305 15.1249 19.653 17.9684 27.3517L20.7826 26.3123ZM36.5755 45.752C37.3646 45.3026 38.115 44.8803 38.6332 44.4706C39.1382 44.0713 39.8942 43.3158 39.738 42.1524L36.7647 42.5517C36.7375 42.3496 36.7946 42.1657 36.8594 42.0574C36.9006 41.9885 36.9104 42.0083 36.7727 42.1172C36.4774 42.3506 35.9738 42.6423 35.091 43.145L36.5755 45.752ZM34.5689 42.3122C35.6888 42.599 36.3743 42.7779 36.8067 42.9522C37.0169 43.037 37.0482 43.076 37.0109 43.0434C36.9399 42.9813 36.7996 42.8119 36.7647 42.5517L39.738 42.1524C39.5723 40.9184 38.5 40.4003 37.9286 40.1699C37.265 39.9023 36.3402 39.669 35.313 39.406L34.5689 42.3122ZM20.714 4.22046C21.7116 4.02863 22.2839 3.92293 22.6601 3.90838C22.8355 3.90159 22.841 3.92299 22.7649 3.89746C22.6452 3.85727 22.4823 3.75463 22.3716 3.58338L24.8906 1.95409C24.2531 0.968414 23.1874 0.88573 22.5441 0.91062C21.884 0.936161 21.0393 1.10295 20.1475 1.27444L20.714 4.22046ZM23.3132 6.91748C23.9229 6.04994 24.474 5.27144 24.8043 4.63673C25.0887 4.09027 25.5668 2.99955 24.8906 1.95409L22.3716 3.58338C22.229 3.36289 22.2254 3.14299 22.2391 3.04968C22.2462 3.00064 22.2478 3.05067 22.1431 3.25173C21.9279 3.66528 21.5233 4.2468 20.8587 5.19265L23.3132 6.91748Z" fill="currentColor"/>
</svg>`

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
  if (document.body.dataset.tema == "claro") {
    document.body.classList.add("tema-escuro");
    document.body.dataset.tema = "escuro";
    temaBotao.innerHTML = moonIcon;
  } else {
    document.body.classList.remove("tema-escuro");
    document.body.dataset.tema = "claro";
    temaBotao.innerHTML = sunIcon;
  }
});