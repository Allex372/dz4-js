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
// const obj1 = {
//     name:'asfsa',
//     key:'123'
// }
// const obj2 = {
//     name:'asfsa',
//     key:'123'
// }
// const obj3 = {
//     name:'asfsa',
//     key:'123'
// }
//
// const mass = [obj1,obj2,obj3];
//
// const countObjectKeys = (array) => {
//     let count = 0;
//     for(let i=0;i <array.length; i++) {
//         for(let key in array[i]) {
//             count++;
//         }
//     }
//     console.log(count);
// }

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// let mass1 = [1,2,3,4,5];
// let mass2 = [3,4,5,6,7];
//
// function arrTogether(arr1, arr2){
//     let countIter = 0;
//     const arr1Length = arr1.length;
//     const arr2Length = arr2.length;
//
//     if (arr1Length === arr2Length) {
//         countIter = arr1Length
//     } else if(arr1Length > arr2Length) {
//         countIter = arr1Length - (arr1Length - arr2Length);
//     } else {
//         countIter = arr2Length - (arr2Length - arr1Length)
//     }
//
//     const newArray = [];
//
//     for(let i=0; i< countIter; i++) {
//         const arr1Value = arr1[i];
//         const arr2Value = arr2[i];
//
//         newArray.push(arr1Value + arr2Value);
//     }
//
//     return newArray;
// }
//
// console.log(arrTogether(mass1, mass2));

//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

//- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// let mass1 = [1,0,2,3,0,5,6]
//
// function zeroInEnd(mass1){
//     console.log(mass1);
//
//     for (let i = 0; i < mass1.length; i++) {
//         if (mass1[i] === 0 ){
//         let [element] = mass1.splice(i, 1);
//          mass1.push(element)
//         }
//     }
//
//     console.log(mass1)
// }
// zeroInEnd(mass1);

//- Додає в боді блок з текстом "Hello owu"
// function addDiv(){
//     let createDiv = document.createElement('div')
//     createDiv.className = 'new-div';
//     createDiv.style.width = '200px';
//     createDiv.style.height = '200px';
//     createDiv.innerText = 'hello owu'
//     document.body.appendChild(createDiv)
// }
// addDiv()

// //- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addDiv(){
//     let createDiv = document.createElement('div')
//     createDiv.className = 'new-div';
//     createDiv.style.width = '200px';
//     createDiv.style.height = '200px';
//     createDiv.innerText = 'hello owu'
//     document.body.appendChild(createDiv)
// }
// addDiv()

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів. Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці