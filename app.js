
//Chapter 1=============================================================
// Q 1
/*alert("Hello Visitor Welcome to my Awesome website");

// Q 2
alert("Error! Please enter a valid password");

// Q 3
alert("Welcome to JS land...\nHappy Coding");

// Q 4
alert("Welcome to JS land...");
alert("Happy Coding");

// Q 5
console.log("Hello... I can run JS through my web browser's console");

// Chapter 2===============================================================

// Q 1
var username;
// Q 2
var myName = "Ravi Shankar";
// Q 3
var message;
message = "Hello World";
alert(message);
// Q 4
var studentName = "John Doe";
var studentDOB = 15;
var courseName = "Cetified Mobile Application Development";
alert(studentName);
alert(studentDOB + " years old");
alert(courseName);

// Q 5
var food = "PIZZA \nPIZZ\nPIZ\nPI\nP";
alert(food);
// Q 6
var email;
email = "ravishankar.malhi1@gmail.com";
alert("My email address is " + email);


// Q 7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// Q 8
document.write("Yah! I can write HTML content through JavaScript");
*/
// Chapter 3 =========================================================
// Q 1
/*var age;
age = 24;
alert("I am " + age + " years old.");

// Q 2
var noOfVisits = 14;
alert("You have visited this site " + noOfVisits + " times.");

// Q 3
var birthYear = 1997;
document.write("My birth year is " + birthYear + "<br/>");
document.write("Data type of my declared variable is number");
*/
// Q 4
/*var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 7;
var message = "<b>" + visitorName + "</b>" + " ordered " + " <b>" + quantity + " " + productTitle + "</b>" + " on XYZ Clothing store.";
document.write("<br/>" + message);*/

// Chapter 4 ====================================================================
// Q 1
/*var variable1, variable2, variable3;

// Q 2
var name, age, dateOfBirth, salary, address; //Legal variables
var .alert, 2things, my--name, product cost, m / yData; //Illegal variables   */

// Q 3
/*var a = "<h1>Rules for naming JS variables</h1>";
var b = "Variable names can only contain , numbers, $ and _ . For example : $my_1stVariable";
var c = "Variables must begin with a letter, $ or _. For example $name, _name or name";
var d = "Variable names are case sensitive";
var e = " Variable names should not be JS Keywords";
document.write(a + "<br>");
document.write(b + "<br>");
document.write(c + "<br>");
document.write(d + "<br>");
document.write(e + "<br>");

// Chapter 5 =============================================================
var num1 = (+prompt("Enter first operand"));
var num2 = (+prompt("Enter second operand"));
var ans = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + ans);
*/

// Q 2
/*var num1 = (+prompt("Enter first operand"));
var num2 = (+prompt("Enter second operand"));
document.write("subraction of " + num1 + " and " + num2 + " is " + (num1 - num2) + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + num1 * num2 + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + num1 / num2 + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + num1 % num2 + "<br>");*/



// Q 3
/*var num;
document.write("Value after variable declaration is:" + num + "<br>");
num = 5;
document.write("Initial value:" + num + "<br>");
num++;
document.write("Value after increment is :" + num + "<br>");
num += 7;
document.write("Value after addition is :" + num + "<br>");
num--;
document.write("Value after decrement is :" + num + "<br>");
var remainder = num % 3;
document.write("The remainder is :" + remainder + "<br>");
*/


// Q 4
/*var ticketPrice = 600;
var noTickets = 5;
var totalCost = ticketPrice * noTickets;
var message = "Total cost to buy " + noTickets + " tickets to a movie is " + totalCost + " PKR";
document.write(message);
*/
// Q 5
/*var table = 4;
for (var i = 1; i <= 10; i++) {
    document.write(table + " x " + i + " = " + table * i + "<br>");
}*/

// Q 8
/*var totalMarks = 980;
var obtainMarks = 804;
var per = (obtainMarks / totalMarks) * 100;
document.write("Total marks:" + totalMarks + "<br>");
document.write("Marks Obtained:" + obtainMarks + "<br>");
document.write("Percentage:" + per + "%<br>");
*/
// Q 9
/*var dollar = 10;
var saudiRiyals = 25;
var totalInPKR = (dollar * 167.80) + (saudiRiyals * 44.25);
document.write("<h1>Currency in PKR</h1><br>");
document.write("Total Currecny in PKR:", totalInPKR);
*/

// Q 10
/*var number = 2;
number = ((number + 5) * 10) / 2;
document.write("After Arithmetic operations the value is " + number);*/

