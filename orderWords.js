// Create a function that orders a given string that contains numbers in the words.
// for example ->  is2 Thi1s T4est 3a returns Thi1s is2 3a T4est

function order(words){
    return words.split(' ').sort(function(a,b){
       return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

// the function above splits the given string with the space separator,
// sorts out each value of the new array with anonymous function which returns the bigger value between words digits that match the regular expression '\d' which means it contains a digit
// joins them all into a single string 
// then returns it.

console.log(order("is2 Thi1s T4est 3a"));