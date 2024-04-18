const cardLeft = document.querySelector('[data-js="card-left"]');
const cardLeftImage = document.querySelector('[data-js="card-left-image"]');

cardLeft.addEventListener("mouseover", () => {
  cardLeftImage.src = "/img/Icon_img.webp";
});

cardLeft.addEventListener("mouseout", () => {
  cardLeftImage.src = "/img/Icon_img.jpg";
});