// Q 11
/*var currentYear = 2020;
var birthYear = 1997;
var age = currentYear - birthYear;
document.write("Current Year:" + currentYear + "<br>");
document.write("Birth Year:" + birthYear + "<br>");
document.write("Your age is :" + age + "<br>");
*/
// Q 12
/*var radius = 20;
var circum = 2 * 3.142 * radius;
var area = 3.14 * radius * radius;
document.write("Raduis of a circle is :" + radius + "<br>");
document.write("The circumference is :" + circum + "<br>");
document.write("The area is :" + area + "<br>");*/

// Q 13
/*var favSnack = "Choclate Chip";
var currentAge = 18;
var maxAge = 60;
var perDay = 3;
var total = (maxAge - currentAge) * perDay;
document.write("<h1>The Lifetime is Calculator</h1><br>");
document.write("Favourite Snack :" + favSnack + "<br>");
document.write("Current Age :" + currentAge + "<br>");
document.write("Estimated Maximun age :" + maxAge + "<br>");
document.write("Amount of snacks per day :" + perDay + "<br>");
document.write("You will need " + total + " " + favSnack + " to last you until the ripe old age of " + maxAge + "<br>");
*/
// Chapters 6-9 =======================================================================================

// Q 2
/*var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("a is :" + a + "<br>");
document.write("b is :" + b + "<br>");
document.write("Result is :" + result);
*/
// Q 3
/*var name = prompt("Enter your name");
alert("Hello! " + name + " It's coding time");
*/
// Q 5
/*var tableNumber = (+prompt("Enter a number to print the table"));
if (tableNumber != "") {
    for (var i = 1; i <= 10; i++) {
        document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>");
    }
}
else {
    tableNumber = 5;
    for (var i = 1; i <= 10; i++) {
        document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>");
    }

}
*/


// Q 6
/*var subj1Name = prompt("Enter the name of subject 1:");
var subj2Name = prompt("Enter the name of subject 2:");
var subj3Name = prompt("Enter the name of subject 3:");
var totalMarksOfEachSubject = 100;
var subj1Marks = (+prompt("Enter the marks of subject 1:"));
var subj2Marks = (+prompt("Enter the marks of subject 2:"));
var subj3Marks = (+prompt("Enter the marks of subject 3:"));
var totalObtainMarks = subj1Marks + subj2Marks + subj3Marks;
var percentage = (totalObtainMarks / (totalMarksOfEachSubject * 3)) * 100;
document.write("<table border='1'>");
document.write("<tr>");
document.write("<th> Subject </th>");
document.write("<th> Total Marks </th>");
document.write("<th> Obtained Marks </th>");
document.write("<th> Percentage </th>");
document.write("</tr>");
document.write("<tr>");
document.write("<td> " + subj1Name + " </td>");
document.write("<td> " + totalMarksOfEachSubject + " </td>");
document.write("<td>" + subj1Marks + "</td>");
document.write("<td> " + subj1Marks + "%" + " </td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td> " + subj2Name + " </td>");
document.write("<td> " + totalMarksOfEachSubject + " </td>");
document.write("<td>" + subj2Marks + "</td>");
document.write("<td> " + subj2Marks + "%" + " </td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td> " + subj3Name + " </td>");
document.write("<td> " + totalMarksOfEachSubject + " </td>");
document.write("<td>" + subj3Marks + "</td>");
document.write("<td> " + subj3Marks + "%" + " </td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td> </td>");
document.write("<td> " + (totalMarksOfEachSubject * 3) + " </td>");
document.write("<td>" + totalObtainMarks + "</td>");
document.write("<td> " + percentage + "%" + " </td>");
document.write("</tr>");
document.write("</table>");
*/
// Chapters 9-11 ********************************************
// Q 1
/*var city = prompt("Enter your city:");
if (city === "phullahdyoon") {
    document.write("Welcome to city of bed light");
}


// Q 2
var gender = prompt("Enter your gender:");
if (gender === "Male") {
    document.write("Good Morning Sir");
}
else {
    document.write("Good Morning Ma'am");
}

// Q 3
var signalColor = prompt("Enter the color of the signal");
if (signalColor === "Red") {
    document.write("Must Stop");
}
else if (signalColor === "Yellow") {
    document.write("Ready to move");
}
else {
    document.write("Move Now");
}


// Q 4
var fuel = (+prompt("Enter the fuel remaining"));
if (fuel < 0.25) {
    document.write("Please refill the fuel in your car");
}*/




// Q 6

