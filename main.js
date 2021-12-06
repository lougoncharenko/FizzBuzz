//problem solving fizzbuzz

/* Pseudo code:
take the users input
print out numbers 1 to user's number
multiples of three print Fizz
Multiples of five print buzz
multiples of 3,5 pring Fii Buzz



*/

let input= parseInt(prompt("Please enter a number to FizzBuzz up to"));


for (let i=1; i<=input; i++) {
    if( i%5===0 && i%3===0){
        console.log('FizzBuzz');
    }
    else if (i%3===0) {
        console.log("Fizz");
    } else if (i%5===0){
        console.log("Buzz");
    
   
    } else {
        console.log(i)
    }
}
