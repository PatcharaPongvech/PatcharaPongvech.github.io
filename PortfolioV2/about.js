const first = document.getElementById("firstname");

// Function to simulate typing effect
function typeWriter(element, text, index, speed) {
  if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(() => typeWriter(element, text, index, speed), speed);
  }
}

// Typing effect on rackroll_ text
const firstname = "Patchara";
typeWriter(first, firstname, 0, 200);