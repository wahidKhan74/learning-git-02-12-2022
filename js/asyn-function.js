// callback
let x = () => {
    console.log("This is X function");
}

let y = (a) => {
    console.log("This is Y function");
    a();  // a as a callback
}


// console.log(x);
y(x);


// nested callback -> callback hell
