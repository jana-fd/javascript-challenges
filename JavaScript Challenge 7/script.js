//Step 1
const containerDiv = document.createElement('div');
containerDiv.setAttribute('class','container');

const loginDiv = document.createElement('div');
loginDiv.setAttribute('class','login_container');
containerDiv.appendChild(loginDiv);

const signInDiv = document.createElement('div');
signInDiv.setAttribute('class','login_signin');
loginDiv.appendChild(signInDiv);

const signInNowDiv = document.createElement('div');
signInNowDiv.setAttribute('class', 'login_signin-now');
signInDiv.appendChild(signInNowDiv);

const header1 = document.createElement('h1');
header1.innerHTML = 'Sign up NOW!';
signInNowDiv.appendChild(header1);

const header3 = document.createElement('h3');
header3.innerHTML = 'Enter your details';
signInNowDiv.appendChild(header3);

const form = document.createElement('form');
signInNowDiv.appendChild(form);

const label1 = document.createElement('label');
label1.textContent = 'Email';
form.appendChild(label1);

const emailInput = document.createElement('input');
emailInput.setAttribute('class','input-field');
emailInput.type = 'email';
emailInput.placeholder = 'Email';
emailInput.required = true;
label1.appendChild(emailInput);

const break1 = document.createElement('br');
form.appendChild(break1);
const break2 = document.createElement('br');
form.appendChild(break2);


const label2 = document.createElement('label');
label2.textContent = 'Password';
form.appendChild(label2);

const passInput = document.createElement('input');
passInput.setAttribute('class','input-field');
passInput.type = 'password';
passInput.placeholder = 'Password';
passInput.required = true;
label2.appendChild(passInput);

const break3 = document.createElement('br');
form.appendChild(break3);
const break4 = document.createElement('br');
form.appendChild(break4);

const label3 = document.createElement('label');
label3.textContent = 'Confirm Password';
form.appendChild(label3);

const confPass = document.createElement('input');
confPass.setAttribute('class', 'input-field');
confPass.type = 'cPassword';
confPass.placeholder = 'Confirm Password';
confPass.required = true;
label3.appendChild(confPass);

const break5 = document.createElement('br');
form.appendChild(break5);
const break6 = document.createElement('br');
form.appendChild(break6);

const button = document.createElement('button');
button.setAttribute('class', 'filled-btn');
button.setAttribute('id', 'submit-btn');
button.innerHTML = 'Submit';
form.appendChild(button);

const errorMessage = document.createElement('div');
form.appendChild(errorMessage);


button.addEventListener('click', (event) => {
    event.preventDefault();
    if (passInput.value !== confPass.value) {
        errorMessage.innerHTML = 'Passwords do not match';
    }
    if (emailInput.value === '') {
        errorMessage.innerHTML = 'Email is required';
    }
    else {
        window.location.href = 'quotes.html';
        emailInput.value = '';
        confPass.value = '';
    }
})

document.body.appendChild(containerDiv);


