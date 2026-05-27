// programe for objects

// const mobile = {
//     mobileName: "one plus",
//     ram: 64,
//     camera: 24,
//     price: 20000
    
// };
// console.log(mobile.ram);


// programe of  use operator  for student result
// let score = prompt("enter your score (0-100):");
// let grade;
// if(score >=90 && score<=100){
//     grade= "A"
// }
// else if (score >=80 && score <=90){
//     grade = "B"
// }
// else if (score >=70 && score <=80){
//     grade = "C"
// }
// else if (score >=60 && score <=70){
//     grade = "D"
// }
// else if (score >=40 && score <=50){
//     grade = "F"
// }


// console.log("grade=", grade);
// programe for studend record
// let record ={
//     name:"drishti",
//     age:3,
//     player: "cricket"

// }
// console.log(record.name);
// programe for vote elegiblity
// for(let age = 0; age <= 100; age++){
//     if(age >=18){
//         console.log("you are elegible for vote");
//     }
//     else{
//         console.log("you are not elegible for vote");
//     }
// }
// for loop 
// let sum = 0;
// for (let i=1; i<=5; i++){
//     sum=sum +i;
// }
// console.log("sum=" ,sum);
// while loop condition pehlr hi check hoti hai
// let i= 1;
// while(i <=5){
//     console.log("i=",i);
//     i++;
    
// }
// do while loop condition last me check hoti hai
//  let i= 1;
//  do{
//     console.log("i=", i);
//      i++;
    
// }
// while(i <= 5);
// for -of loop it used for string variable and arrays
// let str ="ankur";
// let size =0
// for(let i of str){
//     console.log("i=",i);
//    size++; 
// }
// console.log("size=", size);
// for =in loop used for objects its loop return ket valuse of object
// let student ={
//     name: "ankur",
//     age: 24,
//     cgpa: 8.00,
//     pass: "true"
// }
// for (let key in student){
// console.log("key=",key, "value=",student[key]);
// }
// for print 0 to 1oo
// for (let num=0; num<=100; num++){
//     console.log("num=",num);
    
// }
// print all even num from 0 to 100
// for(let i=0; i<=100; i++){
//     if(i%2===0){
//         console.log("i=", i);
        
//     }
//     else{

    
// }
// }

// for odd no, print
// for(let i=0; i<=100; i++){
//     if(i%2!==0){
//         console.log("i=", i);
        
//     }
//     else{

    
// }
// }
// for game
// let gameNum=30;
// let userNum = prompt(" gusse the game number: ");
// while(userNum != gameNum){
//     userNum=("you enter worng Number. gusse again:")

// }
// console.log("conratulation, you entered right number");
// strings are immutable 
// strings methods
// let cha= "ankur";
// console.log(cha.length);

// let cha = "ankur"
// console.log(cha.toUpperCase());
// let cha = "ankur";
// console.log(cha.toLowerCase);
// let cha1="ankur"
// let cha2="chindariya"
// console.log(cha1+cha2);
// let cha = "ankur"
// console.log(cha.slice("2"));
// let cha="ankur";
// console.log(cha.replace("n","l"));
// let cha ="ankur";
// console.log(cha.replaceAll("ankur","chindariya"));

// array = array is a collection of items and arrray are mutable
// array method
// let marks =[32,54,64,78,60,80,90]
// console.log(marks);
// length is property of array to check array length//
// console.log(marks.length);

// araay indices//
// it used for find value in array
// arr[0] , arr[1] ,arr[3]
// let marks =[32,54,64,78,60,80,90]
//  let arr[1] = 40

// console.log(marks.arr[1]);

// looping over an array = print all elements of array {array me loop kese  use karte hai}
// using for loop
// let faimly = ["drishti", "ridhvi", "ankur" ]
// for(let i=0; i<faimly.length; i++){
//     console.log(faimly[i]);
    
// }
// using for of loop
// let heros = ["drishti", "ridhvi", "ankur" ]
// for(let hero of heros){
//     console.log(hero);
    
// }/
// use with strings methods
// let cities =["mumbai", "dehli", "kanpur", "noida"]
// for(let city of cities){
//     console.log(city.toUpperCase());
    
// }
// find avg marks of array
// let marks =[45, 60 ,50 ,67,78];
// let sum =0;
// for(let val of marks){
//     sum+= val;
// }
// let avg = sum / marks.length
// console.log(`avg marks of the class= ${avg}`);
// ten percent off array solving problame by  using for-off loop
// let arr = [250,300,650,900,50];
// i=0;
// for(let  val of arr){
//     console.log(`value at index ${i} = ${val}`);
//     let offer= val/10;
//     arr[i] = arr[i] - offer;
//     console.log(`value after offer ${arr[i]}`);
    
//     i++;
    
// }
// using for loop
// let arr = [250,300,650,900,50];
// let i= 0;
// for (let i=0; i<arr.length; i++){
//     let offer= arr[i]/10;
//     arr[i] -= offer

// }
// console.log(arr);
// Array methods //
// Push() ; add to end
// Pop()  ; delet from end & retun 
// toString() ; convert array into string
// concat() ; joins multiple arr and return result
// unshift() ; add to start
// slice() ; original array ko change nhi karta {return a piece of array}
// splice() ; original array ko change karne ke liye use hota hai {add, remove , replace}
// shift() ; delet from start and return


// let palyItems= ["bat", "ball", "football","batminton"];
// palyItems.push("chess","bollyboll","caram")
// console.log(palyItems);
// let palyItems= ["bat", "ball", "football","batminton"];
// palyItems.pop()
// console.log(palyItems);
// let palyItems= ["bat", "ball", "football","batminton"];

// console.log(palyItems.toString());
//chapter 5
//what is Functions in js
//block of code that performs a specific task can be invoked whenever needed/

//what is callback function / higher order function//
//ans= here it is a function to execute for each Element in the array//
//a callback is a function passed as an orgument to another function//
// for each loop ke saat hi callback function use hota hai// 
// let nums =[1, 2, 3 , 4, 5 ,6];
// nums.forEach((nums) => {
    

// console.log(nums * nums);


// })

  //some more array methods imp 

 // map method = creat a new array with the result of operation. 
  //the value call back return are used to form new array//
//   let nums =[1, 2, 3 , 4, 5 ,6];
//   let newArr = nums.map((val) =>{
//     return(val*val)
//   });

// console.log(newArr);


//filter method = creat new array element that give true for a condition/filter/

//     let nums =[1, 2, 3 , 4, 5 ,6];
//     let evenArr = nums.filter((val) =>{

//     return (val%2===0)

//         })
//    console.log(evenArr);
        
//reduce methods = perform some operation and reduces the array to a single value. 
// it returns that single value/
// let nums =[1, 2, 3 , 4, 5 ,6];
//  let add = nums.reduce((res, curr)=>{
// return(res+curr)
// })
// console.log(add);



















