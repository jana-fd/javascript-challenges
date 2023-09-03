//Step 1

//DOM Tree Navigation
const menu = document.getElementsByClassName('menu');
for( let i=0; i < menu.length; i++) {
    console.log(menu[i]);
    console.log(menu[i].children);
}

const header = document.getElementsByTagName('header');
for( let i=0; i < header.length; i++) {
    console.log(header[i]);
    console.log(header[i].children);
}

const footer = document.getElementsByTagName('footer');
for( let i=0; i < footer.length; i++) {
    console.log(footer[i]);
    console.log(footer[i].children);
}

//DOM Element Creation
const newDiv = document.createElement('div');
newDiv.setAttribute('class', 'container');

const newPar = document.createElement('p');
newPar.innerHTML = 'Hello, World!';
newDiv.appendChild(newPar);

document.body.appendChild(newDiv);

//Element Styling
newDiv.style.backgroundColor = "blue";
newPar.style.color = "white";
newPar.style.fontSize = "24px";
newPar.style.fontFamily = "Helvetica";
newPar.style.border = "1px solid black";

const headers = document.querySelectorAll('h1, h3');
for(const h of headers) {
    let text = h.innerHTML;
    h.innerHTML = text.italics(); //Why is it slashed?
}

