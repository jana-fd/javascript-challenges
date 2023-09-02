//Step 1
const button = document.createElement('button'); //Create button

button.innerText = "hi"; //to be able to see the color

//set style
document.body.appendChild(button); 
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#3498db";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.cursor = "pointer";

//add event listener
button.addEventListener('click', () => {
    button.style.backgroundColor = "red";
    button.style.color = "white";
    let randomNumber = Math.floor(Math.random()*1000 + 1);
    button.innerText = `Clicked ${randomNumber}!`
})


//Step 2
const h1 = document.createElement('h1');
h1.innerText = "this is an h1 header";
document.body.appendChild(h1);
h1.style.border = "10px dotted green";
document.addEventListener('keydown', (event) => {
    let letter = prompt('Enter a letter');
    switch (letter.toUpperCase()) {
        case 'A':
            h1.style.backgroundColor = "red";
            break;
        case 'S':
            h1.style.marginLeft = "10px";
            break;
        case 'D':
            const par = document.createElement('p');
            par.innerText = "Key D was pressed!";
            document.body.appendChild(par);
            break;
        case 'W':
            h1.style.display = "none";
            break;
        case ' ':
            h1.style.fontSize = "70px";
        default:
            alert('Invalid key.');

    }
})