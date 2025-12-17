// name = "yash";
// console.log("name is " + name );
// isFollow = false;
// console.log("is follow ? = " + isfollow);


// const student ={
//     fullName : "yash",
//     rollNo : 101,
//     isPass : true,
//     marks :[10,20,30,40,50],
//     age : 20,
// };
// student["age"] = student["age"] + student["rollNo"];

// const product = {
//     nameOfPen : "ball pen",
//     rating : 4,
//     isDeal : true,
//     discount : 10,
//     price : 250,
// };

// // console.log(product);

// // product["isDeal"] = false;

// // console.log(product.isDeal);

// const profile = {
//     userName : "yash_pokiya",
//     followers : 450,
//     following : 400,
//     isFollow : true,
//     isAnotherPlatform : true,
//     bio : "I Love Nature",
//     isPrivate : false,
// };

// profile.followers = profile.followers + 5;

// profile.isFollow = true;

// console.log(profile.isFollow);

// console.log(typeof profile.userName);

// let a = 5;
// let b = 3;

// console.log("a = ", a , "b = ", b );
// console.log( "a + b = ",a+b );
// console.log("a - b = ",a-b);
// console.log("a * B = ",a*b);
// console.log("a / B = ",a/b);
// console.log("a % B = ",a%b);
// console.log("a ** B = ",a**b);

// let mode = "light";
// let color;

// if(mode === "dark"){
//     color = "black";
// }
// if(mode === "light"){
//     color = "white";
// };

// console.log(color);

// let age = 16;

// if(age >=18){
//     console.log("You Can Vote");
// }else{
//     console.log("You Can't Vote");
// };

// let num = 5;

// if(num % 2 === 0){
//     console.log(num ," is Even");
// }else{
//     console.log(num ," is Odd");
// };

// let age = 28;

// let res = age >=18 ? "vote" : "can't vote"
// console.log(res);
// let i;
// for(i = 1; i <= 100; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//         console.log(i);
//     }
// // }
// let str = "javaScript";
// let size = 0;
// for(let i of str){
//     console.log("val = " , i);
//     size++;
// }
// console.log( "size Of Array", size);

// const student ={
//     fullName : "yash",
//     rollNo : 101,
//     isPass : true,
//     marks :[10,20,30,40,50],
//     age : 20,
// };

// let gameNum = 25;

// let guessNum = prompt("Enter A number :");

// while(gameNum != guessNum){
//     console.log("You Guess Wrong. Enter Another");
//     guessNum = prompt("Try Again...")
// }

// console.log("Yesss... You Guess right...");

// let objPen = {
//     item : "pen",
//     price : 10,
// };

// output = `Item is ${objPen.item} and Price of this is ${objPen.price} Ruepps `;

// console.log(output);

// let str = `yash`;

// let newStr = str.toUpperCase();

// console.log(newStr);
// console.log(str);

// let str = "My name is yash !";

// console.log(`My intro is , ${str} and length is ${str.length}`);

// let str1 = "yash ";
// let str2 = "pokiya";

// // let name = str1.concat(str2);
// // let slice = str1.slice(0,2);
// console.log(str1.replace("y","p"));

// let name = prompt("Enter Your Name :");
// let strLen = name.length;

// console.log(`Your User Name is @${name}${strLen}`);

// let firstName = prompt(`Enter Your First Name`);
// let lastName = prompt(`Enter Your Last Name `);

// let strlen = lastName.length;
// let domain = "@gmail.com"

// let output = `Username is ${firstName}${strlen}${ domain}`;

// console.log(output);

// let ogStr = "yash";
// let revStr = "";

// for(let i = ogStr.length - 1; i>=0 ; i--){
//     revStr += ogStr[i];
// }
// console.log(revStr);

// let arr = [101,"yash","pokiya","sy","bca",90];

// console.log(arr.length);
// console.log(arr[5]);
// for(let i = 0 ; i < 6; i++){
//     console.log(arr[i]);
// }

// let arr2;
// arr2 = arr;

// console.log(10 in arr2);

// let cars = ["FERRARY","BMV","AUDI"]

// let car1 = cars[0];
// let car2 = cars[1];
// let car3 = cars[2];

// console.log(car1);
// console.log(car3);
// cars[0] = "THAR";
// console.log(cars[0]);

// let myArray = [];
// myArray[0] = Date.now();
// console.log(myArray[0]);

// let marks = [97,65,86,60,94,69];
// sum = 0;
// for(let val of marks){
//     sum+=val;
// }
// console.log(sum);
// let avg = sum / marks.length;
// console.log(`Average of Marks of Class is : ${avg}`);

// let items = [100,670,250,800,560];
// let i = 0;
// for(let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`Value of item after offer ${items[i]}`);
//     i++;
// }

// let num = [100,670,250,800,560];

// let largestNum = 0;

// for(i = 0 ; i < num.length ; i++){
//     if(largestNum < num[i]){
//         largestNum = num[i];
//     }
// }
// console.log(`largest number from ${num} is ${largestNum}`);

// let arr = [97,65,86,60,94,69];

// let even = 0;
// let odd = 0;

// for(let i = 0 ; i <= arr.length ; i++){
//     if(arr[i] % 2 === 0 ){
//         even++
//     }else{
//         odd++
//     }
// }
// console.log(`Total even is ${even} and Total Odd is ${odd}`);

// let arr1 = [1,2,1,2,3,4,3,4,3,2,5,5,6,7,7,6];
// let arr2 = [];

// for(let i=0;i<=arr1.length;i++){
//     let found = false;
//     for(let j = 0; j <= arr2.length;j++){
//         if(arr1[i] === arr2[j]){
//             found = true;
//         }
//     }
//     if(!found){
//         arr2[arr2.length] = arr1[i];
//     }
// }

// console.log(arr2);

// let arr = [];
// arr.push("yash");
// arr.push("manthan");
// arr.push("meet"); // add value at last index
// arr.pop(); // delete value from last index
// arr.shift(); //delete index value 0
// arr.unshift("aryan"); //add value at index 0

// console.log(arr)
// console.log(arr.at(2));
// console.log(arr.toString());
// console.log(arr.length);
// console.log(arr.join(" ^ "));

// delete arr[0];
// console.log(arr);

// let arr2 = ["yash","prince"];

// console.log(arr.copyWithin(2,1));

// let combineArr = arr.concat(arr2);
// let arrSplice = combineArr.splice(4 , 2 , "nihil" , "harsh");
// console.log(arrSplice);

// console.log(combineArr);

// arr2d = [[1,2],[3,4],[5,6]];
// console.log(arr2d);

// console.log(arr2d.flat());

// console.log(arr.splice());

// let fruits = ["apple","banana","chiku","pinapple","mango"];

// fruits.push("kiwi");
// fruits.shift("");
// fruits.unshift("jambu");

// console.log(fruits);

// let arr1 = ["red","blue"];
// let arr2 = ["green","yellow"];

// console.log(arr1.concat(arr2));

// let arrLang = ["html","css","js","react"];
// arrLang.splice(2,1);
// console.log(arrLang);

// let objectArr = [
//     {fName : "yash" , lName : "pokiya"},
//     {fName : "manthan" , lName : "savaliya"}
// ];

// let fNameprint = objectArr.map(test);

// function test(fname){
//     return fName;
// }
// let num = add(5,10);

// function add(a,b){
//     let sum = a+b;
//     return sum;
// }

// console.log(num);

// function multi(r) {
//     let radius = 3.14*r*r;
//     return radius;
// }

// let circle = multi(10);

// console.log(circle);

// function evenOdd(a){
//     let even = `${a} is even`;
//     let odd = `${a} is odd`;
//         if(a%2===0){
//         return even;
//          }
//          else{
//             return odd;
//          }
// }
// let input = Number(prompt("Enter a Number :-"));

// let evenOddnum = evenOdd(input);

// console.log(evenOddnum);

// function max(a,b){
//     let aGreat = `${a} is greater than ${b}`;
//     let bGreat = `${b} is greater than ${a}`;
//     if(a>b){
//       return aGreat;
//     }
//     else{
//         return bGreat;
//     }
// }

// let inputA = Number(prompt("Enter A:"));
// let inputB = Number(prompt("Enter B:"));

// let maxNum = max(inputA,inputB);

// console.log(maxNum);

// function print(name){
//     let namePrint = `hello ${name}`;
//     return namePrint;
// }

// let inputName = prompt("Enter your name:");
// let printEnter = print(inputName);
// console.log(printEnter);

// function strRev(str){
//     return str.split("").reverse().join("");
// }
// console.log(strRev("manthan"));

// function strRev(str){
//     let strReturn = "";
//     for(i = str.length-1; i>=0;i--){
//         strReturn += str[i];
//     }
//     return strReturn;
// }
// console.log(strRev("manthan"));

// function palindrome(str){
//     let strRev = "";
//     for(i = str.length-1; i>=0 ; i--){
//         strRev += str[i];
//     }
//     if(strRev === str){
//         return "String Is Palindrome";
//     }
//     else{
//         return "String Is not Palindrome";
//     }
// }

// let string = palindrome("madam");

// console.log(string);

// function sumOfArray(arr){
//     let sum = 0;
//     for(i=0;i<arr.length;i++){
//         sum +=arr[i];
//     }
//     return sum;
// }

// console.log(sumOfArray([1,2,3,4,5,6]));

// arrow functions

// let sumFun = (a,b) => {
//     console.log(a+b);
// }

// function vovels(str){
//     let vovelString = "";
//     for(let i = 0; i<str.length ;i++){
//         if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
//             vovelString += str[i];
//         }
//     }
//     return vovelString;
// }

// let str = "yash pokiya";
// console.log(vovels(str));

// let vovels = (str) => {
//         let vovelString = "";
//     for(let i = 0; i<str.length ;i++){
//         if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
//             vovelString += str[i];
//         }
//     }
//     return vovelString ;
// }
// let str = "yash pokiya";
// console.log(vovels(str));
// let celc = [37.5,45.2,37,25.5];
// let sum = 0;

// arr.forEach(function (multi){
//     arr*2;
//     console.log(multi);
// });

// arr.forEach(function(sumArr,idx){
//     sum +=sumArr;
//     console.log(`sum of index ${idx} value and before index ${idx} value is ${sum}`);
// })

