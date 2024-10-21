const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');
const maxAllowedChars = productNameInputElement.maxLength;

function updateTheRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;
  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
  if (remainingCharacters === 0) {
    remainingCharsElement.classList.add('error'); // Add the 'warning' class when characters are <= 10
    productNameInputElement.classList.add('error'); // Add the 'warning' class when characters are <= 10
  } else if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add('warning');
    productNameInputElement.classList.add('warning');
    remainingCharsElement.classList.remove('error'); // Remove the 'warning' class when characters are > 10
    productNameInputElement.classList.remove('error');
  } else {
    remainingCharsElement.classList.remove('warning'); 
    productNameInputElement.classList.remove('warning');
  }
}
productNameInputElement.addEventListener('input', updateTheRemainingCharacters);

console.log(maxAllowedChars);
