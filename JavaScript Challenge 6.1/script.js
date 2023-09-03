//Step 1
const delay = (milliseconds) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("Success!");
        }, milliseconds);
    })
    return promise;
}

delay(3000)
 .then((result) => {
    console.log(result);
 })

 //Step 2
const url = 'https://uselessfacts.jsph.pl/random.json?language=en'
fetch(url)
 .then((response) => {
    if (!response.ok) {
        throw new Error("Cannot fetch fact");
    }
    return response.json();
 })
 .then((result) => {
    const fact = result.text;
    console.log("Random Fact: ", fact); 
 })
 .catch((err) => {
    console.error(err);
 })