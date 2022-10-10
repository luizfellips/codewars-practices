function pigIt(str){
    var strArray = str.split(' ');
    var pigLatin = [];
    let regexp = new RegExp(/([a-zA-Z])/);
    for(word of strArray){
        if(regexp.test(word)) {
            console.log(word.substring(1),word[0])
            pigLatin.push(word.substring(1) + word[0] + "ay");
        }
        else {
            pigLatin.push(word);
        }
    }
    return pigLatin.join(" ");
}



  console.log(pigIt('Pig latin is cool'))