const ordersSet = new Set([
  "Pasta",
  "pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);
console.log(new Set("Jonas"));
// check size obj Set
console.log(ordersSet.size);
// check exist values in obj Set
console.log(ordersSet.has("Pizza")); // true
console.log(ordersSet.has("Bread")); // false
ordersSet.add("Garlic"); // add values to Obj set
ordersSet.delete("Pizza"); // delete
// ordersSet.clear(); // clear
console.log(ordersSet);
// #note: thuộc tính new Set chỉ thêm vào object những phần tử không giống phần tử còn lại, khách nhau riêng biệt

for (const order of ordersSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = new Set(staff);
// chuyển từ set về mảng thường
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
