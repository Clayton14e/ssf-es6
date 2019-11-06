//assign fizzBuzz30 an arrow function that does not take any inputs.  fizzBuzz30 should output an array of all the numbers from
//1 through 30 replacing numbers divisible by 3 with 'fizz', numbers divisible by 5 with 'buzz' and numbers divisible by 3 and 5 with
//'fizzbuzz'

let fizzBuzz30;


fizzBuzz30 = () => {
    for(let i = 1; i <= 30; i++){
        let result = "";
        if(i % 3 == 0){
            result += 'fizz';
        }
        if(i % 5 == 0){
            result += 'buzz';
        }
        console.log(result || i);
    }
}


fizzBuzz30();


//Do not edit
module.exports = fizzBuzz30;