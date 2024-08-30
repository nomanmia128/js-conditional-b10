/**
 * TERNARY --> three parts
 * 
 *  ?  :
 * 
 * condition ? do someting when true: do something when false
 */

const age = 113;

// normal if-else
// if(age >= 18){
//     console.log('you can vote');
// }
// else{
//     console.log('Ghumi thako');
// }

// simple ternary
// age >= 18 ? console.log('vote dio') : console.log('Ghumi thko')

let price = 500;
const isLeader = false;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
// console.log(price);

// OPTIONAL: semi-advanced ternary
if(isLeader === true){
    if(price > 1000){
        price = price / 2;
    }
    else{
        price = 0;
    }
}
else{
    price = price;
}
