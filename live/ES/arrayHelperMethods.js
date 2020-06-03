// node [file 명] 으로 실행

global.console.log('ha')


// forEach
// const urls = ['https://...', 'www...', 'http://...']
// urls.forEach( url => {
//     axios.get(url)
//         .then()
//         .catch()
// })


// map
const arr = [1,2,3]
const newArr = arr.map(num => num+1)

// 풀버전 ... 이지만 arrow 가 간단하므로 arrow 쓸꺼얏
arr.map(function(num){
    return num +1
})

console.log(newArr)




// filter
// : 전체 순회하마ㅕ 조건을 만족하는 요소들을 찾음
const arr1 = [1,2,3,4,5,]
const newArr1 = arr1.filter(num => num %2)
console.log(newArr1)


// find
// : 조건을 만족하는 요소를 찾으면 요소를 리턴 (break)
const arr2 = [1,2,3,4,5]
const number = arr2.find(num => num ===2)
console.log(number)


// some
// : 요소들 중 하나라도 조건을 만족하면 ture, 아니면 false 를 return
const arr3 = [10, 20, 30]
const isBiggerThan20 = arr3.some(num => num > 20)
console.log(isBiggerThan20)


// every
// : 요소들 모두가 조건을 만족하면 true, 아니면 false 를 return
const arr4 = [10,20,30]
const allBiggerThan5 = arr4.every(num => num > 5)
const allBiggerThan11 = arr4.every(num => num > 11)
console.log(allBiggerThan5, allBiggerThan11)