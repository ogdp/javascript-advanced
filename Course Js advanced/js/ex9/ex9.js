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

/*// #> 104
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
*/

/* // #> 105 : The Spread Operator

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
  oderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

// Copy array
const mainMenuCopy = [...arr];

// Join 2 arrays
const menu = [...arr, ...badNewArr];
console.log(menu);

// Interables: arrays, strings, maps, sets, NOT objects
const str = "Jonas";
// Cắt chia nhỏ từng phần tử trong chuỗi gán vào mảng letters mới
const letters = [...str];
console.log(letters);
// Cắt nhỏ xuất ra dạng chuỗi từng ký tự có khoảng cách
console.log(...str);
// const ingredients = [
//   prompt("Let's make pasta ! Ingredient 1?"),
//   prompt("Let's make pasta ! Ingredient 2?"),
//   prompt("Let's make pasta ! Ingredient 3?"),
// ];
// // C1
// restaurant.oderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // C2
// restaurant.oderPasta(...ingredients);
// // console.log(ingredients);

// Objects
const newRestaurant = {
  founderIn: 1998,
  ...restaurant,
  founder: "Minh Duc",
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
// Thay đổi tên ở ObjCopy thì Obj Gốc k thay đổi
restaurantCopy.name = "Ristorante Roma";

console.log(restaurantCopy);
console.log(restaurant);
// <<<<<<<__END__>>>>>>> */

// #> 106 Rest Pattern and Parameters
