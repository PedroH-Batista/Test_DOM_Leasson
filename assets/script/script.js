const img = document.querySelector(".img");
const h1 = document.querySelector("#h1");
const btn = document.querySelector("#btn");

img.setAttribute(
  "src",
  "https://ofuxico.com.br/wp-content/uploads/2022/07/ronaldinho-gaucho-bens-bloqueados.jpg"
);
img.setAttribute("alt", "FOTO DO GOAT");
h1.innerHTML = "Testes com Dom";
btn.innerHTML = "CLICA AQUI";
const retornoGoat = localStorage.getItem("imgGoat");
img.classList.toggle(retornoGoat);

btn.addEventListener("click", () => {
  img.classList.toggle("img2");
  if (retornoGoat) {
    localStorage.removeItem("imgGoat");
  } else {
    localStorage.setItem("imgGoat", "img2");
  }
});
