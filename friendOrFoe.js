function friend(friends){
    return friends.filter(function(name){
        return name.length == 4;
    })
}
// this function will filter the given array, preserving all elements with length equal to 4.

function friend_version2(friends){
    return friends.filter(name => name.length == 4);
}
// arrow-function version;

console.log(friend(["Ryan", "Kieran", "Mark"]))