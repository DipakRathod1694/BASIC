// document.write("hello");
// console.log("welcome");
// window.alert("hiii");
var a=10;
var b=20;
let c=15;
// let b=20; you can not declare let again in same block.
// const d=20;
// e=25;
// document.write(b);
// console.log(a & b);   // AND
// console.log(a | b);   // OR
// console.log(~a);   // NOT
// console.log(a ^ b);   //XOR
// console.log(b << a);  //shift 

var w=5;
// if(w==1)
// {
//     console.log("Monday");
// }
// else if(w==2)
// {
//     console.log("Tuesday");
// }
// else if(w==3)
// {
//     console.log("Wednesday");
// }
// else if(w==4)
// {
//     console.log("Thursday");
// }
// else if(w==5)
// {
//     console.log("Friday");
// }
// else if(w==6)
// {
//     console.log("Saturday");
// }
// else if(w==7)
// {
//     console.log("Sunday");
// }
// else{
//     console.log("Invalid Value");
// }

// switch(w){
    
//     case 1:console.log("Monday");break;
        
//     case 2:console.log("Tuesday");break;

//     case 3:console.log("Wednesday");break;

//     case 4:console.log("Thursday");break;

//     case 5:console.log("Friday");break;

//     case 6:console.log("Saturday");break;

//     case 7:console.log("Sunday");break;

//     default:console.log("Invalid day");
// }

// if(a>b){
//     console.log("a is greater");
// }else{
//     console.log("b is greater");
// }

// var great = a>b ? "a is greater" : "b is greater";
// console.log(great);

// let s=50;
// let msg= s>120 ? "very fast" : s>=80 ? "fast" : "normal";
// console.log(msg);


// let num=55;
// while(num<50)
// {
//     console.log(num);
//     num+=2;
// }

// do{
//     console.log(num);
//     num+=2;
// }
// while(num<50)


// const min =1;
// const max =25;

// let number= Math.floor(Math.random()*(max-min+1))+min;

// let guess =0;
// let hint ="";
// let n=0;

// do{
//     let input=prompt('Please enter a number between 1 to 25---' +hint);
//     n = parseInt(input);
//     guess++;
//     if(guess>=5){
//         alert("You lose.");
//         break;}
//     else{
        
    

//     if(n> number){
//         hint="number is greater than the answer,please choose lower number";
//     }
//     else if(n< number){
//         hint="number is less than the answer,please choose greater number";
//     }
//     else if(n==number){
//         alert("you guessed it right!!!");
//     }
//     continue;
// }
// }
// while(n!=number)


// let num=prompt("Enter the number:-");
// let power=prompt("Enter the power :-");
var result=1;
// var i=0;

// while(i<power){
//     result= result*num;
//     i++;
    
// }
// for(var i=0;i<power;i++){
//     result*=num;
// }
// alert(result);


// for(var i=1;i<=num;i++)
// {
//     result*=i;
// }
// alert(result);

// if(num%1===0){
//     alert("it is integer");
// }
// else{
//     alert("it is not integer");
// }

// for(var i=1;i<=100;i++){
//     if(i%4==0){
//         console.log("Fizz");
//     }else{
//         console.log(i);
//     }
// }


/*for(i=1;i<=100;i++){
    // if(i%4==0 & i%6==0){
    //     console.log("FizzBuzz");
    // }
    // else if(i%4==0){
    //     console.log("Fizz");
    // }
    // else if(i%6==0){
    //     console.log("BUzz");
    // }
    // else{
    //     console.log(i);
    // }

    console.log(i % 4 == 0 ? (i % 6 == 0 ? 'FizzBuzz' : 'Fizz') : i % 6 == 0 ? 'Buzz' : i);
    // using ternary operator.

} */


/* Qeustion
Write a program that outputs all possibilities to put + or - or nothing between the numbers 1,2,…,9 (in this order) such that the result is 100. For example 1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100.
*/
var year=prompt("please enter the year");
var count=20;
// var result=true;
while(count>=0){
    if((year%4==0)&&(year%100 !=0) || (year%400==0)){
        // result=true;
        console.log(year);
        year++;
        count--;
    }else{
        year++;
    }
}

