


// for(let i=0; i<=10; i++){
//     if(i%2 ==0)
//     console.log(i)
// }

//  let i = 0;
//  while(i<=10){
//     console.log(i)
//     i++
//  }


// for in loop in object
// let animal ={
//     name : "zebra",
//     leg : 4
// };

// for(let key in animal){
//     console.log(animal[key])
// }


///for in loop in array
 
// let names=["rahul","neha","Aman", "basith"];
// for(let index in names){
//     console.log(names)
// }


///strings ////
// var favshow ="game of thrones";
// console.log(favshow.at(6))


/////obejts exmple///
// let animal={
//     name: "zebra",
//     legs : 4,
//     color : "black"
// }
// console.log(animal)

// let names=["rahul","neha","Aman", "basith"];
//     console.log(names.push[2])
    
// function addition(a,b){
//     return a+b
// }

// console.log(addition(5,4))


// let num1 = 
// let num2 = prompt("enter num")
// let sum = Number(num1) + Number(num2)
// console.log(sum)


//// CALCULATOR CODE ///
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
        try{
        display.value =eval(display.value);
        }
        catch(error){
            display.value="Error";
        }
}
//// CALCULATOR CODE ENDS///


