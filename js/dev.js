//Valida se o valor fornecido pelo usuário está formatado corretamente
//- Retorno será Verdadeiro ou Falso
function validacaoInput(valor, tipo) {
    const mensagem = condicaoInput[tipo](valor);
    if(mensagem == ""){
      return true;
    }
  
    //O elemento erro irá mostrar as informações de erro de formatação
    //Eu decidi não criar o Elemento erro no html direto pois queria que aparecesse apenas no caso de alguém enviar alguma informação incorreta
    //então é necessário verificar sua existencia
    let inputErro = document.getElementById("erro-"+tipo);
    if(!inputErro){ //no caso de não existir (só acontece na priveira vez que essa função for chamada)
      inputErro = document.createElement("p");
      inputErro.id = "erro-"+tipo;
      inputErro.classList.add("erro");
      inputErro.textContent = mensagem;
      inputElemento[tipo].parentNode.insertBefore(inputErro, inputElemento[tipo].nextSibling)
    } else { //caso já exista
      inputErro.textContent = mensagem;
    }
    return false;
  }