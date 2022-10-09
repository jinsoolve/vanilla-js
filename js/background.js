const images = ["1", "2", "3", "4", "5", "6", "7"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const imageSrc = `img/${chosenImage}.jpeg`;

document.body.style.backgroundImage = `url(${imageSrc})`;