/*var subj1Marks = (+prompt("Enter the marks of subject 1:"));
var subj2Marks = (+prompt("Enter the marks of subject 2:"));
var subj3Marks = (+prompt("Enter the marks of subject 3:"));
var totalMarks = (+prompt("Enter total marks"));
var totalObtainMarks = subj1Marks + subj2Marks + subj3Marks;
var percentage = (totalObtainMarks / totalMarks) * 100;
if (percentage >= 80) {
    document.write("Grade is : A-One" + "<br>");
    document.write("Remarks is : Excellent");
}
else if (percentage >= 70) {
    document.write("Grade is : A" + "<br>");
    document.write("Remarks is : Good");
}
else if (percentage >= 60) {
    document.write("Grade is : B" + "<br>");
    document.write("Remarks is : You need to imporve");
}
else if (percentage < 60) {
    document.write("Grade is : Fail" + "<br>");
    document.write("Remarks is : Sorry");
}
else {
    document.write("Invalid input");
}
*/
// Q 8
/*var number = (+prompt("Enter a number"));
if (number % 3 === 0) {
    document.write(number + " is divisible by 3");
}*/

// Q 9
/*var number = (+prompt("Enter a number"));
if (number % 2 === 0) {
    document.write(number + " is even number ");
}
else {
    document.write(number + " is odd number ");
}*/


// Q 10
/*var temp = (+prompt("Enter the temperature"));
if (temp > 40) {
    document.write("It is too hot outside");
}
else if (temp > 30) {
    document.write("The weather today is Normal");
}
else if (temp > 20) {
    document.write("Today's weather is cool");
}
else {
    document.write("OMG! Today’s weather is so Cool.");
}

*/
// Chapters 12-13 ======================================================================
// Q 1
/*var character = prompt("Enter a character");
document.write(character);
if (isNaN(character)) {
    if (character === character.toUpperCase()) {
        document.write("given input is an upper case character");
    }
    else {
        document.write("given input is an lower case character");
    }
    
}
else {
    document.write("The given input is a number")
}
*/
// Q 2
/*var num1 = (+prompt("Enter first number"));
var num2 = (+prompt("Enter second number"));
if (num1 === num2) {
    document.write("Both numbers are equal");
}
if (num1 < num2) {
    document.write(num2 + " is larger than " + num1);
}

// Q 3
var num = (+prompt("Enter a number"));
if (num < 0) {
    document.write("Number is negative");
}
else if (num > 0) {
    document.write("Number is Positive");
}
else {
    document.write("Number is zero");
}

// Q 4
var alphabet = prompt("Enter a single character");
if (alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "u") {
    document.write(true);
}
else {
    document.write(false);
}
*/

// Q 5
/*var rightPassword = "helloWorld";
var userInput = prompt("Enter the password");
if (userInput == "") {
    document.write("Please enter your password");
}
else if (rightPassword == userInput) {
    document.write("Correct! The password you entered matches the original password");
}
else {
    document.write("Incorrect Password");
}
*/
// Q 6
/*var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

*/
// Q 7
/*var time = (+prompt("Enter time in 24 hour format"));
if (time >= 0000 && time < 1200) {
    document.write("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    document.write("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
    document.write("Good Night");
}
else {
    document.write("Invalid Input");
}*/

// Chapters 14-16 ==================================================================
// Q 1   
/*var studentNames = [];

// Q 2
var studentNames = Array();

// Q 3
var fruits = Array("Apple", "Mango", "Banana", "Strawberry");

// Q 4
var luckyNumbers = Array(6,7,8,9,4,2);
*/
// Q 5
/*var flags = Array(true, false, false, true, false);*/

// Q 6
/*var mixArray = Array(1, 2, "Ali", true, 35, "Mango", 2.11, false);
*/
// Q 7
/*var qualifications = Array("SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M. Phil.", "PhD");
document.write("Qualifications:<br>");
for (var i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");
}
*/
// Q 8
/*var names = Array("Michael", "John", "Toni");
var scores = Array(280, 220, 460);
var totalMarks = 500;
for (var i = 0; i < names.length; i++) {
    document.write("Score of " + names[i] + " is " + scores[i] + ". Percentage:" + (scores[i] / totalMarks * 100) + "%<br>");
}*/

// Question 9
//part a
/*var colorNames = Array("Red", "Green", "Blue");
alert("The color in the array are: " + colorNames);
var userChoice = prompt("Enter the color to insert to the beginning of the array");
colorNames.unshift(userChoice);
alert("Updated array is: " + colorNames);
*/
//part b
/*var userChoice = prompt("Enter the color to insert to the end of the array");
colorNames.push(userChoice);
alert("Updated array is: " + colorNames);
*/
//part c
/*colorNames.unshift("purple");
colorNames.unshift("yellow");
alert("Updated array is: " + colorNames);
*/
//part d
/*colorNames.shift();
alert("Updated array is: " + colorNames);

//part e    
colorNames.pop();
alert("Updated array is: " + colorNames);
*/
//part f
/*var userInput = prompt("Enter the color you want to add");
var index = (+prompt("Enter the index"));
colorNames.splice(index, 0, userInput);*/

