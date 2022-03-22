const images = ["1.jpg","2.jpg","3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement('img');
const bgImageEl = document.querySelector('.img-wrap');

bgImage.src = `img/${chosenImage}`;
console.log(bgImage);

bgImageEl.appendChild(bgImage)