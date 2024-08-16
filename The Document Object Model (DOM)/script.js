// document.querySelector("h1").innerHTML = "Good Bye";

// console.log(document.firstElementChild);
// console.log(document.firstElementChild.firstElementChild);
// console.log(document.firstElementChild.lastElementChild);
// //document.firstElementChild.lastElementChild.firstElementChild.innerHTML = "Separated";

// var heading = document.firstElementChild.lastElementChild.firstElementChild;

// heading.innerHTML = "Apart";
// heading.style.color = "red";

// document.querySelector("input").click();

// console.log(document.getElementsByTagName("li"));

// // document.getElementsByTagName() returns an Array

// document.getElementsByTagName("li")[2].style.color = "brown";

// console.log(document.getElementsByTagName("li").length);

// console.log(document.getElementsByClassName("btn"));

// document.getElementsByClassName("btn")[0].style.color = "red";

// console.log(document.getElementById("title"));

// document.getElementById("title").innerHTML = "Good Bye";

// console.log(document.querySelector("#title"));

// console.log(document.querySelector("li a"));

// console.log(document.querySelector("li.item"));

// console.log(document.querySelectorAll("#list .item"));  //It also returns an Array

// document.querySelector("h1").style.fontSize = "10rem";

// document.querySelector("button").style.backgroundColor = "yellow";

// console.log(document.querySelector("button").classList);

// console.log(document.querySelector("button").classList.add("invisible"));   //It adds a new class called invisible for the button tag

// console.log(document.querySelector("button").classList.toggle("invisible"));    //It toggles the current value of the class invisible  

// document.querySelector("h1").classList.add("huge");

// document.getElementById("title").textContent = "Good Bye!";

// document.getElementById("title").innerHTML = "<em>Bye Bye!</em>";

// console.log(document.querySelector("a").attributes);

// console.log(document.querySelector("a").getAttribute("href"));

// console.log(document.querySelector("a").setAttribute("href", "https://www.bing.com"));

//Adding Event Listeners to a button 

// document.querySelector("button").addEventListener("click", onClick);

// function onClick(){
//     alert("I got Clicked");
// }

// // Anonymous Function
// function () {
//     alert("I got Clicked");
// }

// document.querySelector("button").addEventListener("click", function () {
//     alert("I got Clicked");
// });

// Using loop
// for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
//      document.querySelectorAll(".drum")[0].addEventListener("click",function () {
//    alert("I got Clicked");
// }); 
// }
//

//Higher Order Functions

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2
}

function claculator(num1, num2, operator) {
    return operator(num1, num2);
}

console.log(claculator(4,5,add));
console.log(claculator(4,5,multiply));

//Adding Audio in Javascript

var audio = new Audio('audio_file.mp3');
audio.play();

//Objects in Javascript

var houseKeeper1 = {
    yearOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

// Constructor Function

function bellBoy(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

var bellboy1 = new bellBoy("Timmy", 19, true, ["French", "English"]);

//Switch statements in Javascript
var input = 1;

switch(input) {
    case "0":
        console.log("Case 0");
    break;

    case "1":
        console.log("Case 1");
    break;

    default: console.log("Neither 0 not 1");
}

// Function associated with Object

var bellBoy2 = {
    name: "Timmy",
    age: "19",
    hasWorkPermit: true,
    languages: ["French", "English"],
    moveSuitcase: function() {
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}
//Accessing
bellBoy2.name;
bellBoy2.moveSuitcase();

//Constructor Function

function Audio (fileLocation) {
    this.fileLocation = fileLocation;
    this.play = function () {
        //Tap into the audio hardware
        //Check the file at fileLocation exists
        //Check the file at fileLocation is a sound file
        //Play the file at fileLocation
    }
}

//Using keyboard Event Listene to check for key presses

// addEventListener("keypress", function() {
//     alert("key was pressed");
// });


//Down is the example of a 
// 1) In Javascript, function can be passed as parameter
// 2) Function as callback function(it include things that we get back after the event has happened)
// addEventListener is also a higher order function
// document.addEventListener("keypress", function() {
//     alert("key was pressed");
// });

// respondToKey function is a callback function
document.addEventListener("keypress", respondToKey(event)); 
function respondToKey(event) {
    alert("key was pressed");
};




