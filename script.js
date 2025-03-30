//external js
var b = 5;
console.log("Value of b is",b);
console.log("Type of b is",typeof(b));

var h = "Hello";
console.log(`${h} World`);
console.log("")

//object
console.log("Object")
const car = {
    name : "Ford mustang",
    price : 8500000,
    transmission : "Manual",
    wheels : "Alloy"
}
console.log(car);
console.log(car.name);
console.log(car.transmission);
console.log("")

//nested object
console.log("Nested Object")
const ford = {
    model : "Aspire",
    price : 750000,
    tyre : "CEAT",
    transmission : {
        type : "Manual",
        rpm : 9000,
        gears : 5
    }
}
console.log(ford);
console.log(ford.model);
console.log(ford.transmission.type);
console.log("")

//constant objects
console.log("constant objects");
const vehicle = {"brand" : "ford" , "model" : "aspire" , "price" : 10000};
vehicle.price = 20000;
vehicle.tyre = "ceat";
console.log("Vehicle name is",vehicle.model);
console.log("");

//arrays
console.log("Arrays")
let arr= [4,7,"Hello",true,1,6,'javascript','python'];
console.log('original',arr);
console.log('getting from index',arr[1]);
arr.splice(2,4,'world');
console.log('splice adding',arr);
arr.splice(1,3);
console.log('splice removing',arr);
console.log("");

//constant arrays
console.log("Constant arrays");
const cars = ["saab","volvo","bmw"];
console.log('original',cars);
cars[0] = "ford";
cars.push("Audi");
cars.push("Mercedes");
console.log('push',cars);
cars.pop();
console.log('pop',cars);
cars.shift()
console.log('shift',cars);
cars.unshift("porsche");
console.log('unshift',cars);
cars.sort();
console.log('sorted',cars);

const arr1 = [1,2];
const arr2 = [3,4];
const arr3 = [5,6,7,8];
const arr4 = ['hello','world'];
const merge = arr1.concat(arr2,arr3,arr4);
console.log('concat',merge);
const merge_2 = arr1.concat("Java");
console.log('concat element',merge_2);
merge.reverse();
console.log('reverse',merge);

const array = [4,3,76,5,8,6];
console.log(array.sort());
console.log("");

//symbols
console.log("Symbols")
var sym1 = Symbol('hello');
var sym2 = Symbol('hello');
var temp = sym1===sym2;
console.log(temp);
console.log("")

//string functions
console.log("String functions");
var str = "parul university";
var sli_001 = str.slice(1,8);
console.log(sli_001);
var pra = "pratham";
console.log(pra.slice(2,5));
console.log(str.slice(8,-3));
console.log('');

//loops
console.log("loops");
let i;
const num = [1,2,3,4,5];
for(i=0 ; i < num.length ; i++)
    console.log(num[i]);
console.log("")

//intervals
console.log("Intervals")
let interval = setInterval(function()
    {
        console.log("Hello world");
    },1000);            //here 1000 is in ms
clearInterval(interval);
console.log("Interval stopped");      //if this is not written then it will print hello world every 1 second