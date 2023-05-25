let checkbox = document.querySelector("#myCheck");
let cv = document.querySelector("#drag");

let paragraphTab = document.querySelectorAll("p");
let tabH3 = document.querySelectorAll("h3");
let tabH4 = document.querySelectorAll("h4");
let tabLi = document.querySelectorAll("li");

checkbox.addEventListener("click", function () {
  cv.classList.toggle("bg-dark");

  paragraphTab.forEach((para) => {
    para.classList.toggle("bg-white");
  });

  tabH3.forEach((h3) => {
    h3.classList.toggle("bg-white");
  });

  tabH4.forEach((h4) => {
    h4.classList.toggle("bg-white");
  });

  tabLi.forEach((li) => {
    li.classList.toggle("bg-white");
  });
});
