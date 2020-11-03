//створити функцію яка виводить масив
// function createArr(arr) {
//     console.log(arr);
// }
// createArr([])

//- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
//
// function createArr(arr) {
//     for ( let i = 0; i < 20; i++ ) {
//         arr.push( Math.round( Math.random() * 100 ));
//     }
//     console.log( arr);
// }
// createArr([])

//- створити функцію яка приймає три числа та виводить та повертає найменьше.
// function calcNumb(){
//    let a = prompt('number1', '');
//    let b = prompt('number2', '');
//    let c = prompt('number3', '');
//     if(a>b&&a>c){
//         console.log(a);
//     }else if (c>a&&c>b){
//         console.log(c);
//     }else if(b>a&&b>c){
//         console.log(b);
//     }
// }
// calcNumb();

//- створити функцію яка приймає три числа та виводить та повертає найбільше.
// function calcNumb(){
//    let a = prompt('number1', '');
//    let b = prompt('number2', '');
//    let c = prompt('number3', '');
//     if(a<b&&a<c){
//         console.log(a);
//     }else if (c<a&&c<b){
//         console.log(c);
//     }else if(b<a&&b<c){
//         console.log(b);
//     }
// }
// calcNumb();

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function calcNumb(){
//     let a = prompt('number1', '');
//     let b = prompt('number2', '');
//     let c = prompt('number3', '');
//     console.log(Math.max(a,b,c))
//     console.log(Math.min(a,b,c)+" MIN")
// }
// calcNumb();
// Не знаю як зробити на будь яку кількість чисел.

//- створити функцію яка повертає найбільше число з масиву
// function createArr(arr) {
//    return Math.max.apply(null, arr)
// }
// let max = createArr([1,2,3,4,5,7,8,9,10])
// console.log(max)

//- створити функцію яка повертає найменьше число з масиву
// function createArr(arr) {
//    return Math.min.apply(null, arr)
// }
// let min = createArr([1,2,3,4,5,7,8,9,10])
// console.log(min)

//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function createArr(arr) {
//    return arr.join('')
// }
// let join = createArr([1,2,3,4,5,7,8,9,10]);
// console.log(join)

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function total(arr) {
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     let a = (arr.reduce(reducer));
//     console.log(a/arr.length)
// }
// total([1,2,3,4,5,7,8,9,10]);

//- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// obj = {
//     name:'asfsa'
// }
// obj2 = {
//     name:'asfsa'
// }
// obj3 = {
//     name:'asfsa'
// }
// mass = [obj,obj2,obj3 ]
//
// function createArr(arr) {
//     console.log(arr.length);
// }
// createArr(mass)

//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
obj1 = {
    name:'asfsa',
    key:'123'
}
obj2 = {
    name:'asfsa',
    key:'123'
}
obj3 = {
    name:'asfsa',
    key:'123'
}

mass = [obj1,obj2,obj3]

function createArr(arr) {
    for (let arrElement of arr) {
        console.log(arrElement)
        for (let obj of arrElement) {
            console.log(obj)
        }
    }
}
let arf = createArr(mass)
console.log(arf)
