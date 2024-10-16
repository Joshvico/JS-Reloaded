//console.dir(document);
/* console.dir will show you the real JS format ofr the windows object */
//console.log(document) /* will display htm code not as JSNON */

//document.body.children[1].children[0].href = "https://google.com"; /* Acess and assign new value the Anchor element via document like and object accesing every nested part from body to paraghpr whihc is 1 element in array to a which is 0 in lasta array */

let anchorElement =
  document.getElementById(
    'external_link'
  ); /* via element ID accesing with this build in option and sotring it in a variable */
anchorElement.href = 'https;//google.com'; /* assigning link to the element */

document.querySelector(
  '#external-id'
); /* via CSS selector or vy element type lie 'a' o 'p a' selecting first matching element */
anchorElement.href = 'https;//google.com'; /* assigning link to the element */

document.querySelector('#external-id'); /* will target all matching elements */

/* CREATING AN ELEMENT VIA DOM */

// 1 define the element
let newElement = document.createElement('a');
// 2 getting acces to the parent where you want it to be
let firstParagraph =
  document.querySelector('p'); /* it will find the 1st paragrph in the page */
// 3 Inserting the element create in the paragraph element
firstParagraph.append(newElement);
// 4 adding content
newElement.textContent = ' click tadi and go to maps ';
newElement.href = 'https://www.google.com/maps';

/* REMOVE ELEMENTS*/

// 1 Select element to remove
let firstH1Element = document.querySelector('h1');

// 2 Remove it

firstH1Element.remove();
/* firstH1Element.parentElement.removeChild(firstH1Element);  // ----> for older browsers
 */
/* MOVE ELEMENTS */
firstParagraph.parentElement.append(
  firstParagraph
); /* since appending has to be at the end the browser moves it atomatically */
// inner HTML

console.log(
  firstParagraph.innerHTML
); /* give you content to the content of the element + the HTML nested*/
console.log(
  firstParagraph.textContent
); /* give you PURE content to the content of the element*/

firstParagraph.innerHTML =
  'Hi! this is <strong>hello there</strong>'; /* adding html inside the stirng is interpreted as HTML  */