// arrDouble = celc.map(function (temp , idx){
//     return temp*9/5 +32 ;
// })
// console.log(arrDouble);
// arrDouble.forEach(function(arr, idx){
//     console.log(`${idx} : ${arr}`);
// })

// const students = [
//   { name: 'Yash', score: 85 },
//   { name: 'Manthan', score: 92 },
//   { name: 'Alice', score: 78 },
//   { name: 'Bob', score: 64 }
// ];

// studentReport = students.map(function(stud){
//     return stud.name + " " + "scored" + " " + stud.score;
// })

// console.log(studentReport);

// const shoppingCart = [
//   { product: 'Milk', price: 25, quantity: 2 },
//   { product: 'Bread', price: 40, quantity: 1 },
//   { product: 'Eggs', price: 60, quantity: 1 },
//   { product: 'Butter', price: 50, quantity: 2 }
// ];

// let totalCost = 0;

// shoppingTotal = shoppingCart.map(function(cart){
//     totalCost += cart.price * cart.quantity;
//     return totalCost;
// })
// console.log(totalCost);

// const words = ['apple', 'banana', 'cherry', 'date'];

// let upperCase = words.map(function(arraySrtinng){
//   return arraySrtinng.toUpperCase();
// })

// console.log(upperCase);

// let sum = (a,b) => {
//   return a+b;
// }
// console.log(sum(10,20));

// let arr2 = words.map(element => {
//   return element.toUpperCase();
// });

// console.log(arr2);

// let numArr = [1,2,3,4,5,6,7];
// let numSquareArr = [];

// let numSquare = numArr.forEach(num => {
//   numSquareArr.push(num*num);
// })

// console.log(numSquareArr);

// function sum(x){
//   for(let i = 0 ; i<5;i++){
//     if(hira[i] <= 150){
//       hira70 +=1;
//     }
//     if(hira[i] <= 250 && hira[i] > 150){
//       hira130 +=1;
//     }
//     if(hira[i] <= 350 && hira[i] > 250){
//       hira200 +=1;
//     }
//     if(hira[i] <= 350){
//       hira250 +=1;
//     }
//   }
// return hira70 + hira130 + hira200 + hira250;
// }
// hira70 = 0;
// hira130 = 0;
// hira200 = 0;
// hira250 = 0;

// let hira = [];
// for(let j = 0 ;j<5 ; j++){
//   prompt(`enter hira no ${[j]}`);
//   hira.push(j);
// }
// sum(hira);
// console.log(x);
// This function now uses its parameter and has its own internal counters
// function calculateCounts(arr) {
//   let count150 = 0; // Numbers <= 150
//   let count250 = 0; // Numbers > 150 and <= 250
//   let count350 = 0; // Numbers > 250 and <= 350
//   let count350above = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];

//     if (value <= 150) {
//       count150++;
//     } else if (value <= 250 && value >150) { // No need to check > 150 because the first 'if' failed
//       count250++;
//     } else if (value <= 350 && value >250 ) { // No need to check > 250
//       count350++;
//     }else{
//       count350above++;
//     }
//   }

//   // Return an object with the results for clarity
//   return {
//     hira70: count150,
//     hira130: count250,
//     hira200: count350,
//     hira250: count350above
//   };
// }

// // --- Main part of the script ---

// let hira = [];
// for (let j = 0; j < 100; j++) {
//   // 1. Get user input and store it in a variable
//   let userInput = prompt(`Enter hira no ${j + 1}`);

//   // 2. Convert the input to a number and push it to the array
//   hira.push(Number(userInput));
// }

// // 3. Call the function and store its return value in a variable
// let results = calculateCounts(hira);

// // 4. Log the results to the console
// console.log("Input Array:", hira);
// console.log("Counts:", results);
// console.log("Total Count:", results.total);

// let getPerson = () => {
//   let pName = "yash";
//   let age = 18;
//   let city = "surat";

//   return {
//     name : pName,
//     age : age,
//     city : city
//   }
// }

// let pDetail = getPerson();
// console.log(pDetail);

// let math = (a,b) =>{
//   let sum = a+b;
//   let sub = a-b;
//   let multi = a*b;

//   return{
//     total : sum,
//     substraction : sub,
//     multiplication : multi
//   }
// }

// let mathVar = math(10,5);
// console.log(mathVar);

// let convertToMinutes = (hour) => {
//   let hours = hour;
//   let minutes = hour*60;

//   return{
//     totalHours : hours,
//     totalMinutes : minutes
//   }
// }

// let convertMinute = convertToMinutes(30);
// console.log(convertMinute);
// let grade = "";
// let getGrades = (marks,studName) =>{
//   if(marks >= 80){
//     grade = "A";
//   }
//   if(marks >= 70){
//     grade = "B";
//   }
//   if(marks >= 50){
//     grade = "c";
//   }
//   else{
//     grade = "FAIL"
//   }
//   return{
//     marks : marks,
//     name : studName
//   }
// }

// let marks = prompt("Enter a Marks");
// let studName = prompt("Enter a Name of Student");

// let res = getGrades(marks,studName);
// console.log(res);

// let stringDetails = (str) => {
//   let ogStr = str;
//   let length = str.length;
//   let fChar = str.charAt(0);
//   let lchar = str.charAt(str.length-1);

//   return{
//     originalString : ogStr,
//     strLength : length,
//     firstChar : fChar,
//     lastChar : lchar
//   }
// }
// let string = stringDetails("yash");
// console.log(string);

// const words = ['apple', 'banana', 'cherry', 'date'];

// let wordFilter = words.filter(word => word.length > 4);
// console.log(wordFilter);
// let users = [
//   { id: 1, name: "Yash", age: 20 },
//   { id: 2, name: "Manthan", age: 25 },
//   { id: 3, name: "Meet", age: 17 }
// ];
// let adults = users.filter(user => user.age >=18)

// console.log(adults);
// let mixedArray = [0, "hello", false, 42, "", null, "JS"];
// let remove = mixedArray.filter(Boolean);
// console.log(remove);
// let fruits = ["apple", "banana", "grapes", "kiwi", "mango"];

// let fruitsArr = fruits.filter(fruit => fruit.includes("a"));
// console.log(fruitsArr);
// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 800 },
//   { name: "Keyboard", price: 1200 },
//   { name: "Phone", price: 20000 }
// ];
// let productFilter = products.filter(p => p.price >= 5000);
// console.log(productFilter);

// let arr = ["yash", "meet", "yash", "manthan", "meet"];
// let unique = [];

// arr.forEach(item => {
//   if(!unique.includes(item)){
//     unique.push(item);
//   }
// });
// console.log(unique);
// let marks = [95,65,86,95,94,69];
// let greater = marks.reduce((pre,cur) => {
//   return pre > cur ? pre : cur ;
// });
// console.log(greater);

// let check = marks.filter((a) => {
//  return a>90;
// })
// console.log(check);
// let n = prompt("enter a size of array");
// let arr = [];
// for(let i = 1 ; i <= n; i++){
//   arr[i-1] = i;
// }
// let sum = arr.reduce((res , nStep) => {
//   return res +=nStep;
// })
// console.log(`sum of full array is ${sum}`);

// let fact = arr.reduce((res , nStep) => {
//   return res*nStep;
// })

// console.log(fact);
// let arr = [1, 2, 3, 4, 5, 6];
// let arrSquare = arr.map((num) => {
//   return num*num;
// })
// console.log(arrSquare);
// let filteredArr = arrSquare.filter((check) => {
//   return check % 2 == 0;
// })
// console.log(filteredArr);
// let arrName = ["Alice", "Bob", "Charlie"];
// let nameLength = arrName.map((name) => {
//   return name.length;
// })
// console.log(nameLength);
// let countName = nameLength.reduce((start , end) =>{
//   return start+=end;
// })
// console.log(countName);

// let arr = [0, "hello", "", null, 5, undefined, false, "JS"];
// console.log(arr.filter(Boolean));
// let people = [
//   { name: "Ravi", gender: "M" },
//   { name: "Seema", gender: "F" },
//   { name: "Amit", gender: "M" },
//   { name: "Divya", gender: "F" }
// ];
// let females = people.filter(name => name.gender === "F");
// let males = people.filter(name => name.gender === "M");

// let f = females.map(name => name.name);
// let m = males.map(name => name.name);

// let combine = {
//   m : m,
//   f : f
// };
// console.log(combine);

// let combine = {
//   m : people.filter(people => people.gender === "M").map(people => people.name),
//   f : people.filter(people => people.gender === "F").map(people => people.name)
// }

// console.log(combine);
// let people = [
//   { name: "Ravi", city: "Surat" },
//   { name: "Seema", city: "Rajkot" },
//   { name: "Amit", city: "Surat" },
//   { name: "Divya", city: "Baroda" }
// ];

// let combine = {
//   surat : people.filter(p => p.city === "Surat").map(p => p.name),
//   rajkot : people.filter( p => p.city === "Rajkot").map(p => p.name),
//   baroda : people.filter( p => p.city === "Baroda").map(p => p.name),
// }
// console.log(combine);
// let arr = [2, 5, 2, 9, 2, 1];
// let target = 2;
// let store = [];
// let find = arr.forEach((arr , idx) =>{
//   if (arr === target) {
//     store.push(idx);
//   }
// });
// console.log(`${target} at index of all this ${store}`);

// let person = [
//   { name: "Uma", age: 22, email: "uma@mail.com" },
//   { name: "Rohan", age: 30, email: "rohan@mail.com" },
//   { name: "Sita", age: 19, email: "sita@mail.com" }
// ]
// let emailPer = person.filter((per) =>{
//   return per.age >= 21;
// }).map((per) => {
//   return per.email
// })

// let emailPer = person.filter((per) => per.age >= 18).map((per) => per.email);
// console.log(emailPer);

// for (const name of person) {
//   ageMulti = name.age-2;
//   console.log(ageMulti);

// }

// let fruits = ["apple", "banana", "mango"];

// for (const fruit of fruits) {
//     console.log(fruit);
// }
// let word = "JavaScript";
// for (const w of word) {
//   console.log(w);

// }
// let numSum = 0;
// let numbers = [10, 20, 30, 40];
// for(let nums of numbers){
//   numSum+=nums;
// }
// console.log(numSum);
// let str = "beautiful";
// let count = 0;
// for(vov of str){
//   if(vov === "a" || vov === "e" || vov === "i" || vov === "o" || vov === "u" ){
//     count++;
//   }
// }
// console.log(count);
// let nums = [12, 89, 45, 66, 100, 23];
// let largeNum = 0;
// for (const large of nums) {
//   if(large >= largeNum){
//     largeNum = large;
//   }
// }
// console.log(largeNum);

