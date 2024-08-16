
/* For Pop-Up */
//alert("Hello World!");

/* Input Pop-Up */
//prompt("What is your name?");

var myName = "Jack";
alert(myName);

var yourName = prompt("What is your name?")
alert("My name is " + myName + ", Welcome to my course " + yourName + "!");

/* Camel Case naming convention
    var myName = Jack;
*/
/* String Concatenation
    alert("hello" + " world");
    alert("hello" + " " + "world");
    
    var message = "Hello";
    var name = "Angela";
    alert(message + " there, " + name);
*/
alert(yourName.length);

var tweet = prompt("Compose your Tweet:");
alert("You have written " + tweetCount + " characters, you have " + (140 - tweet.length) + " characters remaining.")



//Slicing Strings
var name = "Ankit"
alert(name.slice(0,4))

alert(name.toUpperCase());
alert(name.toLowerCase());

//Addition Operator
var a = 2 + 3;

//Subtraction Operator
var b = 10 - 2;

//Multiplication Operator
var c = 3*3;

//Division Operator
var d = 6/2;

//Modulo Operator
var e = 9%6;

//Expression Operator
var cost = (3+5)*2;

//Increment Operator
var x = 5;
x++; //6
x += 2; //8     x=x+2

//Decrement Operator
var y = 5;
y--; //4
y -= 2 //2      y=y-2

//Function
function getMilk(){
    console.log("Leave House");
    console.log("move left");
    console.log("move right");
    console.log("move left");
}

getMilk();

// Function with Parameters & Arguments

function getMilk2(bottles){
    console.log("Leave House");
    console.log("move left");
    console.log("move right");
    console.log("move left");
    console.log("Buy " + bottles + " Bottles of Milk");
    console.log("move right");
    console.log("move left");
    console.log("move right");
    console.log("Enter House");
}

getMilk2(3);

//Function with Output & return values

function getMilk3(money){
    return money % 1.5;
}

var change = getMilk3(4);

//Random Number Generation(For a Dice)

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n)


// Conditional Statements

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;  //1-100

if(loveScore > 100){
    alert("Your love score is " + loveScore + "%!" + ", You love each other like Kanye loves Kanye.");
} else {
    alert("Your love score is " + loveScore + "%");
} 

/*
    Comparators

    === Is equal to
    !== Is not equal to
    >   Is greater than
    <   Is Lesser than 
    >=  Is greater than or equal to
    <=  Is lesser than or equal to

    ==  Equality operator doesn't care about the data type but only the value
    === Equality operator also checks for the data type of the two

    Combining Comparators

    &&  AND
    ||  OR
    !   NOT


*/

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;  //1-100

if(loveScore > 70){
    alert("Your love score is " + loveScore + "%!" + ", You love each other like Kanye loves Kanye.");
}
else if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%");
}
else {
    alert("Your love score is " + loveScore + "%" + ", You go together like oil and water.");
} 

// Arrays in Javascript

let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(guestList);
console.log(guestList[0]);
console.log(guestList.length);
console.log(guestList.includes("Angela"));
console.log(guestList.includes("Rohit"));

// Adding Elements in Array

let output = [];
output.push(1);
console.log(output);
output.push(2);
console.log(output);

// Removing Elements from an Array

output.pop();
console.log(output);

output = [];
var count = 1;

function fizzBuzz() {
    output.push(count);
    console.log(output);
    count++;
    output.push(count);
    console.log(output);
}

fizzBuzz();
fizzBuzz();

//  Loops
//  While Loop
var i = 1;

while (i < 2) {
    console.log(i);
    i++;
}

// For Loop

for(var i = 1; i < 6; i++ ){
    console.log(i);
}

// Fibonacci Series

function fibonacciGenerator (n) {

    var output = [];
    if(n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }
    else {
        output = [0,1];

        for(var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }

    return output;
}

output = fibonacciGenerator(18);
console.log(output);


