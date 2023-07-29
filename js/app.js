const menuItens = document.querySelectorAll(".menu a");

console.log(menuItens);

menuItens.forEach((item) => {
  console.log(item);
});

function redirecionar() {
  let pagina = "https://ivan-dias-dev.github.io/Zaninha/";
  window.open(pagina, "_blank");
}
