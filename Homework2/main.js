

const sliderContentEl = document.querySelector(".slider-content");
const imagesEl = document.querySelectorAll(".slider-img");
const pagesEl = document.querySelectorAll(".page");
const prevBtnEl = document.querySelector(".prev");
const nextBtnEl = document.querySelector(".next");

nextBtnEl.addEventListener("click", nextImg); // 
prevBtnEl.addEventListener("click", prevImg); // 

let sliderIndex = 0;
let sliderWidth = document.querySelector(".slider").offsetWidth;

pagesEl.forEach((page, index) => {
  page.addEventListener("click", () => {
    sliderIndex = index;
    changePage();
    activePage(sliderIndex);
  });
});

function nextImg() {
  sliderIndex++;
  if (sliderIndex >= imagesEl.length) sliderIndex = 0;
  changePage();
  activePage(sliderIndex);
}

function prevImg() {
  sliderIndex--;
  if (sliderIndex < 0) sliderIndex = imagesEl.length - 1;
  changePage();
  activePage(sliderIndex);
}

function changePage() {
  sliderContentEl.style.transform = `translateX(${
    -sliderIndex * sliderWidth
  }px)`;
}

function activePage(index) {
  pagesEl.forEach((item) => item.classList.remove("active-page"));
  pagesEl[index].classList.add("active-page");
}
