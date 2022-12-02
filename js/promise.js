let promiseToCleanRoom = new Promise(function (resolve, reject) {
    let isClean = true;
    if(isClean) {
        resolve("Room is clean");
    }else{ 
        reject("Room is not clean")
    }
});

let result = (result) =>{
    console.log(result);
}

let error = (error) =>{
    console.log(error);
}

promiseToCleanRoom.then(result).catch(error);