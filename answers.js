// this is to return the sum of the two numbers
var twoNum = function (num1,num2){
var answer = prompt ("would you like to add, subtract, mult, or div?");
    switch(answer){
        case 'add':
            alert(parseInt(num1)+parseInt(num2));
            break;
        case 'subtract':
            alert(parseInt(num1)-parseInt(num2));
            break;
        case 'mult':
            alert(parseInt(num1)*parseInt(num2));
            break;
        case 'div':
            alert(parseInt(num1)/parseInt(num2));
            break;
        default:
            alert(0);
            break;
    }
}
twoNum(5,4)
   