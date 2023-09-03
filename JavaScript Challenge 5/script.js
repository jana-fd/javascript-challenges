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


//Step 2

//Multiple Event Listeners
const hoverButton = document.createElement('button');
hoverButton.style.border = " 1px solid black";
hoverButton.innerHTML = "hover over";
hoverButton.addEventListener( 'mouseover', () => {
    hoverButton.style.backgroundColor = "blue";
})
hoverButton.addEventListener( 'mouseout', () => {
    hoverButton.style.backgroundColor = '';
})

document.body.appendChild(hoverButton);

//Event Delegation
const buttons = document.getElementById('buttonContainer');
buttons.addEventListener ('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.preventDefault();
        console.log(event.target.innerHTML);
    }

})


//Form Data Extraction
const form = document.createElement('form');

//Username label
const nameLabel = document.createElement('label');
nameLabel.innerHTML = 'Name: ';

//Username text input
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.name = 'username';

//set Id to username input
nameInput.setAttribute('id', 'Name');
form.appendChild(nameLabel);
form.appendChild(nameInput);
const break1 = document.createElement('br');
form.appendChild(break1);


//Email label
const emailLabel = document.createElement('label');
emailLabel.innerHTML = 'Email: ';

//Email text input
const email = document.createElement('input');
email.type = 'text';
email.name = 'email';

//set Id to email input
email.setAttribute('id', 'Email');
form.appendChild(emailLabel);
form.appendChild(email);
const break2 = document.createElement('br');
form.appendChild(break2);


//Submit button
const submitButton = document.createElement('input');
submitButton.type = 'submit';
//Value on button
submitButton.value = 'Submit';
form.appendChild(submitButton);

document.body.appendChild(form);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log("Name: " + nameInput.value);
    console.log("Email: " +email.value);
});


//Step 3

//DOM Cloning

const original = document.getElementById('original');
const cloned = original.cloneNode(true);
cloned.style.display = "none";
document.body.appendChild(cloned);
const clonedPar = cloned.getElementsByTagName('p')[0]; //because the getElementsByTagName gives a collection of elements and not only one, so I want the first element since it is only one.
clonedPar.innerHTML = "Cloned";

const cloneBtn = document.getElementById('clone-btn');
cloneBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (cloned.style.display === "none") {
        cloned.style.display = "block";
    }
    else {
        cloned.style.display = "none";
    }
})

//Element Removal

const removeHeader = document.createElement('button');
removeHeader.innerHTML = 'Remove header';
document.body.appendChild(removeHeader);
removeHeader.addEventListener('click', (event) => {
    event.preventDefault();
    header[0].remove();
})


//Inserting Elements
function insertElement (element) {
    footer[0].before(element);
}

const someEl = document.createElement('p');
someEl.innerHTML = 'This is a new element inserted before the footer.';
insertElement(someEl);


