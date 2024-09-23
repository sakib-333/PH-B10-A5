document.getElementById("visit-blog").addEventListener("click", () => {
  window.location.href = "./src/pages/blog.html";
});

document.getElementById("btn-donation").addEventListener("click", () => {
  showActiveButton("btn-donation");
});

document.getElementById("btn-history").addEventListener("click", () => {
  showActiveButton("btn-history");
});

const markups = sectors.map((sector) => {
  return makeSectorCard(sector);
});

const main = document.querySelector("main");

for (let markup of markups) {
  const element = createElement("div");
  element.innerHTML = markup;

  main.appendChild(element);
}
