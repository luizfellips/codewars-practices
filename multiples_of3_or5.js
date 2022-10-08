
//this function returns the sum of all multiples of 3 and 5 below a given number.

function solution(number){
    var sum = 0;
    for(let i = 1; i<number;i++){
      if(i % 3 === 0 || i % 5 === 0){
        sum += i;
      }
    }
    return sum;
  }

  console.log(solution(10));