//part g
/*var index = (+prompt("In which index you want to delete colors?"));
var noColors = (+prompt("How many colors you want to delete?"));
colorNames.splice(index, noColors);
*/

// Q 10
/*var studentScores = Array(260, 210, 460, 140);
document.write("Scores of Student: " + studentScores + "<br>");
var sortedScores = studentScores.sort();
document.write("Ordered Scores of Student: " + sortedScores);
*/
// Q 11
/*var cities = Array("Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar");
var seleCities = cities.slice(5,6);
document.write("Selected cities: " + seleCities);
*/
// Q 12
/*var arr = ["This", "is", "my", "car"];
var sentence = arr.join(" ");
document.write(sentence);*/

// Q 14
/*var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("Out:" + devices.pop() + "<br>");
document.write("Out:" + devices.pop() + "<br>");
document.write("Out:" + devices.pop() + "<br>");
document.write("Out:" + devices.pop());
*/


// Q 15
/*var Brands = Array( "Nokia", "Sony", "Haier","Apple", "Samsung", "Motorola");
document.write("<select>");
for (var i = 0; i < Brands.length; i++) {
    document.write("<option>" + Brands[i] + "</option>");
}
document.write("</select>");
*/
// Chapters 17-20 ================================================================================================
// Q 1   
/*var mutliDimArray = [[], [], [], []];*/

// Q 2
/*var numberArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
*/
// Q 3
/*for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}*/

// Q 4
/*var table = (+prompt("Enter a number to show its multiplication table"));
var Tablelength = (+prompt("Enter table length"));
for (var i = 1; i <= Tablelength; i++) {
    document.write(table + " x " + i + " = " + (table * i) + "<br>");
}*/

// Q 5
/*var fruits = ["mango", "orange", "strawberry","apple", "banana"];
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}*/

// Q 6
/*document.write("Counting<br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>Reverse Counting<br>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>Even<br>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + ", ");
    }
}
document.write("<br>Odd<br>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        document.write(i + ", ");
    }
}
document.write("<br>Series<br>");
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "k, ");
    }
}
*/
// Q 7
/*var items = ["cake","chips", "apple chiken", "mutton"];
var searchItem = prompt("Welcome to royal bakery, What do you want to order sir/ma'am?");
var notFound = false;
for (var i = 0; i < items.length; i++) {
    if (searchItem === items[i]) {
        alert(searchItem + " is available at index " + i + " in our bakery");
        break;
    }
}
*/

// Q 8
/*var arr = [22, 48, 45, 78, 14];
var max = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
document.write("Array: " + arr + "<br>");
document.write("Max Number in array is: " + max);

*/
// Q 9
/*var arr = [22, 48, 45, 78, 14];
var min = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
document.write("Array: " + arr + "<br>");
document.write("Minimum Number in array is: " + min);

*/

