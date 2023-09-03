//Step 1

setTimeout( () => {
    console.log("Hello after 5 seconds!");
}, 5000)


const clockDiv = document.createElement('div');
document.body.appendChild(clockDiv);
function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let thisTime = `${hours} : ${minutes} : ${seconds}`;
    clockDiv.innerHTML = thisTime;
}
setInterval(updateClock, 1000);


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!")
    }, 2000)
})

promise 
 .then(result => {
    console.log(result);
    return result;
 })
 .then((result) => {
    alert(result);
    console.log("Chained message!");
 })
 .catch(error => console.log(error))



//Step 2

const doPromise = new Promise((resolve,reject) => {
    const success = Math.random() < 0.5;
    if(success) {
        resolve("Data fetched successfully!");
    }
    else {
        reject("Network Error!")
    }
}, 3000);


const url = 'https://jsonplaceholder.typicode.com/posts/1';
const fetchData = async () => {
    try {
        const response = await fetch(url);
        const posts = await response.json()
        console.log(posts);
    } catch (err) {
        console.error(err)
    }
}
fetchData();

const fetchPosts = async () => {
    const [one, two, three ] = await Promise.all([
        await fetch('https://jsonplaceholder.typicode.com/posts/1'),
        await fetch('https://jsonplaceholder.typicode.com/posts/2'),
        await fetch('https://jsonplaceholder.typicode.com/posts/3'),
    ]);
    console.log(one);
    console.log(two);
    console.log(three);
}

fetchPosts();




