/* --------------- First example SUM numbers */

const calculatedSumButtonElement = document.querySelector('#calculator button');
/* select first button inside element with id calculator */

function calculateSum() {
  const userInputNumberElement =
    document.getElementById('user-number'); /* selecting the element */
  const enteredNumber = userInputNumberElement.value; /* accessing the value */

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outPutresultElement = document.getElementById('calculated-sum');
  /* accesing the P element that hols the result of the sum */

  outPutresultElement.textContent = sumUpToNumber;
  /* accesing the content with the result */
  outPutresultElement.style.display = 'block';
  /* allowing Css property from display none to be visble once the SUM is finished */
}

calculatedSumButtonElement.addEventListener('click', calculateSum);

/* ---------------------- Hihglight links */

const highlightButtonElement = document.querySelector(
  '#highlight-links button'
); // or .highlight-links if it's a class

function emphasizeTheElement() {
  const anchorElements = document.querySelectorAll('#highlight-links a');
  /* selects all a elements within an array */

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add('highlight');
  }
}

highlightButtonElement.addEventListener('click', emphasizeTheElement);

/* ---------------------------- display user data */

const exampleuserData = {
  name: 'Max',
  lastName: 'Cojones',
  age: 31,
};
const userData = document.querySelector('#user-data button');

function userDataOutput() {
  const outputDataElement = document.getElementById('output-user-data');
  outputDataElement.innerHTML = '';
  /* this line resets prevent object to be printed for evry click */
  for (const key in exampleuserData) {
    const newUserDataList = document.createElement('li');
    const outputText = key.toUpperCase() + ': ' + exampleuserData[key];
    /* [key] access the values of the object dynamically */
    newUserDataList.textContent = outputText;
    outputDataElement.append(newUserDataList);
  }
}

userData.addEventListener('click', userDataOutput);

/* -------------------------- Statistics roll dice example */

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
  return Math.floor(Math.random() * 6) + 1; /* getting integer random numbers, since the expression excludes 6, we add +1 */
}

function direvNumberOfDiceRolls() {
  const targetNumberInput = document.getElementById('user-target-number');
  const diceRollsList = document.getElementById('dice-rolls');

  const enteredNumber = targetNumberInput.value;
  diceRollsList.innerHTML = '';

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0; // Variable name correction
  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice(); // Correct function name

    /* if (rolledNumber == enteredNumber) we use == because all input content is considered a string, not a number */

    numberOfRolls++; // Variable name correction
    const newRollListElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListElement.textContent = outputText; // Correct property name
    diceRollsList.append(newRollListElement);

    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById('output-total-rolls'); // Correct selector
  const outputTargetNumberElement = document.getElementById('output-target-number'); // Correct selector

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls; // Variable name correction
}

rollDiceButtonElement.addEventListener('click', direvNumberOfDiceRolls); // Correct event listener
