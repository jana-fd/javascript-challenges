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