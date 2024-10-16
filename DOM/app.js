/*  ADDING EVENTS */
let paragraphElement = document.querySelector('p');

function changePragraphText() {
  paragraphElement.textContent = 'Clicked';
  console.log('paragphg clieked');
}

paragraphElement.addEventListener(
  'click',
  changePragraphText
); /* paragraphElement.addEventListener(event to listen, what will happens by poiting a function, ) */

/* TASK to listen to typped chracters in input element */
let typedInput = document.querySelector('input');

function detectedTyping(event) {
  /* let enteredText= typedInput.value; value is used to acces input value */
  let enteredText = event.target.value;
  /* let enteredText= event.data; ---> it provides every single item of data when consol.le */
  console.log(enteredText);
  /* every time you type the console.log print what your wrote */
  console.log(event);
}
