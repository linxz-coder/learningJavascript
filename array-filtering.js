let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filtered = numbers.filter(function evenNumbers (number) {
  return number % 2 === 0; //三个等号是严格相等，即类型也相等；两个等号是相等
}
);

console.log(filtered); 