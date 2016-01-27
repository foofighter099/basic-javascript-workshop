// this is to reverse the characters in the string
function factorial(num){
    if (num < 0) {
        return -1;
    }else if (num == 0) {
        return 1;
    }
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }
    return tmp;
}
console.log(factorial(8))