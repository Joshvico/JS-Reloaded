const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');
const maxAllowedChars = productNameInputElement.maxLength;

function updateTheRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;
  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
  if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add('warning');  // Add the 'warning' class when characters are <= 10
  } else {
    remainingCharsElement.classList.remove('warning');  // Remove the 'warning' class when characters are > 10
  }
}
productNameInputElement.addEventListener('input', updateTheRemainingCharacters);

console.log(maxAllowedChars);
