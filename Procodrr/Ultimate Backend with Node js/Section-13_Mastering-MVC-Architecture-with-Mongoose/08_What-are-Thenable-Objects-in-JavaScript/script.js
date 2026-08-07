const myObj = {
    then(resolve){
        setTimeout(() => {
            resolve("Resolve function called ")
        }, 2000);
    }
}

myObj.then((data) => {
    console.log(data)
})

