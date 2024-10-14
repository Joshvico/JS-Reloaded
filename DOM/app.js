/* ADDING EVENTS */
let paragraphElement = document.querySelector('p');

function changePragraphText() {
    paragraphElement.textContent = 'Clicked';
    console.log ("paragphg clieked")

}

paragraphElement.addEventListener('click',changePragraphText) /* paragraphElement.addEventListener(event to listen, what will happens by poiting a function, ) */