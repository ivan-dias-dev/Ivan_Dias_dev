const menuItens = document.querySelectorAll(".menu a");

console.log(menuItens);

menuItens.forEach((item) => {
  console.log(item);
});

function redirecionar() {
  let identidade = document.querySelectorAll(".bloco2");
  for (i = 0; i < identidade.length; i++) {
    identidade[i].addEventListener("click", identifica);
  }
}
function identifica(event) {
  let pagina1 = "https://ivan-dias-dev.github.io/ozana/";
  let pagina2 = "https://ivan-dias-dev.github.io/notifications-page-main/";
  let pagina3 = "http://nepescados.infinityfreeapp.com/";
  let pagina4 = "https://ivan-dias-dev.github.io/game_mosquitao/";

  const button = event.target.id;
  if (button == 0) {
    window.open(pagina1, "_blank");
  }
  if (button == 1) {
    window.open(pagina2, "_blank");
  }
  if (button == 2) {
    window.open(pagina3, "_blank");
  }
  if (button == 3) {
    window.open(pagina4, "_blank");
  }
}

//===============================================================================
var marginTop = 0; // variável para armazenar o estado atual

function changeMargin() {
  if (marginTop == 0) {
    document.getElementById("container").style.marginTop = "5em";
    marginTop = 10; // atualiza o valor da variável
  } else {
    document.getElementById("container").style.marginTop = "3em";
    marginTop = 0; // atualiza o valor da variável
  }
}

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split(""); //o split divide em um array
  elemento.innerHTML = ""; //serve para limpar para que a animacao ocorra
  textoArray.forEach((letra, i) => {
    setTimeout(function () {
      elemento.innerHTML += letra; //para cada letra add uma + outra
    }, 100 * i); //tempo para adicionar algo setTimeout(funcao, tempo)
  });
}

const titulo = document.querySelector(".sou");
typeWriter(titulo);
