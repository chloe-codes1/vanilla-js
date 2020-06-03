// de struct uring (비구조, 비구조화)
// data structure => Object, Array
// 비구조화 => Object, Array를 해체한다
const student = {
    name: '김ssafy',
    course: 'ssafy 3rd',
    email: 'ssafy@ssafy.com',
    phone: '01012345678'
}

// [1번 방법]
// const name = student.name
// const course = student.course
// const email = student.email
// const phone = student.phone

// 위의 코드와 아래의 코드는 완전히 같다

// [2번 방법] => key와 변수명이 같아야 한다
// const { name } = student
// const { course } = student
// const { email } = student
// const { phone } = student


// 위의 코드와 아래의 코드도 완전히 같다

// [3번 방법] => key와 변수명이 같아야 한다 / 위치가 아니라 변수 명! 순서 상관 없음!
const { name, course, email, phone} = student

console.log(name, course, email, phone)


// 실전
function getStudentInfo1(student){
    console.log(`Hi my name is ${student.name}, email is ${student.email}`)
}

getStudentInfo1(student)

function getStudentInfo2 ({ name, course, email, phone}){
    console.log(`Hi, my nmae is , email is ${email}`)
}

// why?
function saveStduent1 (name, course, email, phone, id, major){}

saveStudent('김싸피', '싸피3기', '@ssafy.com')

function saveStudent2({ name, course, email, phone }) {
    return `${name}, ${course}`
}

saveStudent2