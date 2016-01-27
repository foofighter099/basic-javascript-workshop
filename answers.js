// this is to return the character at the position represented by the number
var numChar = function(string,number) {
    return string.substr((parseInt(number)-1),1);
}
console.log(numChar("abcdefghijklmnopqrstuvwxyz",20))