// let colors = ["red", "blue", "red", "green", "blue", "red"];
// let red = 0;
// let blue = 0;
// let green = 0;
// for (const ele of colors) {
//   if(ele === "red"){
//     red++;
//   }
//   if(ele === "blue"){
//     blue++;
//   }
//   else{
//     green++;
//   }
// }

//   console.log({
//     redCol : red,
//     blueCol : blue,
//     greenCol : green
//   });

// let names = ["Rohan", "Sita", "Uma"];
// let ages = [30, 19, 22];
// // Output: ["Rohan is 30", "Sita is 19", "Uma is 22"]
// for(let i = 0 ; i<=names.length-1 ; i++){
//   console.log(`${names[i]} is ${ages[i]}`);
// }
// let code = "a1b2c3d4";
// let digits = [];

// for (const word of code) {
//   if(!isNaN(word) && word != (" ") )
//     digits.push(word);
// }
// console.log(digits);
// let nums = [1, 2, 3, 4];
// let squares = [];
// let numberSquare = nums.forEach((a) => {
//   squares.push(a*a);
// });
// console.log(squares);
// let arr = [3, -2, 5, -1, 7];
// let positives = [];
// let pos = arr.forEach((a) => {
//   if(a>0){
//     positives.push(a);
//   }
// });
// console.log(positives);
// let users = [
//   { name: "Rohan", email: "rohan@mail.com" },
//   { name: "Uma", email: "uma@mail.com" },
//   { name: "Sita", email: "sita@mail.com" }
// ];
// let email = [];
// let em = users.forEach((a) => {
//   email.push(a.email);
// });
// console.log(email);
// let persons = [
//   { first: "Yash", last: "Pokiya" },
//   { first: "Meet", last: "Shah" },
//   { first: "Manthan", last: "Patel" }
// ];
// let fullName = [];
// let x = persons.forEach((a) => {
//   fullName.push(a.first.concat(" ",a.last));
// })
// console.log(fullName);
// let marks = [45, 12, 67, 23, 90, 31];
// let passed = 0;
// marks.forEach((a) => {
//   if(a>=35){
//     passed++;
//   }
// });
// console.log((`${passed} passed students`));
// let cart = [
//   { item: "Pen", price: 20 },
//   { item: "Book", price: 50 },
//   { item: "Bag", price: 200 }
// ];
// let totalCart = 0;
// cart.forEach((val) => {
//   totalCart+=val.price;
// });
// console.log(totalCart);
// let scores = [78, 95, 88, 64, 99, 82];
// let highest = 0;
// scores.forEach((scr) => scr>highest ? highest=scr : highest=highest)
// console.log(highest);
// let nums = [5, 10, 15, 20];
// let sum = nums.reduce((acc , curr) => {
//   return acc+=curr;
// })
// console.log(sum);
// let nums = [10, 25, 8, 99, 47];
// maxVal = 0;
// let max = nums.reduce((acc,curr) => {
//  return curr>acc ? maxVal=curr : maxVal=acc;
// });
// console.log(max);
// let nums = [10, 25, 8, 99, 47];
// minVal = nums[0];
// let min = nums.reduce((acc,curr) => {
//   return curr<acc? minVal=curr : minVal=acc;
// })
// console.log(min);
// let words = ["hi", "hello", "welcome"];
// let count = 0;
// let wordCount = words.reduce((acc , curr) => {
//   return count+=curr.length;
// },0);
// console.log(wordCount);
// let arr = [
//   [10, 20],
//   [30, 40],
//   [50, 60]
// ];
// let combine = arr.reduce((acc,curr) =>{
//   return acc.concat(curr);
// },[]);
// console.log(combine);
// let nums = [2, 4, 6, 8];
// let empty = [];
// let square = nums.forEach((a) => empty.push(a*a));
// console.log(empty);
// let products = [
//   { name: "Laptop", price: 40000 },
//   { name: "Phone", price: 15000 },
//   { name: "Tablet", price: 25000 }
// ];
// let string = products.map((a) => a.name + "-" + a.price);
// console.log(string);
// let items = [
//   { name: "Shoes", price: 2000 },
//   { name: "Bag", price: 1500 },
//   { name: "Watch", price: 3000 }
// ];
// let disc = items.map((a) => {
//   a.price -= a.price*16/100;
//   return a;
// }).forEach((a)=>{
//   console.log(`${a.name} discounted price is ${a.price}`);
// })
// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 25000 },
//   { name: "Mouse", price: 1000 },
//   { name: "Keyboard", price: 3000 }
// ];
// let disc = products.map((a) =>{
//   if(a.price>30000){
//     a.price -= a.price * 20 /100;
//   }
//   if(a.price > 10000 && a.price < 30000){
//     a.price -= a.price * 10 /100;
//   }
//   else{
//     a.price -= a.price * 5 / 100;
//   }
//   return a;
// }).forEach((a) => console.log(`discounted price of ${a.name} is ${a.price}`));
// let names = ["Raj", "Priya", "Yash", "Sita", "Manthan"];
// let len = names.filter((a) => {
//   return a.length>4;
// });
// console.log(len);
// let users = [
//   { name: "Yash", age: 21, active: true },
//   { name: "Riya", age: 25, active: false },
//   { name: "Aman", age: 19, active: true },
//   { name: "Meera", age: 30, active: true }
// ];
// let newArr = users.filter((a) => {
//   return a.active == true && a.age > 20;
// });
// console.log(newArr);
// let teams = [
//   { team: "A", members: ["Yash", "Rohan"] },
//   { team: "B", members: ["manthan"] },
//   { team: "C", members: ["Sita", "Riya", "Aman"] }
// ];
// let filterArr = teams.filter((a) => {
//   return a.members.length >=1;
// })
// console.log(filterArr);
// let data = ["hello", "user@mail.com", "test123", "admin@gmail.com"];
// let filterEmail = data.filter((a) => {
//   return a.includes("@");
// })
// console.log(filterEmail);
// let arr  = ["HTML", "CSS", "JavaScript"];
// let ch = arr.flat().join(",");
// console.log(ch);
// let arr = [10, 25, 40, 55, 70];
// let task = arr.filter((a) => a>30).map((a) => a*2).reduce((acc,curr) => {
//   acc += curr;
//   return acc;
// },0);
// console.log(task);
// let users = [
//   { name: "Amit", age: 20 },
//   { name: "Reena", age: 17 },
//   { name: "Karan", age: 22 }
// ];
// let filt = users.filter((a) => {
//   if(a.age>=18){
//     return a.name;
//   }
// });
// console.log(filt);
// let arr = ["A", "B", "C", "D"];
// let a = arr.reverse();
// console.log(a);
// let arr = [30, 5, 10, 20];
// let a = arr.sort((a,b) => a-b);
// console.log(a);
// let arr = [1, [2, [3, 4]]];
// let a = arr.flat().join(",");
// console.log(a);
// let arr = ["apple", "banana", "grape"];
// let a = arr.includes("banana")
// let names = ["Yash", "Riya", "Amit"];
// let ages = [22, 19, 25];
// let obj = names.map((name , idx) =>{
//     return {
//         name : name,
//         age : ages[idx]
//     }
// })
// console.log(obj);
// let d =  new Date("2007-05-06");
// let dNow = new Date();
// console.log(d);
// console.log(dNow);
// let diff = dNow - d;
// console.log(diff);
// function formatDate(date) {
//   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//   let dayName = days[date.getDay()];
//   let monthName = months[date.getMonth()];
//   let day = date.getDate();
//   let year = date.getFullYear();
//   let time = date.toLocaleTimeString();

//   return `${dayName}, ${day} ${monthName} ${year} - ${time}`;
// }

// let today = new Date();
// console.log(formatDate(today));
// let a = true;
// let b = confirm(`are you sure??? (if Yes Then click OK)`);
// if(b){
//     alert("congratulation...!!")
// }else{
//     alert("sorry..!")
// }

// class user {
// constructor(name){
//     this.userObj = {
//         user : name,
//         email : `${name}@gmail.com`,
//         pass : `${name}123`
//     };
// }
//     managerName = "manthan"
//     managerObj ={
//         mId : 101,
//         mName : `${this.managerName}`,
//         mPass : `${this.managerName}@01`
//     }

//     encryptedPass(){
//         return this.userObj.pass;
//     }
// }

// const name = new user("yash");
// const mDetail = name.managerObj;
// console.log(mDetail);
// const password = name.encryptedPass();
// console.log(name.userObj.email);
// console.log(password);
// console.log(name.userObj);

// class car{
//     constructor(cName){
//        this.car1 = {
//             cBrand : "bmw",
//             cModel : "classA",
//             cYear : 2016
//         }
//     }
//     showDetail(){

//         return {
//             Brand : this.car1.cBrand,
//             ModelName : this.car1.cModel,
//             Year : this.car1.cYear

//         }
//     }
// }

// const cName = new car();
// let returnStat = cName.showDetail();
// console.log(returnStat);
// class stud{
//     constructor(name , rollNo){
//         this.studentObj = {
//             name : name,
//             rollNo : rollNo
//         }
//     }
//     greet(){
//         return `Hello,I am ${this.studentObj.name}`;
//     }
// }
// let student = new stud();
// let student1 = new stud("manthan",101);
// let student2 = new stud("yash",102);
// let student3 = new stud("bansi",103)
// console.log(student1.greet());
// console.log(student2.greet());
// console.log(student3.greet());
// class car {
//     constructor(brand,model){
//         this.cars = {
//             brand : brand,
//             model : model
//         }
//     }
//     showDetail(){
//         return `car brand is ${this.cars.brand} and model is ${this.cars.model}`
//     }
// }
// let carDetail = new car();
// let car1 = new car("BMW","Class-A");
// console.log(car1.showDetail());
// class book{
//     constructor(title,author,price){
//          this.title = title;
//          this.author = author;
//          this.price = price;
//     }
//     discPrice(per){
//             let discPriceIs = this.price - (this.price * per / 100);
//             return `Price of ${this.title} by ${this.author} after ${per}% discount is ₹${discPriceIs}`;
//         }
// }
// let books = new book();
// let book1 = new book("learn Js", "Mr.antony" , 5000);
// console.log(book1);
// console.log(book1.discPrice(20))

