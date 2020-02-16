function sayHelloToConsole() {
  console.log("Hello")
}
console.log("===================================");
sayHelloToConsole()
// alert("Hello")
console.log("===================================");
function sayHello(name = "незнакомец") {
  // if (name === undefined) {
  //   name = "незнакомец"
  // }
  // name = name || "незнакомец"
  alert("Hello " + name + "!")
}
// sayHello("Женя")
// sayHello()
console.log("===================================");
let adminName = "Иннокентий"
function logUser() {
  let userName = "Иван Иваныч"
  console.log(userName)
  console.log(adminName)
}
logUser()
// console.log(userName)
console.log(adminName)
console.log("===================================");
function getName() {
  let myName = "Женя"
  return myName 
}
let user = getName()
console.log(user)
console.log("===================================");
function makeCoffee(cups, withMilk) {
  if (withMilk) {
    return console.log("Варю " + cups + " кофе с молоком")
  }
  return console.log("Варю " + cups + " кофе без добавок")
}
makeCoffee(24, false)
makeCoffee(3, true)
makeCoffee(8)
console.log("===================================");
function findMax(a, b) {
  if (a === b) {
    return a + " и " + b + " равны"
  }
  if (a > b) {
    return a + " больше, чем " + b
  }
  return b + " больше, чем " + a
}
let maximum = findMax(12, 10)
findMax(130, 150)
findMax(10, 10)
console.log(maximum)
console.log(findMax(10, 10));


console.log("===================================");
function showQuote(text, author = "Неизвестный автор") {
  if (text === undefined) {
    return
  }
  return console.log(text + "(c)" + author)
}
showQuote("Умная мысль человека ", "умный человек")
showQuote("Умная мысль человека ")
showQuote()
console.log("===================================");
function addOne(a) {
  return a + 1
}
console.log(addOne(40))
console.log("===================================");
function nextEven(a) {
  if (a % 2 == 0) {
    return a + 2;
  }
  return a + 1;
}
console.log(nextEven(11));
console.log(nextEven(46));
console.log("===================================");
