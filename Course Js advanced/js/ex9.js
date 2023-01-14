/*// #> 103
"use strict";

const restaurant = {
  name: "Le Quang Minh Duc",
  location: "Loc Ha - Ha Tinh",
  categories: ["Piza", "Mỳ Cay", "Trà Sữa"],
  starterMenu: ["Gà quay", "Lợn Quay", "Dog Quay"],
  mainMenu: ["Pizza", "Pasta", "Risoto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Giải nén arr
const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

let [main, secoundary] = restaurant.categories;
// console.log(main, secoundary);

// Gán giá trị và thay đổi giá trị cho 2 biến bằng biến trung gian
// C1
// const temp = main;
// main = secoundary;
// secoundary = temp;
// console.log(main, secoundary);
// C2
// [main, secoundary] = [secoundary, main];
// console.log(main, secoundary);

// Lấy giá trị của mảng gán vào hàm
restaurant.order(2, 0);
console.log(restaurant.order(2, 0)); // [Dog quay , Pizza]

// Đặt tên cho giá trị của hàm trả return về mảng
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Giải nén và đặt tên cho vị trí từng giá trị trong mảng
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [e, f]] = nested;
console.log(i, e, f);

// Default values
// Khai báo let thì có thể thay đổi giá trị truyền vào
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// #> 104
const restaurant = {
  name: "Le Quang Minh Duc",
  location: "Loc Ha - Ha Tinh",
  categories: ["Piza", "Mỳ Cay", "Trà Sữa"],
  starterMenu: ["Gà quay", "Lợn Quay", "Dog Quay"],
  mainMenu: ["Pizza", "Pasta", "Risoto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutaing variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(obj); // {23,7,14}

({ a, b } = obj);

console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23
