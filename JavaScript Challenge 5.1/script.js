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
button.addEventListener('click', (event) => {
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
    if(document.activeElement.tagName !== 'INPUT') {
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

    }
})


//Step 3
const form = document.createElement('form');

//Username label
const userLabel = document.createElement('label');
userLabel.innerHTML = 'Username: ';

//Username text input
const username = document.createElement('input');
username.type = 'text';
username.name = 'username';

//set Id to username input
username.setAttribute('id', 'Username');
form.appendChild(userLabel);
form.appendChild(username);
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

//Password label
const passLabel = document.createElement('label');
passLabel.innerHTML = 'Password: ';

//Password text input
const pass = document.createElement('input');
pass.type = 'text';
pass.name = 'password';

//set Id to password input
pass.setAttribute('id', 'Password');
form.appendChild(passLabel);
form.appendChild(pass);
const break3 = document.createElement('br');
form.appendChild(break3);


//Confirm password label
const confLabel = document.createElement('label');
confLabel.innerHTML = 'Confirm Password: ';

//Confirm password text input
const confirmation = document.createElement('input');
confirmation.type = 'text';
confirmation.name = 'confirm password';

//set Id to confirm password input
confirmation.setAttribute('id', 'confirmPassword');
form.appendChild(confLabel);
form.appendChild(confirmation);
const break4 = document.createElement('br');
form.appendChild(break4);

//Submit button
const submitButton = document.createElement('input');
submitButton.type = 'submit';
//Value on button
submitButton.value = 'Submit';
form.appendChild(submitButton);
const break5 = document.createElement('br');
form.appendChild(break5);


//message for success or failure
const message = document.createElement('p');
message.setAttribute('id', 'runMessage');
form.append(message);


document.body.appendChild(form);

const successOrFailMessage = document.getElementById('runMessage');

//when user on focus change background color to gray
const user = document.getElementById('Username');
user.addEventListener( 'focus', () => {
    successOrFailMessage.innerHTML = '';
    user.style.backgroundColor = "#AAAAAA";
})

//when user is not on focus anymore, return to default color
user.addEventListener('blur', () => {
    user.style.backgroundColor = "";
})

//when email on focus change background color to gray
const emailAddress = document.getElementById('Email');
emailAddress.addEventListener( 'focus', () => {
    emailAddress.style.backgroundColor = "#AAAAAA";
})

//when email is not on focus anymore, return to default color
emailAddress.addEventListener('blur', () => {
    emailAddress.style.backgroundColor = "";
})


//when password on focus change background color to gray
const Pass = document.getElementById('Password');
Pass.addEventListener( 'focus', () => {
    Pass.style.backgroundColor = "#AAAAAA";
})

//when password is not on focus anymore, return to default color
Pass.addEventListener('blur', () => {
    Pass.style.backgroundColor = "";
})

//when confirm password on focus change background color to gray
const confirmPassword = document.getElementById('confirmPassword');
confirmPassword.addEventListener ('focus', () => {
    confirmPassword.style.backgroundColor = "#AAAAAA";
})

//when confirm password is not on focus anymore, return to default color
confirmPassword.addEventListener('blur', () => {
    confirmPassword.style.backgroundColor = "";
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!pattern.test(emailAddress.value)) {
        successOrFailMessage.innerHTML = 'Enter a valid email.';
        return;
    }

    if( Pass.value !== confirmPassword.value) {
        successOrFailMessage.innerHTML = 'Passwords do not match';
        return;
    }
    successOrFailMessage.innerHTML = 'Submitted successfully';
    form.reset();


})