// Q 10
/*for (i = 1; i <= 20; i++) {
    document.write((5 * i) + ", ");
}

// chapters 21-25


// Task 1
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    var fullName = firstName+" "+lastName;
    alert("Hello "+ fullName + " Good to see you.")



// Task 2
    var favPhone = prompt("Enter your favourite Phone name and model");
    var lengthStr = favPhone.length;
    document.write("My favourite phone is : " + favPhone + "<br>");
    document.write("Length of string: "+ lengthStr);



// Task 3
    var country = "Pakistani";
    var indexOfn = country.indexOf('n');
    document.write("string: "+ country + "<br>");
    document.write("index of \'n\' is: "+indexOfn);



// Task 4
    var strn = "Hello World";
    var indexOfl = strn.lastIndexOf('l');
    document.write("String: "+ strn + "<br>");
    document.write("Last index of \'l\' is: "+ indexOfl);



// Task 5
    var country = "Pakistani";
    var char = country.charAt(5);
    document.write("String: "+ country + "<br>");
    document.write("Character at index 5 is: "+ char); 




// Task 6
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    var fullName = firstName.concat(" ",lastName);
    alert("Hello "+ fullName + " Good to see you.")



// Task 7
    var city = "Hyderabad";
    var newCity = city.replace("Hyder", "Islam");
    document.write("City: "+city+"<br>");
    document.write("After Replacement: "+newCity)



// Task 8
    var message = "shaheer and ravi are best friends. They play cricket and football together.";
    var newmsg = message.replace(/and/g,"&");
    console.log(newmsg);



// Task 10
    var userInput  = prompt("Enter some lower case sentence");
    document.write("User Input: "+userInput+"<br>");
    userInput = userInput.toUpperCase();
    document.write("Upper Case: "+userInput);


// Task 11
    var userInput  = prompt("Enter sentence in any case");
    document.write("User Input: "+userInput+"<br>");
    userInput = userInput.slice(0,1).toUpperCase() + userInput.slice(1, userInput.length);
    document.write("Title Case: "+userInput);



// Task 12
    var num = 17.36;
    result = num.toString();
    result = result.replace(".","");
    document.write("Number: ", num+"<br>");
    document.write("Result: "+result);



// Task 13
    var userName = prompt("Enter your username");
    for(var i=0; i<userName.length; i++){
        if(userName[i] == "@" || userName[i] == "." || userName[i] == ',' || userName[i] == "!"){
            document.write("Please enter a valid user name");
            break;
        }
    }


// Task 14
    items = ["Mutton", "apple", "pizza", "mango", "chiken"];
    var searchItem = prompt("Enter item name to search").toLowerCase(); 
    var itemFound = false;
    for(var i=0; i<items.length; i++){
        if(searchItem === items[i]){
            document.write(searchItem+" is available at index "+i+" in our bakery");
            itemFound = true;
            break;
        }
    }
    if(!itemFound)
    {
        document.write("Sorry! This item is not available in our bakery");
    }
// Task 15


    var password = prompt("Enter your password");
    if(password.length < 6){
        document.write("password must be at least 6 characters long <br>");
    }
    if(!isNaN(password[0]*2))
    {
        document.write("password should not start with a number <br>");
    }
    if(!(password.match(/[A-Z]+/) || (password.match(/[A-Z]+/)))){
        document.write("Password should contain Alphabets and Numbers <br>");
    }
// Task 16



    var university = "University of iqra";
    var list = university.split("");
    for(var i=0; i<university.length; i++){
        document.write(list[i] + "<br>")
    }
// Task 17



    var userInput = prompt("Enter any string");
    var lastChar = userInput.charAt(userInput.length-1);
    document.write("User Input: "+userInput+"<br>");
    document.write("Last character of input: "+lastChar);

// Chapter 26-30 
// Task 1



    var num = (+prompt("Enter any floating point positive number"));
    var roundNum = Math.round(num);
    var floorNum = Math.floor(num);
    var ceilNum = Math.ceil(num);
    document.write("number: "+num+"<br>");
    document.writeln("round off value: "+ roundNum+"<br>");
    document.writeln("floor value: "+ floorNum+"<br>");
    document.writeln("ceil value: "+ ceilNum+"<br>");
// Task 2




    var num = (+prompt("Enter any floating point negative number"));
    var roundNum = Math.round(num);
    var floorNum = Math.floor(num);
    var ceilNum = Math.ceil(num);
    document.write("number: "+num+"<br>");
    document.writeln("round off value: "+ roundNum+"<br>");
    document.writeln("floor value: "+ floorNum+"<br>");
    document.writeln("ceil value: "+ ceilNum+"<br>");
// Task 3


    var num = -6;
    var NUm = Math.hello(num);
    document.write("The absolute value of "+num+" is "+NUm);
// Task 4



    var random = Math.ceil(Math.random() * 6);
    document.write("Random dice value is: "+ random);
// Task 5


    var random = Math.ceil(Math.random() * 2);
    if(random === 2){
        document.write("Radom Coin value: Heads");
    }else{
        document.write("Radom Coin value: Tails ");
    }
// Task 6



    var randomNum = Math.ceil(Math.random() * 100);
    document.writeln("Random Number between 1 and 100: "+ randomNum);
// Task 7



    var weight = prompt("Enter your weight in kilograms");
    weight = parseInt(weight);
    document.writeln("The weight of user is "+weight+" Kilograms");


// Task 8


    var secretNum = Math.ceil(Math.random() * 10);
    var userGuess = (+prompt("Input a number between 1 and 10: "));
    if(userGuess === secretNum){
        document.writeln("Congratulations! you win");
    }else{
        document.writeln("Try again");
    }

// Chapter 31-34
// Task 1


    var currentDateAndTime = new Date();
    document.writeln(currentDateAndTime);

// Task 3



    var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thuraday", "Friday", "Saturday"];
    var DateAndTime = new Date();
    var currentDay = DateAndTime.getDay();
    document.write("Today is: "+ days[currentDay]);


// Task 4



    var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thuraday", "Friday", "Saturday"];
    var DateAndTime = new Date();
    var currentDay = DateAndTime.getDay();
    if(days[currentDay] === "Saturday" || days[currentDay] === "Sunday" ){
        document.write("It's fun day");
    }else{
        document.write("It's normal day");
    }

// Task 5

    var DateAndTime = new Date();
    var currentDate = DateAndTime.getDate();
    if(currentDate < 16){
        document.write("First fifteen days of the month");
    }else{
        document.write("Last days of the month");
    }

// Task 6\

    var DateAndTime = new Date();
    var oldDate = new Date("Jan 1, 1970");
    var diffInMilliSec = DateAndTime.getTime()-oldDate.getTime();
    var elapsedMins = diffInMilliSec/(1000*60*60);
    document.write("Current Date: "+DateAndTime+"<br>");
    document.write("Elapsed milli seconds since Jan 1, 1970: "+diffInMilliSec+"<br>");
    document.write("Elapsed minutes since Jan 1, 1970: "+elapsedMins);

// Task 7

    var DateAndTime = new Date();
    var hour = DateAndTime.getHours();
    if(hour > 12){
        alert("It's PM");
    }else{
        alert("It's AM");
    }
// Task 8
    var laterDate = new Date("Dec 31, 2020");
    document.write("Last day of this year: "+ laterDate);
// Task 9
    var firstRamadan = new Date("June 18, 2015");
    var DateAndTime = new Date();
    var diff =DateAndTime.getTime()-firstRamadan.getTime();
    var days = Math.floor(diff/(1000*60*60*24));
    document.write(days+" days have passed since 1st Ramadan, 2015");

// Task 10

    var beginning = new Date("Jan 1, 2015");
    var refrenceDate = new Date("Dec 5, 2015");
    var elapsedSec = (refrenceDate.getTime()-beginning.getTime())/(1000*60);
    document.write("on reference date: "+refrenceDate+"<br>");
    document.write(elapsedSec+" seconds has passed since beginning of 2015");

// Task 11

    var DateAndTime = new Date();
    document.write("Current date: "+ DateAndTime+"<br>");
    DateAndTime.setHours(DateAndTime.getHours()-1);
    document.write("One hour ago it was: "+ DateAndTime);

// Task 12

    var DateAndTime = new Date();
    document.write("Current date: "+ DateAndTime+"<br>");
    DateAndTime.setFullYear((DateAndTime.getFullYear()-100));
    document.write("100 years back it was: "+ DateAndTime);

    // Task 13

    var userAge = (+prompt("Enter your age"));
    var DateAndTime = new Date();
    var birthYear = DateAndTime.getFullYear() - userAge;
    document.write("Your age is: "+ userAge+"<br>");
    document.write("Your birth year is: "+birthYear);


// Chapter 35-38
// Task 1
    function showCurrentDateAndTime(){
        alert(new Date());
    }
    showCurrentDateAndTime();
// Task 2
    function greetUser(firstName, lastName){
        alert("Hello! "+ firstName + " " + lastName);
    }
    greetUser("M.Shaheer","khan");
// Task 3
    function addNums(){
        var num1 = (+prompt("Enter first Number"));
        var num2 = (+prompt("Enter second Number"));
        return num1+num2;
    }
    document.write(addNums());
// Task 4
    function calculator(num1, num2, operator){
        if(operator == "+"){
            document.write(num1+" "+operator+" "+num2+" = "+(num1+num2));
        }else if(operator == "-"){
            document.write(num1+" "+operator+" "+num2+" = "+(num1-num2));
        }else if(operator == "*"){
            document.write(num1+" "+operator+" "+num2+" = "+(num1*num2));
        }else if (operator == "/"){
            document.write(num1+" "+operator+" "+num2+" = "+(num1/num2));
        }else{
            document.writeln("Invalid Input");
        }
    }
    calculator(4,2,'*');
// Task 5
    function square(num){
        return num*num;
    }
    document.write(square(3));
// Task 6
    function factorial(num){
        var result = 1;
        for(var i=num; i>=1; i--){
            result = result*i;
        }
        return result;
    }
    document.write(factorial(5));
// Task 7
    function printCounting(){
        var start = (+prompt("Enter start Number"));
        var end = (+prompt("Enter end Number"));
        for(var i=start; i<=end; i++){
            document.write(i + "<br>");
        }
    }
    printCounting();
// Task 8
    function calculateHypotenuse(base, perp){
        function calculateSquare(num){
            return num*num;
        }
        var hyp = calculateSquare(base) * calculateSquare(perp);
        return hyp;
    }
    document.write("Hypotenuse of triangle is: "+ calculateHypotenuse(2,3));
// Task 9
    function areaOfRectangle(width, height){
        var area = width * height;
        document.write("Area of the rectangle is: "+ area+"<br>");
    }
    areaOfRectangle(2,4);
    var w = 5;
    var h = 10;
    areaOfRectangle(w,h);
// Task 10
    function checkPalandrome(string){
        reverseOfString = "";
        for(var i=string.length-1; i>=0; i--){
            reverseOfString = reverseOfString + string[i];
        } 
        if(reverseOfString === string){
            document.write(string + " is palandrome");
        }else{
            document.write(string+ " is not palandrome");
        }
    }
    checkPalandrome("1212");
// Task 11
    function toSenetenceCase(str){
        var wordList = str.split(" ");
        for(var i=0; i<wordList.length; i++){
            wordList[i] = wordList[i].charAt(0).toUpperCase()+wordList[i].slice(1,);
        }
        return wordList.join(" ");
    }
    var sampleString = "the quick brown fox";
    document.write(toSenetenceCase(sampleString));
// Task 12
    function findLongestWord(str){
        var wordList = str.split(" ");
        var maxLengthWord = wordList[0];
        for(var i=1; i<wordList.length; i++){
            if(wordList[i].length > maxLengthWord.length){
                maxLengthWord = wordList[i];
            }
        }
        return maxLengthWord;
    }
    document.write(findLongestWord("Web Development Tutorial"));
// Task 13
    function countOccurence(str, letter){
        var count = 0;
        for(var i=0; i<str.length; i++){
            // document.write(str[i]);
            if(str[i] === letter){
                count++;
            }
        }
        return count;
    }
    document.write(countOccurence("JSResourceS.com", "o"));
// Task 14
    function calcCircumference(radius){
        var circum = 2*3.14*radius;
        return circum;
    }
    function calcArea(radius){
        var area = 3.14*radius*radius;
        return area;
    }
    document.write("Circumference is: "+calcCircumference(6)+"<br>");
    document.write("Area is: "+calcArea(2.5));


*///38-42 Question 1
//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

