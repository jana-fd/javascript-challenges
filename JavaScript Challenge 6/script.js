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


