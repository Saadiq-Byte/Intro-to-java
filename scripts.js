let myname = "Sodiq"
let height = 6.1
let country = "Lagos, Nigeria"

function printer() {
    document.getElementById("paragraph").innerHTML = "Hello!👋 My name is " + myname + ". I am " + height + " feet tall, and I live in " + country + ". 🌍";
}

function alerting() {
    alert("Hi there!😀 \nMy name is " + myname + ". \nI am " + height + " feet toll, and \nI live in " + country + ". 🌍");
}

function consoling() {
    document.getElementById("details").innerHTML = "In this case, you should display console to see it";

    console.log("Welcome to the console! \nThese are my data: \nName: " + myname + ". \nHeight: " + height + ". \nCountry: " + country);
    

}

function resetting() {
    console.clear();
    document.getElementById("paragraph").innerHTML = "";
    document.getElementById("details").innerHTML = "";
}