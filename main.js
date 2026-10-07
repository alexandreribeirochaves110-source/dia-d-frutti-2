// DIA D FRUTTI 🍊
// Exposição virtual interativa

const titulo = document.querySelector("h1");

titulo.addEventListener("click", () => {
  titulo.textContent = "🍊 Bem-vindo ao Dia D Frutti!";
  titulo.style.transform = "scale(1.1)";
  titulo.style.transition = "0.3s";

  setTimeout(() => {
    titulo.textContent = "🍊 DIA D FRUTTI";
    titulo.style.transform = "scale(1)";
  }, 2000);
});

// Efeito de entrada
document.body.style.opacity = "0";

setTimeout(() => {
  document.body.style.transition = "opacity 1.5s";
  document.body.style.opacity = "1";
}, 100);

// Mensagem ao tocar nos títulos
const secoes = document.querySelectorAll("h2");

secoes.forEach((secao) => {
  secao.addEventListener("click", () => {
    secao.style.color = "#ffb52e";
    secao.style.transform = "scale(1.05)";
    secao.style.transition = "0.3s";

    setTimeout(() => {
      secao.style.color = "#ffffff";
      secao.style.transform = "scale(1)";
    }, 700);
  });
});