// class BankAccount{
//     constructor(accHolder,bal){
//         this.accHolder = accHolder,
//         this.bal = bal
//     }
//     deposit(depAmt){
//         this.bal+=depAmt;
//         alert("Successfully Deposit...!");
//         console.log(`deposit amount is ${depAmt}`);
//     }
//     withdraw(witAmt){
//         this.bal-=witAmt;
//         alert("Successfully Withdraw...!");
//         console.log(`Withdraw amount is ${witAmt}`);

//     }
//     checkBal(){
//         console.log(`${this.accHolder} Your Balance is ${this.bal}`);
//     }
// }
// let acc = new BankAccount();
// let user1 = new BankAccount("yash" , 1000);
// user1.deposit(10000)
// user1.withdraw(50000)
// user1.checkBal()

// class shoppingCart{
//     constructor(){
//         this.item = [];
//     }
//     addItem(item,price){
//         this.item.push({item,price});
//     }
//     removeItem(item){
//         let findItem = this.item.findIndex((cartItem) => cartItem.item === item);
//         if(findItem != -1){
//             this.item.splice(findItem,1);
//             console.log((`successfully Remove item from cart...!`));
//         }
//         else{
//             console.log(("Not found Item which You want to remove ...!"));
//         }
//     }
//     showItem(){
//         let showDetail = [];
//         this.item.forEach((it)=>{
//             showDetail.push(it);
//         })
//         console.log(showDetail);
//     }
//     totalOfCart(){
//         let total = this.item.reduce((acc,cur) => {
//             return acc+ cur.price;
//         },0)
//         console.log(`total Value of Cart is ${total}`);
//     }
// }
// let shop = new shoppingCart();
// shop.addItem("laptop",50000);
// shop.addItem("T.V",30000);
// shop.addItem("fridge",40000);
// shop.removeItem("A.C");
// shop.showItem()
// shop.totalOfCart()

// class student {
//     constructor(){
//         this.student = [];
//     }
//     putInfo(name,mark1,mark2,mark3){
//         this.student.push({name,mark1,mark2,mark3});
//     }
//     getInfo(){
//         console.log(this.student);
//     }
//     getAverage(studName){
//         let studFind = this.student.find((stud) => stud.name === studName);
//         if(studFind){
//              let avg = (studFind.mark1 + studFind.mark2 + studFind.mark3) / 3;
//             return console.log(`average marks of ${studFind.name} is ${avg}`);
//         }
//         else{
//             return console.log("student data not found");
//         }
//     }
// }
// let stud = new student();
// stud.putInfo("manthan",88,45,33);
// stud.putInfo("yash",79,90,75);
// stud.putInfo("bansi",98,67,81);
// stud.getInfo();
// stud.getAverage("yash")
// stud.getAverage("manthan")
// stud.getAverage("bansi");
// const employee = {
//     taxesIs (){
//         console.log("Tax is 10%");
//     },
//     pfIs (){
//         console.log("PF per is 8%");
//     }
// }
// const yash = {
//     salaryIs : 500000
// }
// yash.__proto__ = employee;

// class stud{
//     constructor(){
//     this.mark = [];
//     this.studInfo1 = [];
//     this.total = 0;
//     this.avg = 0;
//     }
//     studInfo(name,rNo){
//         this.studInfo1.push(name,rNo);
//     }
//     putMark(m1,m2,m3,m4){
//         this.mark.push(m1,m2,m3,m4);
//     }
//     getAvg(){
//         if (this.mark.length === 0) {
//             console.log("marks is not found...!!!");
//         }
//         this.total = this.mark.reduce((acc,curr) => acc+=curr ,0);
//         this.avg = this.total / this.mark.length;
//         let [name ,rNo] = this.studInfo1;
//         console.log(`${name} got total ${this.total} marks and get percentage ${this.avg}...!`);
//     }
//     getFullDetail(){
//         let [name ,rNo] = this.studInfo1;
//         let [m1,m2,m3,m4] = this.mark;
//         let detail = {
//             name : name,
//             rollNo : rNo,
//             m1 : m1,
//             m2 : m2,
//             m3 : m3,
//             m4 : m4,
//             total : this.total,
//             average : this.avg
//         }
//         console.log(detail);
//     }
// }

// let stud1 = new stud();
// stud1.putMark(80,90,85,75)
// stud1.studInfo("yash",102);
// stud1.getAvg();
// stud1.getFullDetail()

// class person {
//     eat(){
//         console.log("eating");
//     }
//     work(){
//         console.log("nothing");

//     }
// }
// class engineer extends person {
//     work(){
//         console.log("build something");

//     }
// }
// let per = new person()
// let eng = new engineer()
// eng.work()
// per.work()
// class person {
//     constructor(){
//         this.perInfo = [];
//     }
//     putInfo (name,age){
//        this.personObj = {name : name , age : age};
//        this.perInfo.push(this.personObj);
//     }
//     getInfo(){
//         console.log(this.perInfo);
//     }
// }
// let per1 = new person();
// per1.putInfo("yash",18)
// per1.putInfo("bansi",18)
// per1.getInfo()
// class student extends person{
//     constructor(){
//         super();
//         this.marks = [];
//     }
//     putMark(m1,m2,m3){
//         this.allMark = {m1:m1,m2:m2,m3:m3};
//         this.marks.push(this.allMark);
//     }
//     getMark(){
//         console.log(this.marks);
//     }
//     allDetail(personObj,m1,m2,m3){
//         let allDetail = {
//             perInfo : this.perInfo,
//             marks : this.marks
//         }
//         console.log(allDetail);

//     }
// }
// let stud1 = new student();
// stud1.putMark(99,85,75);
// // stud1.getMark();
// stud1.allDetail();
// let data = "only Admin can Edit you can only see this data"
// class user {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log(`your name is ${this.name} and Mail Id id ${this.email}`);
//         console.log("data is :",data);
//     }
// }
// class admin extends user{
//     constructor(name , email){
//         super(name,email);
//     }
//     editData(){
//         data = "Data are Changed...!!"
//     }
// }
// let student1 = new user("yash","yashpokiya@gmail.com");
// let admin1 = new admin("admin","admin@gmail.com");

// student1.viewData()
// admin1.editData()
// student1.viewData()
// class BankAccount {
//     constructor(owner,balance){
//         this.owner = owner;
//         this.bal = balance;
//     }
//     deposit(amount){
//         this.bal += amount;
//         console.log("deposit success...!!");

//     }
//     checkBal(){
//         console.log(`your total current balance is ${this.bal} `);
//     }
// }
// class premium extends BankAccount{
//     constructor(owner,balance){
//         super(owner,balance);
//         this.minBal = 1000;
//     }
//     withdraw(withdrawAmt){
//         if(this.minBal>this.bal){
//             console.log("sorry your minimun balance is too low So you can't make transaction..!!");
//             return;
//         }
//         if(this.bal>=withdrawAmt){
//             this.bal-=withdrawAmt;
//             console.log(`withdraw success of amount ${withdrawAmt}...!`);
//         }else{
//             console.log(`Sorry Your withdraw amount is greater than balance...!`);
//         }
//     }
// }
// let preCust = new premium("yash",0);
// preCust.deposit(20);
// preCust.checkBal();
// preCust.withdraw(2);
// preCust.checkBal();
// let books = ["HTML", "CSS", "JS"];
// class LibraryMember{
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//     }
//     viewBook(){
//         console.log(`available Books are ${books} ...!`);
//     }
// }
// class librarian extends LibraryMember {
//     constructor(name,id){
//         super(name,id);
//     }
//     addBook(addBook){
//         books.push(addBook);
//         console.log(`successfully add Book ${addBook} so now available Books are ${books}`);
//     }
//     removeBook(removeBook){
//         let indexOfRemove = books.indexOf(removeBook);
//         if(indexOfRemove === -1){
//             console.log(`Not found Book which You want to remove...!! or make sure Books name is Case sensetive..`);
//         }else{
//         let rBook = books.splice(indexOfRemove,1);
//         console.log(`successfully remove Book ${rBook} so now available Books are ${books}`);
//         }
//     }
// }

