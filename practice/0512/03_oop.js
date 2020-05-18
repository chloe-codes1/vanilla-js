const chloe = {
    'name': 'Chloe',
    birth: '1995',
    'greeting': function(){
        return `Hi, This is ${name}`
    },
    farewell(){
        return `Bye~~ -${this.name}-`
    }
}

class Person {
    constructor(name, birth){
        this.name = name
        this.birth = birth
    }
    greeting() {
        return `Hi, This is ${this.name}`
    }
}

const camila = new Person('Camila', 1995)
const bella = new Person('Bella', 1993)


console.log(camila.name)
console.log(camila.greeting())
console.log(bella.name)
console.log(bella.greeting())

// 중간에 추가 가능!! -> 유연하다
bella.money = 100000000
console.log(bella.money)

/*
Python 에서는..

class Person:
    def __init__(self, name, birth):
        self.name = name
        self.birth = brith

    def greeting(self):
        return f'Hi, This is {self.name}'


*/


console.log(chloe.name)
console.log(chloe['birth'])
console.log(chloe.greeting())
console.log(chloe.farewell())