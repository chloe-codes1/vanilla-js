// 1. 선언식
function add (num1, num2){

    return num1 + num2
}

add(1,2)
// def add(num1, num2):


// 2. 표현식
const sub = function(num1, num2){
    return num1 - num2
}

sub(2,1)
// sub = lambda 입력값: 출력값


// 3. Arrow Function
const arrow = function(name){
    return `hello ${name}`
}

const arrow = (name) => {
    return `hello!! ${name}`
}

// 인자가 하나일 때
const arrow = name => {
    return `hello!!! ${name}`
}

// 한줄로 줄여라 
const arrow = name => {return `hello!{name}`}

//arrow function 끝판왕
// (1) 인자는 1개
// (2) return이 존재 & expression
const arrow = name => `hello!!!! ${name}`