/*function power(a, b){
         var result = 1;
        for(var i=1; i<=b; i++){
            result = result*a; 
        }
        return result;
    }
    var pow = power(5,3);
    document.write("result is: ", pow);*/

    //Question 2
/*
   function leap_year(year){
        if((year % 4 == 0) && (year % 100 != 0)){
            document.write(year+" this is leap year.");
        }else if(year % 400 == 0){
            document.write(year+" this is leap year.");
        }else{
            document.write(year+" this is not leap year.");
        }
    }
    var year = (+prompt("Enter year leap year or not"));
    leap_year(year);*/

    //Question 3
  /*  function test_funcation(a,b,c){
         return ((a+b+c)/2)
    }
    function area_of_triangle(a,b,c){
        var S = test_funcation(a,b,c);
        var area = S*((S-a)*(S-b)*(S-c));
        return area;
    }
    var area = area_of_triangle(3,4,5);
    document.write("result of area: "+ area);*/

    //Question 4
    /*function calculate_per(sub1, sub2, sub3){
        var total_marks = 300;//for supose
        var total_obtain = sub1+sub2+sub3;
        var percentage = ((total_obtain/total_marks)*100).toFixed(2);
        return percentage+"%";
    }
    function calculate_avg(sub1, sub2, sub3){
        var average = ((sub1+sub2+sub3)/3).toFixed(2);
        return average;
    }
    function mainFunction(subj1, subj2, subj3){
        var per = calculate_per(subj1, subj2, subj3);
        var avg = calculate_avg(subj1, subj2, subj3);
        document.write("Average of your marks is: "+avg+" ");
        document.write("Your percentage is: "+per);
    }
    mainFunction(60,56,90);*/

    //Question 5
   /* var name = "Ravi shankar"
    function find_char(string, char){

    	for (var i = 1; i<string.length ; i++) {
    		if (string[i]==char) {
    			return i;
    			break;
    		}
    	}
    }
    var index =  find_char(name, "s");
    document.write(index);*/

    //Question 6 
 
 /*var massage = " i have a car";
    function delete_vowels(msg){
        msg = msg.replace(/[aeiou]/g, '');
        return msg
    }
    var updated_msg = delete_vowels(massage);
    document.write("Original Sentence: "+massage+"<br>");
    document.write("After replacing Vowels: "+updated_msg);    
*/
// Question 7 
/*function vowels(msg){
        var count = 0;
        var vowels = ['a','e','i','o','u'];
        document.write("two vowels are: ");
          for(var i=0; i<msg.length;i++){
              if(vowels.includes(msg[i]) && vowels.includes(msg[i+1]))
              {
                  document.write(msg[i]+msg[i+1]+",");
                  count++;
              }
          }
          document.write("Counts is: "+count +"<br>");  
    }
    vowels("read this application and give me feedback");*/
    //Question 8
    /*function convert_into_meters(distance){
        var meters  = distance*1000;
        return meters;
    }
    function convert_into_feet(distance){
        var feet = distance*3280.84;
        return feet;
    }
    function convert_into_inches(distance){
        var inches = distance*39370.1;
        return inches;
    }
    function convert_into_centimeters(distance){
        var cent = distance*100000;
        return cent;
    }
    var distance = (+prompt("Enter distance in km.."))
    var meter = convert_into_meters(distance);
    var feet = convert_into_feet(distance);
    var inches = convert_into_inches(distance);
    var centimeters = convert_into_centimeters(distance);
    document.write(distance+" km = "+ meter +" meters <br>");
    document.write(distance+" km = "+ feet +" feet <br>");
    document.write(distance+" km = "+ inches +" inches <br>");
    document.write(distance+" km = "+ centimeters +" centimeters <br>");
*/
//Question 9
/*function overtime(hours){
        var overtime = 12;
        var amount; 
        if(hours > 40){
            amount = hours*overtime;
        }
        return amount;
    } 
    var no_of_hours = (+prompt("Enter how many hours you worked"));
    document.write("Your overtime amount is: "+overtime(no_of_hours));*/
    //Question 10
     /*var amount = (+prompt("Enter the amount to withdrow"));
     var hundred = Math.floor(amount/100);
     var fifty = Math.floor((amount % 100)/50);
     var ten = Math.floor((((amount % 100) % 50) / 10));
     var remaining = Math.floor((((amount % 100) % 50) % 10));
     document.write("You will have "+ hundred +" hundred notes "+fifty +" fifty notes and "+ten+" ten notes <br>");
     document.write("Your remaining amount is: "+ remaining);*/

