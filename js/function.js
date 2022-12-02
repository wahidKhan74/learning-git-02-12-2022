// function : reusable block of code

//1. Non parametrised function  :: Function decleration

function showMessage() {
    let message = "Welcome to javascript.";
    console.log(message);
}
showMessage();

//2. Parametrised function
function showData(data) {
    console.log("Hi,Today is a 'Greate' day.");
    console.log(data);
}
showData("Hello");

//3. Multi parametrised function
function fetchUser(name,age,gender) {
    console.log(`The user ${name} and its age ${age} and gender ${gender}`);
}
fetchUser();
fetchUser("John",50, 'male');


// 4. Default Prametrised function
function getInfo(username="user", phone="101010101010", email="user@gmail.com") {
    console.log(`The user : ${username} 
    and its phone number : ${phone} 
    and email : ${email}`);
}

getInfo();
getInfo('John');
getInfo('John',98989898989,'john@gmail.com');