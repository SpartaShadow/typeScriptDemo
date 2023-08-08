"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const btnElement = document.querySelector('button');
const numArr = [];
//const numArr:Array<number> =[];
const stArr = [];
//const stArr:Array<string> =[];
function printNow(resObj) {
    console.log(resObj.val);
    console.log(resObj.timestamp);
}
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + '' + num2;
    }
}
btnElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const stResult = add(num1, num2);
    numArr.push(result);
    stArr.push(stResult);
    console.log(result);
    console.log(stResult);
    console.log(numArr);
    console.log(stArr);
    printNow({ val: result, timestamp: new Date() });
});
const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("it worked");
    }, 1000);
});
p1.then(pr => console.log(pr.split("w")));
