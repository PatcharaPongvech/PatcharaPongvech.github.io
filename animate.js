let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n){
    let slides = document.getElementsByClassName("mySlides")
    if(n>slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      
    slides[slideIndex-1].style.display = "block";
  }


const hello = document.getElementById("hi");

// Function to simulate typing effect
function typeWriter(element, text, index, speed) {
  if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(() => typeWriter(element, text, index, speed), speed);
  }
}

// Typing effect on rackroll_ text
const greet = "Hi my name is Patchara Pongvech_";
typeWriter(hello, greet, 0, 50);