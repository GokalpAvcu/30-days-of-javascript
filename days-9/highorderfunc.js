// callback
const fonksiyon = number => number ** 2

function cube(cb, number){
    return cb(number) * number
}

// console.log(cube(fonksiyon,3))


// Higher order functions return function as a value​
const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3
        }
        return c
    }
    return b
}

//console.log(a(5)(10)(20))

// Let us see were we use call back functions. For instance the forEach method uses call back.
const numbers = [1,3,5,7,9]
let total = 0
let calculate = number => total += number
numbers.forEach(calculate)

//console.log(total)

/*Setting time
In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

setInterval
setTimeout */

function sayHello() {
    console.log("Hello")
}
// setInterval(sayHello,3000) // her 3 saniyede bir sayHello yazmaya devam eder

// Gelecekte ki zaman diliminde bir kod blogunu calistirmak icin
// setTimeout kullanırız

function sayHello(){
    console.log("Hello")
}
//setTimeout(sayHello,5000)

//clearInterval 
//clearTimeout

const interval = setInterval(sayHello,1000)
const timeout = setTimeout(() => {
    clearInterval(interval)
    console.log("interval işlemi iptal edildi")
},5000)

setTimeout(() => {
    clearTimeout(timeout)
    console.log("timeout işlemi iptal edildi, interval devam edecek...")
},3000)

// Functional Programming

// forEach
// Bir dizi öğelerini yinelemek için kullanılır. forEach'i yalnızca dizilerle kullanırız . 
// Öğeler, dizin parametresi ve dizinin kendisi ile bir geri arama işlevi alır. Dizin ve dizi isteğe bağlıdır.

let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => console.log(num))
console.log(sum)

// Output: 1,2,3,4,5

/*let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)

console.log(sum)
Output: 15 */

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

// Output: FINLAND DENMARK SWEDEN NORWAY ICELAND

// map
// Bir dizi öğelerini yineleyin ve dizi öğelerini değiştirin. 
// Öğeleri, indeksi, dizi parametresini içeren bir geri çağırma işlevi alır ve yeni bir dizi döndürür.
// map() fonksiyonu filter() fonksiyonunda olduğu gibi herbir element için bir callback fonksiyonu çağırır ve aynı parametreleri geçirir. 
// Callback fonksiyonu tarafından döndürülen değerleri bir dizide biriktirir ve sonuç olarak bu diziyi döndürür.

const modifiedArray = arr.map(function (element, index, arr) {
    return element
  })

let users = [
    {
        id: 1,
        name: "Tayfun",
        age: 29
    },
    {
        id: 2,
        name: "Ahmet",
        age: 24
    },
    {
        id:3,
        name: "Mehmet",
        age: 29
    }
]

users = users.map(user => { // her bir user'i mapledim (yani aldım)
    if(user.id == 2){  // id'si 2 olan Ahmet'i Hakan olarak değiştirdim
        user.name = "Hakan"
    }
    return user
})

console.log(users) 

/*const name = ["Gökalp", "Uygar", "Tayfun", "Ömer", "Ali"]
const nameToUpperCase = name.map((name) => name.toUpperCase())
console.log(nameToUpperCase) */

const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
console.log(countriesFirstThreeLetters)

// filter

// Filtreleme koşullarını tam olarak dolduran ve yeni bir dizi döndüren öğeleri filtreleyin.

// filter() fonksiyonu dizideki herbir eleman için içerisine yazılan callback fonksiyonunu çağırır. Bu fonksiyonu çağırırken de birinci parametre olarak sıradaki elemanı (elem), 
// ikinci parametre olarak geçerli sıra numarasını (i), üçüncü parametre olarak da dizinin kendisini (dizi ) verir. filter() , callback fonksiyonunun true değerini döndürdüğü elemanları bir dizi olarak geri döndürür.

const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

const countriesHaveFiveLetters = countries.filter(
    (country) => country.length === 5
  )
  console.log(countriesHaveFiveLetters)

  const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log(scoresGreaterEighty)

// reduce

/*arr.reduce((acc, cur) => {
    // some operations goes here before returning a value
   return 
  }, initialValue) */

/*const numbers = [1, 2, 3, 4, 5]
const sum = numbers1.reduce((acc, cur) => acc + cur, 0)

console.log(sum) */

// every 

// tüm öğelerin bir açıdan benzer olup olmadığını kontrol edin. Boolean değerini döndürür.

// her bir elemanı bizim koşulumuzu karşılayıp karşılamadığını kontrol ediyor. 
// her birisinin onu karşılaması gerekiyor. Her birisi karşılıyorsa true dönüyor

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true

// some 

// every ile aynı. tek farkı elemanlardan herhangi biri koşula uygun ve geçerliyse true döner

/*const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true */

/*const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr) // false */

// find 
// koşulu sağlayan ilk elemanı döndürür

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

/*const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find((name) => name.length > 7)
console.log(result) */
// output: Asabeneh

/*const numbers = [1,3,5,6,9]
console.log(
    numbers.find(number => number 3)
)*/
// output: 5

// sort

// Sıralama yöntemleri, dizi öğelerini artan veya azalan düzende düzenler. Varsayılan olarak, sort() yöntemi değerleri dizeler olarak sıralar. Bu, dize dizisi öğeleri için iyi çalışır ancak sayılar için geçerli değildir. Sayı değerleri string olarak sıralanırsa ve bize yanlış sonuç verir. Sıralama yöntemi, orijinal diziyi değiştirir.
// Sıralama yöntemini kullanmaya başlamadan önce orijinal verileri kopyalamanız önerilir .

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted


/*const numbers = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14] */

