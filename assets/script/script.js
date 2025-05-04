const img = document.querySelector(".img");
const img2 = document.querySelector(".img2");
const h1 = document.querySelector("#h1");
const btn = document.querySelector("#btn");

img.setAttribute(
  "src",
  "https://thumbs.dreamstime.com/b/ola-palavra-portuguesa-hello-escrita-%C3%A0-m%C3%A3o-sobre-fundo-branco-171059799.jpg"
);
img.setAttribute("alt", "Texto de Apresentação");

h1.innerHTML = "Testes com DOM";
btn.innerHTML = "CLICA AQUI";
const retornoGoat = localStorage.getItem("imgAP");
img.classList.toggle(retornoGoat);

btn.addEventListener("click", () => {
  img.classList.toggle("img2");
  if (retornoGoat) {
    localStorage.removeItem("imgAP");
  } else {
    localStorage.setItem("imgAP", "img2");
  }
});
