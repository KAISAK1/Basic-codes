document.addEventListener('DOMContentLoaded', (event) => {
  const text = document.querySelector('.love-letter');
  const textContent = text.textContent;
  text.textContent = '';

  let i = 0;
  const typingSpeed = 1s;

  function typeWriter() {
      if (i < textContent.length) {
          text.innerHTML += textContent.charAt(i);
          i++;
          setTimeout(typeWriter, typingSpeed);
      }
  }

  typeWriter();
});
