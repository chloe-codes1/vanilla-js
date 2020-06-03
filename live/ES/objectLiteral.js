const name = 'chloe'
const obj1 = {
    name: name,
    sayHello: function() {
        return `Hi my name is ${this.name}`
    }
}

// 위와 아래는 같다
const obj2 = {
    // ES6+ 에서는 Obj 를 더 간결하게 선언할 수 있다!
    name,
    sayHello (){
        return `Hi my name is ${this.name}`
    }
}

console.log(obj1, obj2)