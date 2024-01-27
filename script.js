
const backgroundElement = document.getElementById("backgroundElement");

function changeBackgroundImage() {
    const images = [
        'img1.jpg',
        'img2.jpg',
        'img3.jpg',
        'img4.jpg',
        'img5.jpg',
        // Add more image URLs as needed
    ];

    const randomImage = new Image();
    randomImage.src = images[Math.floor(Math.random() * images.length)];

    randomImage.onload = function () {
        const imageWidth = this.width;
        const imageHeight = this.height;

        backgroundElement.style.backgroundImage = `url('${randomImage.src}')`;
        backgroundElement.style.backgroundSize = 'cover';
        backgroundElement.style.width = `${imageWidth}px`;
        backgroundElement.style.height = `${imageHeight}px`;
    };
}

// Change the background image when the button is clicked
const btn = document.getElementById("btn");
btn.addEventListener("click", changeBackgroundImage);

  
  
  