// Chapter 43-48
// Question 1

//<a href="javascript:void(0)" onclick="alert('you click on a link')">click me</a>\

//Question 2 
/*function alert_msg(){
	alert("Thanks for purchasing a phone from us");
}*/

//Question 3
/*function deleteRow(btn){
      var row = btn.parentNode.parentNode;
      console.log(row.parentNode);
      row.parentNode.removeChild(row);
}*/
//Question 4
 /*function change_image(image_name){
        document.getElementById("image").src = "images/"+image_name;
    }*/
 //Question 5

   /* function increment(textBoxId) {
        var textBox = document.getElementById(textBoxId);
        var textBoxValue = Number(textBox.value);
        textBoxValue++;
        textBox.value = textBoxValue;
    }
    function decrement(textBoxId) {
        var textBox = document.getElementById(textBoxId);
        var textBoxValue = Number(textBox.value);
        if (textBoxValue != 1) {
            textBoxValue--;
        }
        textBox.value = textBoxValue;
    }
*/
// Chapter 49-52
    // Question 1
    /*
        function display_form(){
            document.write("Your data in form<br>");
            var name_field = document.getElementById("full_name");
            var pass_field = document.getElementById("pass");
            var cnic_field = document.getElementById("cnic");
            var city_field = document.getElementById("city");
            document.write(name_field.value +"<br>");
            document.write(pass_field.value +"<br>");
            document.write(cnic_field.value +"<br>");
            document.write(city_field.value +"<br>");
        }*/

        //Question 2

   /* function more_detail(){
        var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, rerum cupiditate. Nesciunt debitis hic temporibus quis molestias eius porro dicta? Magnam quos nesciunt est, aspernatur ullam libero placeat quia alias?";
        document.getElementById("content_para").innerHTML = text;
    }*/

    // Chapter 58-67
