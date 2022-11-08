function fizzBuzz(input){
let result;
if(num % 3===0 && num % 5===0){
    result="fuzzbuzz"
} else if(num % 5===0){
    result= "buzz"
} else if(num % 3===0){
    result ="fuzz"
}else{
    result=num;
}
return result;


  
}
console,log(fuzzBuzz(3))  
console.log(fuzzBuzz(5))
console.log(fuzzBuzz(15))
console.log(fuzz(7)) 


module.exports = fizzBuzz
