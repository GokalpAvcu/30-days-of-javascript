// 1- Explain the difference between forEach, map, filter, and reduce.
/*Foreach ,map,filter,reduce fonksiyonları arraylerde(diziler) kullanılan fonksiyonlardır. 
Kullanıldığı array’in orjinalinde değişkliğe sebep olmadıkları için immutable(mutasyona uğratmayan) fonksiyonlardır. 
Her biri, çalışırken içinde bir fonksiyon çalıştırır. Bu ayrı fonksiyona ise call back function denir. */

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//3-Use forEach to console.log each country in the countries array.
countries.forEach((country) => {
  console.log(country);
});

//4-Use forEach to console.log each name in the names array.
names.forEach((name) => {
  console.log(name);
});

//5-Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => {
  console.log(number);
});

//6-Use map to create a new array by changing each country to uppercase in the countries array. (BÜYÜK HARF)
let upperCaseCountries = countries.map((country) => {
  return country.toUpperCase();
});
console.log(upperCaseCountries);

//7-Use map to create an array of countries length from countries array.
let countriesLength = countries.map((country) => {
  return country.length;
});
console.log(countriesLength);

//8-Use map to create a new array by changing each number to square in the numbers array
let squareNum = numbers.map((number) => {
  return number * number;
});
console.log(squareNum);

//9-Use map to change to each name to uppercase in the names array
let upperCaseNames = names.map((name) => {
  return name.toUpperCase();
});
console.log(upperCaseNames);

//10-Use map to map the products array to its corresponding prices.
let prices = products.map((product) => {
  return `${product.product}: ${product.price}`;
});
console.log(prices);

//11-Use filter to filter out countries containing land.
let countriesWithLand = countries.filter((country) => {
  return country.toLowerCase().includes("land");   // küçük harfe dönüştürme
});
console.log(countriesWithLand);

//12-Use filter to filter out countries having six character.
let countriesWith6chars = countries.filter((country) => {
  return country.length === 6;
});
console.log(countriesWith6chars);

//13-Use filter to filter out countries containing six letters and more in the country array.
let countriesMax6Chr = countries.filter((country) => {
  return country.length >= 6;
});
console.log(countriesMax6Chr);

//14-Use filter to filter out country start with 'E';
let countriesChrE = countries.filter((country) => {
  return country[0].toLowerCase === "e";
});
console.log(countriesChrE);

//15-Use filter to filter out only prices with values.
let pricesWithValues = products.filter(product =>{
  return product.price > 0;
})
console.log(pricesWithValues)

//16-Bir diziyi parametre olarak alan ve ardından yalnızca dize öğeleriyle bir dizi döndüren getStringLists adlı bir işlev bildirin.
//arr'ı parametre olarak aldım
const getList = (arr) => {
  let aa = arr.filter(item => {
    return typeof item === "string"
  })
  return aa;
}
let aa = getList(["victor", 3, 5, "kenneth"]);
console.log(aa);


//17-Sayılar dizisindeki tüm sayıları toplamak için reduce kullanın.
let sumOfNumbers = numbers.reduce((aa,bb)=>{
  return aa + bb;
})
console.log(sumOfNumbers)

//18-Tüm ülkeleri birleştirmek ve şu cümleyi oluşturmak için Reduce metodunu kullanın : Estonya, Finlandiya, İsveç, Danimarka, Norveç ve IceLand kuzey Avrupa ülkeleridir.








//19-Explain the difference between some and every







//20-Use some to check if some names' length greater than seven in names array






//21-Use every to check if all the countries contain the word land







//22-Explain the difference between find and findIndex.







//23-Use find to find the first country containing only six letters in the countries array







//24-Use findIndex to find the position of the first country containing only six letters in the countries array








//25-Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.









//26-Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.