// let member = new LibraryMember("yash",101);
// let libMember = new librarian("manthan",102);
// member.viewBook();
// libMember.addBook("react");
// libMember.removeBook("CSS");
// libMember.removeBook("HTML");
// let grade = prompt("Enter a Grade between A to C");
// let output;
// switch (grade) {
//     case "A":
//         output = "Excelent";
//         break;
//     case "B":
//         output = "Great";
//         break;
//     case "C":
//         output = "Nice";
//         break;
//     default:
//         console.log("Enter valid case..!");
//         break;
// }
//     console.log(output);
// let browser = prompt("Enter A Browser Which you Use..!");
// let output;
// switch(browser){
//     case "chrome":
//         output = "Chrome";
//         break;
//     case "edge":
//         output = "Edge";
//     default:
//         console.log("Enter Valid Browser..!");
// };
// console.log(`Browser in Your use is ${output}`);

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let print = fruits.forEach((a) => {
//     console.log(a);
// })
// let addFirst = fruits.unshift("Kiwi");
// console.log(fruits);
// let addLast = fruits.push("grapes");
// console.log(fruits);
// function remove(a) {
//     return a.pop();
// }
// let removeFruit = remove(fruits);
// console.log(removeFruit);
// console.log(fruits);
// let data = new Set();
// data.add("yash");
// data.add("manthan");
// // data.delete("yash");
// // data.clear()
// data.forEach((a) => {
//     a = a+ " "+ "patel";
//     console.log(a);
// })
// console.log(data);
// let setOfArr = new Set(numbers);
// console.log(typeof(setOfArr));

// let numbers = [10, 25, 30, 45, 60, 75, 90];
// let [a,b,c,...dump] = numbers;
// console.log(a,b,c,dump);
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let obj = {...fruits};
// console.log(obj);
// let objPen = {
//     item : "pen",
//     price : 10,
// };
// let arr = objPen;
// console.log(arr);
// console.log(objPen);
// let arr = [10,20,30];
// let sum = (a,b,c) => a+b+c;
// console.log(sum(...arr));
// const ages = [32, 33, 16, 40];
// function checkAge(age){
//     return age>18;
// }
// ages.every(checkAge)
// class vehicle{
//     constructor(brand,model){
//         this.brand = brand;
//         this.model = model;
//     }
//     displayInfo(){
//         console.log(`Vehicle's Brand is ${this.brand} and Model is ${this.model}`);
//     }
// }
// class car extends vehicle{
//     constructor(brand,model,price){
//         super(brand,model);
//         this.price = price;
//     }
//     showDetail(){
//         console.log(`${this.model} of ${this.brand} is priced $${this.price}...!`);
//     }
// }

// let vehicle1 = new vehicle("BMW","X4");
// vehicle1.displayInfo();
// let car1 = new car("Audi","A6",150000);
// car1.showDetail();
// class employee{
//     constructor(name,salary){
//         this.name = name;
//         this.salary = salary;
//     }
//     getDetails(){
//         console.log(`Name of Employee is ${this.name} and salary of his is ${this.salary}`);
//     }
// }
// class manager extends employee{
//     constructor(name,salary,dept){
//         super(name,salary);
//         this.dept = dept;
//     }
//     manageTeam(){
//         console.log(`${this.name} handle ${this.dept} department`);
//     }
// }
// let employee1 = new employee("yash",200000);
// employee1.getDetails();
// let manager1 = new manager("ABC",150000,"IT");
// manager1.manageTeam();
// console.log("one");
// console.log("two");
// console.log("three");
// setTimeout(() => {
//     console.log("hello world");
// },2000)
// console.log("four");
// console.log("five");
// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     getInfo(){
//         console.log(`student's name is ${this.name} and age is ${this.age}`);
//     }
// }
// class student extends person{
//     constructor(name,age,marks){
//         super(name,age);
//         this.marks = marks;
//     }
//     getAveragemarks(){
//         let sum = this.marks.reduce((acc,total) => acc+total,0);
//         return sum / this.marks.length;
//     }
// }

// let person1 = new person("yash",18);
// person1.getInfo();
// let student1 = new student("manthan" , 18 , [90,80,70]);
// console.log(`Average marks of ${student1.name} is `,student1.getAveragemarks());
// let arr = [10,20,30]

// let forArr = setTimeout(() => {
//     let newArr = arr.map(a => a*10);
//     console.log(newArr);
// },2000);
// let a = 5 ;
// let b = 10;
// (function sum(){
//     console.log(a+b);
// })();
// (()=> {
//     console.log(`sum is :`,a+b);
// })();
// let age = 18;
// let check = age>=18? "eligible" : "not eligible";
// console.log(check);
// let arr = [10, 20, 30];
// let arr2 = ["yash", "manthan", "aryan"];
// console.log(arr.length);
// console.log(arr.toString());
// console.log(arr.at(1));
// console.log(arr.join("."));
// let unFlatArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(unFlatArr.flat());
// console.log(arr2.indexOf("manthanF") + 1);
// let a = 1;
// do{
//     console.log(a);
//     a++;
// }while(a<1);
//     console.log("complete DO While...!");

// while(a<1){
//     console.log(a);
//     a++;
// };

// for(let i = 0; i<=100; i++){
//     if(i%2==0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
// }
// let i=1;
// while(i<=100){
//      if(i%2==0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
//     i++;
// }
// for(let i = 1 ; i<=5 ; i++){
//     let row = "";
//     for(let j = 1 ; j<=5 ; j++){
//         row += "*";
//     }
//     console.log(row);
// }
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   console.log(row);
// }
// let stud = [
//     ["yash",18,"bca"],
//     ["manthan",19,"bba"],
//     ["aryan",20,"b.com"]
// ];
// console.log(stud.join(``));
// let name = ["yash","manthan","aryan","prince","shyam"];
// let sorting = name.sort();
// console.log(sorting);
// let num = [1,2,10,9,5,4,6,7,3,1,5,2];
// let sorted = num.sort((a,b) => b-a);
// console.log(sorted);
// let people = [{name:"yash",age:18},{name:"manthan",age:20},{name:"mehul",age:35},{name:"prince",age:12}];
// let sorted = people.sort((a,b) => b.age - a.age);
// people.sort((a,b) => a.name.localeCompare(b.name));
// console.log(people);

// console.log(sorted);

// let num = Math.floor(Math.random()*10);
// console.log(num);
// let a = setTimeout(() => {
//     for(let i = 1; i<=10;i++){
//         console.log(i);
//     }
// },2000)

// function hello (a){
//     console.log("hello..!",a);
// }
// function bye (){
//     console.log("byee..!");
// }
// setTimeout(() => {
//     hello("yash");
// },2000);
// for (let i = 5; i >= 1; i--) {
//   setTimeout(() => {
//     hello("yash"+ i);
//   }, i*500);
// }
// for(let i = 30 ; i>=0 ; i--){
//     setTimeout(()=>{
//         console.log(30-i);
//     },i*500);
// }
// for(let i = 30 ; i>=0 ; i--){
//     setTimeout(()=>{
//         console.log((Math.random()*10));
//     },i*500);
// }
// let a = new Number(100);
// console.log(a.toFixed(2));
// let pre = 112.295;
// console.log(pre.toPrecision(5));
// let hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-In"));
// console.log(Math.abs(50));
// console.log(Math.round(4.675));
// console.log(Math);
// let arr = [1,2,5,8,8,4,515,4425,5126,652];
// console.log(Math.max(...arr));
// let num = [1,2,3];
// ((a,b,c) => {
//     console.log(a+b+c);
// })(...num);
// console.log(Math.round(Math.random()*10));
// const users = [
//   { id: 1, name: "Yash", age: 21, city: "Surat", marks: 80 },
//   { id: 2, name: "Riya", age: 19, city: "Mumbai", marks: 92 },
//   { id: 3, name: "Amit", age: 25, city: "Delhi", marks: 67 },
//   { id: 4, name: "Priya", age: 22, city: "Surat", marks: 74 },
//   { id: 5, name: "Karan", age: 23, city: "Pune", marks: 59 },
// ];

// Print each user’s name with their city.

// let output = users.forEach((a) => {
//     console.log(`${a.name} from ${a.city}`);
// })
// console.log(output);

// Create a new array that contains only user names in uppercase.

// let output = users.map((a) => {
//     let fWord = a.name[0].toUpperCase();
//     let rName = a.name.slice(1);
//     return fWord + rName;
//     // return fWord;
// })
// console.log(output);

// Find all users whose marks are more than 70.

// let output = users.filter((a) => {
//     return a.marks >=70
// });
// console.log(output);

// Calculate the total marks of all users.

// let output = users.reduce((acc,crr) => {
//     return acc + crr.marks;
// },0)
// console.log(output);
// let output = users.find((a) => {
//     return a.city = "surat";
// });
// console.log(output);

// let output = users.findIndex((a) => {
//     return a.id === 3;
// })
// console.log(output);
// let output = users.some((a) => {
//     return a.marks <= 60;
// });
// console.log(output);

// let output = users.every((a) => {
//     return a.age >=18;
// });
// console.log(output);
// let output = users.some((a) => {
//     return a.city === "Surat";
// })
// console.log(output);

// let output = users.sort((a,b) => {
//     return b.marks - a.marks;
// });
// console.log(output);
// let output = users.reverse();
// console.log(output);
// let newArr = [];
// let output = users.forEach(a => {
//     newArr.push({name : a.name , city : a.city});
// })
// console.log(newArr);
// let output = users.splice(2,1,{id : 3,name:"manthan",age:19,city:"jamnagar",marks:99});
// console.log(users);
// let output = users.slice(0,3);
// console.log(output);
// let output = users.map(a => {
//     return a.name;
// }).reverse().join(",");
// console.log(output);
// let output = users.toSorted((a,b) => {
//     return b.id - a.id;
// });
// console.log(users);
// console.log(output);

// callbacks
// function sum(a,b){
//     console.log(a+b);
// }
// function calc(a,b,callback){
//     callback(a,b);
// }
// calc(10,20,sum);
// function calc(a,b,callback){
//     callback(a,b);
// }
// function sum(a,b){
//     console.log(a+b);

// }
// calc(10,20,sum);
// function meet(callback){
//     callback();
// }
// function hello(){
//     console.log("heyy..!");
// }
// function bye(){
//     console.log("byee..!");
// };
// meet(bye);
// Write a function processArray(arr, callback) that applies the callback to each element and returns a new array.
// function processArray(arr , callBack){
//     callBack(arr);
// }
// function calc(arr){
//     let multi = arr.forEach(a => {
//         console.log(a*a);
//     });
// }
// let arr = [1,2,3,4,5];
// processArray(arr,calc);
// Write a function delayedExecution(callback, delay) that runs the callback after a given number of milliseconds.
// function delayedExecution(callBack, delay) {
//   setTimeout(() => {
//     callBack();
//   }, delay);
// }
// function print() {
//   console.log("heyy user");
// }

// delayedExecution(print, 2000);
// Create retry(callback, attempts) that retries a failing callback up to attempts times.
// function retry(callBack,attempts){
//     setTimeout(() => {
//         callBack();
//     },attempts*1000);
// }
// let attempts = 1;
// for(let i = 0 ; i<=10 ; i++){
//     if(retry){
//         attempts = attempts;
//     }
//     else{
//         attempts++;
//     }
// }
// function forRetry(){
//     console.log(`your attempts failed ${attempts} times..!`);
// }
// retry(forRetry,attempts);

// function retry(callback, maxAttempts) {
//   let attempts = 0;

//   function tryAgain() {
//     attempts++;
//     const success = Math.random() > 0.7; // 30% chance to fail

//     if (success) {
//       callback(attempts);
//     } else if (attempts < maxAttempts) {
//       console.log(`Attempt ${attempts} failed. Retrying...`);
//       setTimeout(tryAgain, 1000); // retry after 1 second
//     } else {
//       console.log(`All ${attempts} attempts failed.`);
//     }
//   }

//   tryAgain();
// }

// function forRetry(attempts) {
//   console.log(`Success after ${attempts} attempts!`);
// }

// retry(forRetry, 5);

// function retry(callback, maxAttempts) {
//   let attempt = 0;
//   function tryAgain() {
//     attempt++;
//     let success = Math.random() > 0.7;
//     if (success) {
//       callback(attempt);
//     } else if (attempt < maxAttempts) {
//       console.log(`Your ${attempt} attempt is too failed...!`);
//       setTimeout(tryAgain,500);
//     } else {
//       console.log(`You still failed after ${attempt} attempts....!`);
//     }

//   }

//     tryAgain();

// }
// function successFun(attempt) {
//     console.log(`your Attempt is success after ${attempt}th attempt`);
//   }
//   retry(successFun, 5);
// let greetUser = (user,callback) => {
//   console.log("hello",user);
//   callback(user);
// }
// let js = (user) => {
//   console.log(`${user} learn js...!`);
// }
// greetUser("yash",js);

// Task:
// Write a function `addNumbers(a, b, callback)`
// that adds two numbers and passes the result to the callback function.

// let addNumber = (a,b,callback) => {
//   let sum = a+b;
//   callback(sum);
// }
// let sumOf = (sum) => {
//   console.log(sum);
// };

// addNumber(10,20,sumOf);

// let input = (num,callback) => {
//   callback(num);
// }

// let check = (num) => {
//   if(num%2 == 0){
//     console.log("number is even..!");
//   }else{
//     console.log("number is odd..!");
//   }
// }
// input(3,check);
// let login = (user,callback) => {
//   console.log(`login in ${user}`);
//   callback(user);
// }
// let welcome = (user) => {
//   setTimeout(() =>{
//     console.log(`welcome ${user} to our web...!`);
//   },2000)
// }
// login("yash",welcome);

// let showMessege = (user,messege,callback) => {
//   callback(user,messege);
// }
// let delayed = (user,messege) =>{
//   console.log(`sorry ${user} your messege is delayed 2 second...`);
//   setTimeout(() => {
//     console.log(messege);
//   },2000)
// }
// showMessege("yash","hello user..",delayed)
// let getUserData = (callback) => {
//   console.log("Fetch data from database...");
//   setTimeout(() => {
//   callback();
//   },2000)
// }

// let userData = () => {
//    let data = {
//     name: "yash",
//     age : 18,
//     address : "surat"
//   }
//   console.log(data);
// }
// getUserData(userData);

// let arr = [ { name: 'A', city: 'Surat' }, { name: 'B', city: 'Vadodara' }, { name: 'C', city: 'Surat' } ];
// let filter = arr.filter((a) => {
//   return a.city === "Surat";
// })
// console.log(filter);

// Q1. Flatten a Deeply Nested Array

// let arr = [1, [2, [3, [4, 5]]]];
// console.log(arr.flat(3));

//  Q2. Group Objects by a Common Key

// let arr = [ { name: 'A', city: 'Surat' }, { name: 'B', city: 'Vadodara' }, { name: 'C', city: 'Surat' } ];
// let grouped = arr.reduce((acc,curr) => {

// })

// console.log(grouped);

//  Q4. Remove Duplicate Objects

// let arr = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'A' } ];
// let arr2 =[];
// let find = arr.forEach((a) => {
//  let exist =  arr2.some((b) => b.name === a.name && b.id === a.id);
//  if(!exist){
//   arr2.push(a);
//  }
// })
// console.log(arr2);

//  Q5. Sort Array of Objects by Multiple Keys

// let arr = [ { name: 'A', age: 25 }, { name: 'B', age: 20 }, { name: 'A', age: 20 } ];
// let sorted = arr.sort((a,b) => {
//   return a.name.localeCompare(b.name);
// })
// console.log(sorted);

//  Q7. Create a Custom Map Function

// let arr = [1,2,3,4,5,6,7];
// function multiMap(arr){
//     let multi = arr.map((a) => {
//         return a*2;
//     })
//     return multi;
// }
// console.log(multiMap(arr));

//  Q8. Calculate Average Marks

// let arr = [ { name: 'A', marks: 80 }, { name: 'B', marks: 90 }, { name: 'C', marks: 70 } ];

// let reduceArr = arr.reduce((acc,curr) => {
//     return acc + curr.marks;
// },0);
// let avg = reduceArr / arr.length;

// console.log(avg);

// let FlattenArr = arr.flat()
// // let setArr = new Set(FlattenArr);
// // console.log(setArr);
//  let empty = [];
// let removed = FlattenArr.forEach((a) =>  {
//     let exist = a.some((b) => {
//         return a===b;
//     })
//     if(!exist){
//         empty.push(a);
//     }

// })
// console.log(empty);

// Q. Get All Unique Values from Nested Arrays

// let arr = [
//   [1, 2],
//   [2, 3, 4],
//   [4, 5],
// ];
// let finalArray = [];
// let newArr = arr.flat(Infinity).reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }

//   return acc;
// }, finalArray);
// console.log(newArr);

// expected output = [ 1, 2, 3, 4, 5 ]

// PROMISE
// let promise = new Promise((resolve,reject) => {
//   let success = true;
//   if(success){
//     resolve("work completed..!")
//   }
//   else{
//     reject("error occured...!")
//   }
// })
// promise.then((result) => {
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   console.log("finally work complete...!");
// })
// let promiseOne = new Promise((resolve,reject) => {
//   setTimeout(()=>{
//     console.log("async start...!");
//     resolve({
//       user : "yash",
//       userId : 101
//     })
//   },1000)
// })
// promiseOne.then((user) => {
//   console.log(user);
// })

// let promiseTwo = new Promise((resolve, reject) => {
//   let error = true;
//   setTimeout(() => {
//     if (!error) {
//       resolve({ username: "yash", userId: 101 });
//     } else {
//       reject("Some Error occured...!");
//     }
//   }, 2000);
// });

// promiseTwo
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let promiseFunc = async () => {
//   try {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users')
//     let data = await response.json();
//     console.log(data);

//   } catch (error) {
//     console.log(`error is ${error}`);
//   }
// }

// promiseFunc();
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//   return response.json()
// })
// .then((data) => {
//   for(let x of data){
//     console.log(x.company.name);

//   }
// })
// .catch((err) => console.log(`error is ${err}`));

// let arr = [1, 2, 5, 4, 3, 6, 7, 1, 4, 2, 5];
// let empty = [];
// let filterArr = arr.map((a) => {
//   let exist = empty;
//   if (exist) {
//     empty.push(a);
//   }
// });
// console.log(empty);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((Response) => Response.json())
//   .then((data) => console.log(data))
//   .catch(console.log("some error occured"));

// let asyncFunc = async() => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello async...!");
//     },2000)
//   })
// }
// asyncFunc();
// let greet = (name,callback) => {
//   console.log(`hello ${name}`);
//   callback();
// }
// let meet = () => {
//   setTimeout(() => {
//     console.log("User sorry for late responde...🙏🏻");
//   },2000)
// }
// greet("yash",meet)
// let download = (movieName,callback)=>{
//   console.log(`downloading ${movieName} movie...!`);
//   callback();
// }
// let complete = () => {
//   setTimeout(() => {
//     console.log("download is completed.....!");
//   },3000)
// }

// download("Boss",complete);
// let name = {};
// name.firstName = "yash";
// name.secName = "pokiya";
// console.log(name);
// function objConst (name,rno,add){
//   this.name = name;
//   this.rno = rno;
//   this.add = add;
// }
// let obj1 = new objConst("yash",101,"surat");
// console.log(obj1);
// function myFunc(){
//   confirm("yash..")
// }
// myFunc();
// let promise1 = new Promise((resolve,reject) => {
//   console.log("success");
// })
// let promise = () => {
//   let x = true;
//   return new Promise((resolve,reject) => {
//     if(x){
//       resolve("yesss...!");
//     }else{
//       reject("noohhh...!")
//     }
//   })
// }
// let promiseOne = promise();
// promiseOne.then(() => {
//   console.log("success..");
// }).catch(() => {
//   console.log("failure..");
// })
// let delayedMessege = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log("hello sorry for delayedd...");
//   },2000);
// })
// delayedMessege.then((messege) => {
//   console.log(messege);
// }).catch(() => {
//   console.log("error occured..");
// })

// let sum = new Promise((resolve,reject) => {
//   let num = (a,b) => {
//     if(a>=0 && b>=0){
//       resolve(a+b);
//     }
//     else{
//       reject("number is negative..")
//     }
//   }
//   num(-1,2);
// })
// sum.then((sum) => {
//   console.log(`sum of this two number is ${sum}`);
// }).catch(() => {
//   console.log("sorry but numbers must be have possitive....!");
// })

// let promise = new Promise(10)
// let calc = new Promise((resolve,reject) => {
//   let num = 10;
//   resolve(num);
//   reject("some error found..!")
// })
// calc.then((num) => num*2)
// .then((num) => num+10)
// .then((num) => num / 2)
// .then((num) => num -2)
// .then((num) => console.log(`total of num is ${num}`))
// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`data ${dataId}`);
//       resolve();
//     }, 2000);
//   });
// }
// async function getAllData(){
//   await getData(1);
//   await getData(2);
// }
// getAllData()
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//     getData(3).then((res) => {
//       console.log(res);
//     });
//   });
// });
// getData(1).then((res) => {
//   console.log(res);
//   return getData(2);
// }).then((res) => {
//   console.log(res);
//   return getData(3);
// }).then((res) => {
//   console.log(res);
//   return getData(4);
// }).then((res) => {
//   console.log(res);
// })

// function hello() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("hello brohh..");
//       resolve();
//     },2000)
//   })
// }
// async function functiongetHello(){
//   await hello();
//   await hello();
// }
// functiongetHello();

// async function myFunc() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("hello...");
//       resolve();
//     }, 2000);
//   });
// }

// let func = async () => {
//   await myFunc();
//   console.log("hello2");
// };

// func();

// async function fetchApi(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(async () => {
//       try {
//         let fetchData = fetch("https://jsonplaceholder.typicode.com/users");
//         let data = (await fetchData).json();
//         resolve(data);
//       } catch (error) {
//         reject("error:", error);
//       }
//     }, 2000);
//   });
// }
// async function getInfo() {
//   console.log("loading... data");
//   let finaldata = await fetchApi();
//   console.log(finaldata);
//   console.log("data loaded!");
// }
// getInfo();

// async function myFunc(num) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log(`done ${num}.`);
//       resolve();
//     },2000)
//   })
// }
// async function getOutput(){
//   await myFunc(1);
//   await myFunc(2);
// }
// getOutput();

// failed code

// async function randomChanse(attempt = 1) {
//   let randomNum = Math.random()*10;
//   let success = randomNum >=0.5;
//   return new Promise((resolve,reject) => {
//     setTimeout(async()=>{
//       if(success){
//         resolve("You successfully win...!")
//       }else{
//        console.log("failed..");

//       }
//     },2000)
//     async function reTry(){
//      await randomChanse();
//     }
//   })
// }
// async function check(){
//   await randomChanse();
// }

// check();

// corret try for this 🔵 Advanced Level Tasks
// Task 7: Retry logic

// 👉 Make one async function that fails 50% of time (random reject).
// ✅ Write another function that calls it —
// if it fails, retry up to 3 times using await.

// first  do this complete

// async function game(maxAttempts) {
//   let tries = 1;
//   async function checkChance() {
//     let luck = Math.round(Math.random() * 10);
//     let success = luck >= 5;
//     if (success) {
//       console.log(`you win successfully after ${tries} tries`);
//     } else if (tries < maxAttempts) {
//       tries++;
//       await checkChance();
//     } else {
//       console.log(`you still failed after ${maxAttempts} tries`);
//     }
//   }
//   await checkChance();
// }

// game(2);
// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function game(maxAttempts) {
//   let tries = 1;

//   async function checkChance() {
//     await wait(1000); // waits 1 second per try

//     let luck = Math.round(Math.random() * 10);
//     let success = luck >= 7;

//     console.log(`Try ${tries}: Luck = ${luck} → ${success ? "Success" : "Fail"}`);

//     if (success) {
//       return true; // final result
//     }

//     if (tries < maxAttempts) {
//       tries++;
//       return await checkChance(); // retry
//     }

//     return false; // failed after all attempts
//   }

//   const finalResult = await checkChance();

//   // FINAL OUTPUT AFTER ALL TRIES
//   if (finalResult) {
//     console.log(`\nYou win successfully after ${tries} tries`);
//   } else {
//     console.log(`\nYou still failed after ${maxAttempts} tries`);
//   }
// }

// game(5);

// async function test(){
//     console.log("a");
//    await console.log("b");
//     console.log("c");
// }
// test();
// console.log("D");
// console.log("e");

//fake json fetch

// async function getdata() {
//     return new Promise((resolve,reject) => {
//       setTimeout (async() => {
//         try {
//             let x = await fetch("https://jsonplaceholder.typicode.com/users")
//             let data =  await x.json();
//             resolve(data);
//         } catch (error) {
//             reject(`error: ${error}`);
//         }
//       },2000)
//     })
// }
// getdata().then((response) => {
//     return response;
// }).then((data) => {
//     console.log(data);
// })
// async function getWeather(city) {
//   return new Promise((resolve, reject) => {
//     setTimeout(async () => {
//       try {
//         let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=21.17&longitude=72.83&current_weather=true`);
//         let weatherData = await response.json();
//         resolve(weatherData);
//       } catch (error) {
//         reject(`Error fetching weather: ${error}`);
//       }
//     }, 2000);
//   });
// }

// getWeather("Surat")
//   .then((data) => {
//     console.log("Weather Data:", data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// async function weather(city) {
//   return new Promise((resolve, reject) => {
//     setTimeout(async () => {
//       try {
//         let fetchWeather = await fetch(
//           "https://api.open-meteo.com/v1/forecast?latitude=21.17&longitude=72.83&current_weather=true"
//         );
//         let data = await fetchWeather.json();
//         resolve(data);
//       } catch (error) {
//         reject(`error is ${error}`);
//       }
//     }, 2000);
//   });
// }

// weather("Surat")
//   .then((response) => {
//     return response;
//   })
//   .then((response) => {
//     console.log(response);
//   });

// function task(){
//     let random = Math.round(Math.random()*10);
//     setTimeout(async () => {
// if(random>=5){
//     console.log("success....");
// }else{
//     console.log("failuer..!");
// }
//     },2000)
// }
// task();

// async function task() {
//   let random = Math.round(Math.random() * 10);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (random >= 9) {
//         resolve("success....");
//       }else{
//       reject("so sorry you fail");
//       }
//     }, 2000);
//   });
// }
// task()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function delay(time) {
//     return new Promise((resolve) => {
//         setTimeout(resolve,time);
//     })
// }

// async function timer() {
//     let sec = 5;
//     setTimeout(async () => {
//         for(let i = sec; i>0 ; i--){
//              console.log(i);
//              await delay(1000);
//         }
//         console.log("go");
//     },2000)
// }
// timer();

// async function chain() {
//   return new Promise(async (resolve, reject) => {
//     for (let i = 1; i <= 3; i++) {
//       await resolve(`step ${i}`);
//     }
//     reject("some error occured..");
//   });
// }
// chain()
//   .then((a) => console.log(a))
//   .then((a) => console.log(a))
//   .then((a) => console.log(a))
//   .catch((err) => console.log(err));

// let calculate = (a,b,callback) => {
//   callback(a,b);
// }
// let sum = (a,b) => {
//   console.log(a+b);
// }
// calculate(5,10,sum)

// let delay = (ms,callback) => {
//   setTimeout(() => {
//     callback(ms);
//   },ms)
// }
// let func = (ms) => {
//   console.log(`sorry for ${ms/1000} sec..`);
// }
// delay(2000,func);

// let main = (ms,callback) => {
//   console.log("download start soon..");

//     setTimeout(() => {
//       callback();
//     },ms)
// }
// let delayFunc = () => {
//   console.log("download started...");
//   setTimeout(() => {
//     console.log(`download completed...🙏🏻`);
//   },3000);
// }
// main(2000,delayFunc)

// let forEachVal = (arr,callback) => {
//   callback(arr);
// }

// let funcCallback = (arr) => {
//   for(let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
//   }
// };
// forEachVal([1,2,3,4,5,6,7,8],funcCallback);

// let promiseOne= () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello yash~~!");
//     }, 1000);
// });

// async function result (){
//     let res = await promiseOne();
//     try{
//         console.log(res);
//     }
//     catch(err){
//         console.log(err);

//     }
// }
// result();

// let apiCall = async() => {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//        let data = await response.json();
//        console.log(data);

//     } catch (error) {
//         console.log(error);

//     }
// }
// apiCall();

// let task1 = () => {
// return new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Task1...")
//     },2000);
// })
// }
// let task2 = () => {
// return new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Task2...")
//     },2000);

// })
// }
// let task3 = () => {
// return new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         resolve("completed...!!")
//     },1000);
// })
// }
// async function runTask(){
//     let res1 = await task1();
//     console.log(res1);
//     let res2 = await task2();
//     console.log(res2);
//     let res3 = await task3();
//     console.log(res3);
// }
// runTask();

// let chance = () => {
//     return new Promise((resolve,reject) => {
//         let success  = Math.round(Math.random()*10)>5
//       try {
//         if(success){
//             resolve("success...")
//         }
//       } catch (error) {
//         resolve(error);
//       }
//     })
// }

// let check = async () => {
// let res = await chance();
// console.log(res);

// }
// check();

// let apiCall = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   return response.json();
// };
// apiCall()
//   .then((res) => res)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// let obj1 = {
//   name:"yash",
//   id : 101
// };
// console.log(Object.values(obj1));
// class Product{
//   constructor(name,price,quantity){

//       this.name = name;
//       this.price = price
//       this.quantity = quantity;
//   }
//   totalPrice(){
//     console.log( this.price * this.quantity);

//   }

// }

// let p1 = new Product("tv",10000,20);
// p1.totalPrice();
// var myObj = { "name":"John", "age":31, "city":"New York" };
// let newObj = JSON.stringify(myObj);
// console.log(newObj);
//  let myObj1 = { "name":"John", "age":31, "city":"New York" };
// let myJSON = JSON.stringify(myObj);
// console.log(myObj.hasOwnProperty("ciy"));

// console.log(myObj);
// let obj1 = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// };

// let obj2 = {
//   id: 2,
//   name: "Ervin Howell",
//   username: "Antonette",
//   email: "Shanna@melissa.tv",
//   address: {
//     street: "Victor Plains",
//     suite: "Suite 879",
//     city: "Wisokyburgh",
//     zipcode: "90566-7771",
//     geo: {
//       lat: "-43.9509",
//       lng: "-34.4618",
//     },
//   },
//   phone: "010-692-6593 x09125",
//   website: "anastasia.net",
//   company: {
//     name: "Deckow-Crist",
//     catchPhrase: "Proactive didactic contingency",
//     bs: "synergize scalable supply-chains",
//   },
// };

// let obj3 = {...obj1, ...obj2};
// console.log(obj3);
// let arr = [1, 2, 3, 4];
// let [first, ...all] = arr;
// console.log(first);
// console.log(all);

// let myObj = { profile:{name: "John", age: 31, city: "New York" }};

// let {profile,profile : {name,age,city}} = myObj;
// console.log(profile);

// let fetchApi = async () => {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let final = await res.json();
//   console.log(final);
// }
// fetchApi();

// let promiseOne = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log("Task completed");
//     resolve("success");
//   },2000);
// }).then((res) => console.log(res)).catch((err) => console.log(err))

// let promiseTwo = new Promise((resolve,reject) => {
//   let randomNum = Math.round(Math.random()*10);
//   if(randomNum>=5){
//     resolve(`success...`);
//   }else{
//     reject(`failed....`)
//   }
// }).then((res) => console.log(res)).catch((err) => console.log(err));

// let promiseOne = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve("task 1..");
//   },1000)
// })
// let promiseTwo = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve("task 2..");
//   },1000)
// })
// let promiseThree = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve("task 3..");
//   },1000)
// })
// async function wait() {
//   await promiseOne.then((res) => console.log(res)).catch((err) => console.log(err))
//   await promiseTwo.then((res) => console.log(res)).catch((err) => console.log(err))
//   await promiseThree.then((res) => console.log(res)).catch((err) => console.log(err))
// }
// wait();

// async function runPromise() {
//   let step1 = await new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve("step 1..");
//     },1000)
//   })
//   console.log(step1);
//   let step2 = await new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve("step 2..");
//     },1000)
//   })
//   console.log(step2);
//   let step3 = await new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve("step 3..");
//     },1000)
//   })
//   console.log(step3);
// }
// runPromise();

// let apiData = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res[0]))
//   .catch((err) => console.log(err));

// async function apiCall() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let final = await res.json();
//     console.log(final[0].name);
//   } catch (error) {
//     console.log(error);
//   }
// }
// apiCall();

// let ages = [19, 22, 25, 18, 20];
// let every = ages.every((a) => a>=18);
// console.log(every);

// let names = ["Ram", "Sita", "Lakshman", "Bharat"];
// let find = names.find((a) => a.length>4);
// console.log(find);

// let students = [
//   { name: "Yash", marks: 72 },
//   { name: "Aman", marks: 88 },
//   { name: "Ravi", marks: 60 }
// ];

// let sorted = students.sort((a,b) => a.marks-b.marks);
// console.log(sorted);
// let users = [
//   {name: "Yash", city: "Surat"},
//   {name: "Raj", city: "Vadodara"},
//   {name: "Amit", city: "Surat"}
// ];

// let grouped = users.reduce((acc,user) => {
//   if(!acc[user.city]){
//     acc[user.city] = [];
//   }
//   acc[user.city].push(user);
//   return acc;
// },{})

// console.log(grouped);

// let products = [
//   {name: "Laptop", category: "Electronics", price: 50000},
//   {name: "Shoes", category: "Fashion", price: 2000},
//   {name: "Phone", category: "Electronics", price: 30000},
//   {name: "T-shirt", category: "Fashion", price: 500},
//   {name: "Headphones", category: "Electronics", price: 2000}
// ];
// let category = products.reduce((acc,product) => {
//   if(!acc[product.category]){
//     acc[product.category] = [];
//   }
//   acc[product.category].push(product);
//   return acc;
// },{})

// console.log(category);
// let text = "apple mango apple banana mango apple kiwi banana";
// console.log(text.split(` `));

// let grouped = text.split(" ").reduce((acc,text) => {
//   if(!acc[text]){
//     acc[text] = 0;
//   }
//     acc[text]++;

//   return acc;
// },{})
// console.log(grouped);

// let users = [
//   {id: 1, name: "Yash"},
//   {id: 2, name: "Amit"},
//   {id: 3, name: "Raj"}
// ];

// let obj = users.reduce((acc,user) => {
//   acc[user.id] = user.name;
//   return acc;
// },{});
// console.log(obj);

// let arr = [1, [2, [3,[4, [5]]]]];
// console.log(arr.flat(Infinity));

// let items = [
//   {name: "Watch", price: 5000},
//   {name: "Perfume", price: 3000},
//   {name: "Backpack", price: 1500},
//   {name: "Shoes", price: 2500},
//   {name: "Headphones", price: 3500}
// ];

// let topThree = items.sort((a,b) => b.price-a.price).slice(0,3)
// console.log(topThree);

// let data = [
//   {id:1, name:"A"},
//   {id:2, name:"B"},
//   {id:1, name:"A"},
//   {id:3, name:"C"},
//   {id:2, name:"B"}
// ];

// let final = data.reduce((acc,d) => {
//   if(!acc.some((a) => a.id === d.id && a.name === d.name)){
//     acc.push(d);
//   }
//   return acc;
// },[]);

// console.log(final);

// let people = [
//   {name:"Yash", age:21},
//   {name:"Amit", age:30},
//   {name:"Amit", age:25},
//   {name:"Raj", age:21}
// ];

// let sorted = people.sort((a,b) => a.name.localeCompare(b.name));
// let sorted = people.sort((a,b) => {
//   if(a.age !== b.age){
//     a.age-b.age;
//   }
//   return a.name.localeCompare(b.name);
// })
// console.log(sorted);

// let max = nums.reduce((acc,num) => {
//   if(acc>num){
//     return acc;
//   }else{
//     return num;
//   }
// },0)
// console.log(max);

// let nums = [45, 100, 22, 999, 5, 88];

// function myMap(nums,callback){
//  return callback(nums);
// }
// function sum(nums){
//  let total = nums.reduce((acc,curr) => acc+curr,0)
//   return total;
// }

// let res = myMap(nums,sum);
// console.log(res);
// let arr = [1,1,2,3,3,3,4,5,5];

// let filtered = arr.reduce((acc,num) => {
//   if(!acc[num]){
//     acc[num] = [];
//   }
//   acc[num].push(num);
//   return acc;
// },{});
// console.log(filtered);
// let str = "name:Yash,age:21|name:Amit,age:25";
// let newStr = str.split("|").map((a) => {
//   let obj = {};
//   a.split(",").forEach((b) => {
//    let [key,val] = b.split(":");
//     obj[key] = val;
//   })
//   return obj;
// })
// console.log(newStr);
// let users = [
//   {name:"A", city:"Surat"},
//   {name:"B", city:"Surat"},
//   {name:"C", city:"Surat"},
//   {name:"D", city:"Vadodara"},
//   {name:"E", city:"Rajkot"}
// ];

// let filtered = users.reduce((acc,user) => {
//   if(!acc[user.city]){
//     acc[user.city] = [];
//   }
//   acc[user.city].push(user);
//   return acc;
// },{});

// let result = Object.keys(filtered).filter((a) => {
//   return filtered[a].length>2;
// })
// console.log(result);
// let nums = [10, 5, 20, 15, 30];

// let newNums = nums
//   .map((num) => {
//     return num * 2;
//   })
//   .filter((a) => {
//     return a >= 40;
//   })
//   .sort((a, b) => b - a);
// console.log(newNums);

// let compressed = [
//   {num: 2, count: 3},
//   {num: 5, count: 2}
// ];
// let a = {name:"Yash"};
// let b = {age:21};

// let c = Object.assign({},a,b);
// console.log(c);
// let user = { name: "Yash", email:"yash@gma);il.com" };
// console.log(Object.hasOwn(user,"email"));
// let arr = [["name","Yash"],["age","21"],["city","Surat"]];
// let obj = Object.fromEntries(arr);
// let string = JSON.stringify(obj).
// console.log(string);

// let arr = [{key:"name", value:"Yash"}, {key:"age", value:"21"}];
// let obj = arr.reduce((acc,item) => {
//   acc[item.key] = item.value;
//   return acc;
// },{});
// console.log(obj);

// let arr = ["Yash", 21, "Surat"];
// console.log({...arr});
// let settings = { theme:"dark", version:1 };
// Object.freeze(settings);


// settings.theme = "light";
// console.log(settings);
// let abc = JSON.stringify(Object.entries(settings).flat(Infinity)).length;
// console.log(abc);

// let arr = [{key:"name", value:"Yash"}, {key:"age", value:"21"}];
// console.log(Object.entries(arr));

// let wait = (ms) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve();
//         },ms)
//     })
// }
// let count = async() => {
//     await wait(1000);
//     console.log(1);
//     await wait(1000);
//     console.log(2);
//     await wait(1000);
//     console.log(3);
// }
// count();
// console.log(1);

// let arr = [100,"yash",20,"pokiya","c","f","z",5,"abc",2,6];
// let num = [];
// let str = [];
// let ch = [];
// arr.forEach((a) => {
//     if(typeof(a) === "string"){
//         if(a.length<=1){
//             ch.push(a);
//         }else{
//             str.push(a);
//         }
//     }else{
//         num.push(a);
//     }
// })

// console.log(num);
// console.log(str);
// console.log(ch);


// import {itemsMain} from './testDom.js';
// console.log(itemsMain);
    
// const user = {
//   profile: {
//     address: {
//       city: "Surat",
//     street : {
//          street(){
//             return "street101";
//         },
//         stree2 : "yashhhhh"
//     } 
//     }
//   }
// };

// console.log(user.profile.address.city);
// console.log(user?.profile?.address?.street?.street?.().stree2);

// let students = [
//   { name: "Yash", marks: 55 },
//   { name: "Raj", marks: 78 },
//   { name: "Amit", marks: 92 }
// ];

// let filtered = students.filter((a) => {
//   return a.marks > 60;
// })
// console.log(filtered);

// let names = ["yash", "raj", "amit"];
// let upper = names.map((a) => {
//   return a.toUpperCase();
// })
// console.log(upper);

// let products = [
//   { name: "TV", price: 20000 },
//   { name: "Mouse", price: 500 },
//   { name: "Bag", price: 300 }
// ];

// let finds = products.find((a) => {
//   return a.price > 500;
// })
// console.log(finds);
// let prices = [200, 350, 1000];
// let red = prices.reduce((acc,curr) => {
//   return acc+=curr
// },0);
// console.log(red);

// let word = "banana";

// let count = word.split("").reduce((acc,curr) => {

//   if(!acc[curr]){
//     acc[curr] = 0;
//   }
//   acc[curr]++;
//   return acc;
// },[]);

// console.log(count);

// let users = [
//   { name: "Yash", age: 22 },
//   { name: "Amit", age: 29 },
//   { name: "Raj", age: 18 }
// ];

// let sorted = users.sort((a,b) => b.age - a.age);
// console.log(sorted);

// let orders = [
//   { item: "laptop", price: 45000 },
//   { item: "mouse", price: 500 },
//   { item: "keyboard", price: 1500 }
// ];

// let mapped = orders.map((a) => {
//   return a.item;
// })

// let calc = orders.reduce((acc,curr) => {
//   return acc+=curr.price;
// },0);
// console.log(calc);

// let users = [
//   { name: "Yash", city: "Surat" },
//   { name: "Raj", city: "Vadodara" },
//   { name: "Amit", city: "Surat" }
// ];

// let grouped = users.reduce((acc,user) => {
//   if(!acc[user.city]){
//     acc[user.city] = [];
//   }
//   acc[user.city].push(user.name);
//   return acc
// },{})
// console.log(grouped);

// let arr1 = [1,2,3];
// arr1.push(4)
// let arr2 = [...arr1];
// console.log(arr2);

// function cloneArr(arr1,arr2){
//   return arr1.concat(arr2).join(",");
// }

// console.log(cloneArr(arr1,arr2));

// function sum(...arr2){
//  return arr2.reduce((acc,curr) => {
//     return acc+=curr;
//   },0);
// }


// console.log(sum(...arr1));
// let name = "yash";
// let id = 101;
// let x = {
//     name,
//     id
// };
// console.log(x);

// let arr = ["yash" , 25];
// let [name,age] = arr;
// console.log(name);
// console.log(age);

// let prices = [100, 200, 300];

// let includeGst = prices.map((a) => {
//     return a+=a*18/100;
// })
// console.log(includeGst);
let cart = [
  { price: 100, qty: 2 },
  { price: 50, qty: 4 }
];

let sumOfCart = cart.reduce((acc,curr) => {
    acc+=curr.price*curr.qty;
    return acc;
},0) 
console.log(sumOfCart);

let nums = [1, 2, 2, 3, 4, 4, 5];
let newArr = new Set(nums);
console.log(newArr);