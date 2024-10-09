// NO1  array sort
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);


// NO2  array  reverse
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// console.log(fruits);


// NO3  array sort & reverse
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits);


// NO4  array assending
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b){
//     return a- b;
// });
// console.log(points);


// NO5  array decending
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b){
//     return b - a;
// });
// console.log(points);

// NO6 random number
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(){
//     return 0.5 - Math.random()
// });
// console.log(points);


// NO7 max/min bar korar buil in function
// let kub = [8, 9, 56, 45, 88, 1]

// function myArrayMax(arr) {
//   return Math.max.apply(null, arr);
// }
// let array = myArrayMax(kub);
// console.log(array);


// NO8 short an array of object targeting year
// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

// cars.sort(function(a, b){
//     return a.year - b.year
// });
// console.log(cars);


// NO5 if shortin bay string. in this case it is complex and try it
// js to case sencitive tai sob guloke lowercase kore nice. ai function udesho hol -1/0 return kora

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

//   cars.sort(function(a, b){
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
//   });
//   console.log(cars);