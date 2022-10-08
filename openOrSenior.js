//these functions will classify an array of players(age and handicap) in Senior or Open.
// if the age is greater than 50 AND handicap is greater than 7, the player will be classified as Senior, or else as a Open.


function openOrSenior(data){
    return data.map(([age,handicap]) => (age > 50 && handicap > 7) ? 'Senior' : 'Open');
}

// In the function above, the map function will execute the arrow function for each players that destructurate the player characteristics into age and handicap variables, compare them with the requisites then classify as Senior and Open with ternary operators.
function seniorOrOpen(data){
    return data.map(function(array){
        var age = array[0];
        var handicap = array[1];
        if(age > 50 && handicap > 7){
            return 'Senior'
        }
        else return 'Open';
    })
}
//the function above does exactly the same, but with an actual function block with variables declarations and if-else statement.
console.log(openOrSenior([[52,8],[53,9],[30,12]]))
console.log(seniorOrOpen([[52,8],[53,9],[30,12]]))