// Question 1
// part i
     /*   var my_content = document.getElementById("form-content");
    // part ii
        var my_content = document.getElementById("form-content");
        var child_elements = my_content.childNodes;
        for(var i=0; i<child_elements.length; i++){
            console.log(child_elements[i]);
        }
    // part iii
        var all_elements = document.getElementsByClassName("render");
        for(var i=0; i<all_elements.length; i++){
            console.log(all_elements[i].innerHTML);
        }
    // part iv
        var firstname_input_field = document.getElementById("first-name");
        firstname_input_field.value = "Ravi";
    // part v
        var lastname_input_field = document.getElementById("last-name");
        var email_input_field = document.getElementById("email");
        lastname_input_field.value = "Shanakr";
        email_input_field.value= "ravishankar.malhi1@gmail.com";
//Question 2
   // part i
        var element = document.getElementById("form-content");
        var node_type = element.nodeType;
        console.log(node_type); 
   // part ii
        var element = document.getElementById("lastName");
        var node_type = element.nodeType;
        var child_node = element.childNodes
        console.log(node_type)
        console.log(child_node[0])
  //  part iii
        var element = document.getElementById("lastName");
        element.innerHTML = "Last Name: malhi";
  //  part iv
        var element = document.getElementById("main-content");
        var first_child = element.firstChild;
        var last_child = element.lastChild;
        console.log(first_child);
        console.log(last_child);
 