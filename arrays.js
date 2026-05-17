const Numbers = [4, 5, 3, 5, 2, 4, 5, 3];
const average = Numbers.reduce((sum, grade) => sum + grade, 0) / Numbers.length;
const result = average.toFixed(2);
console.log(`Средний балл: ${result}`);

const Evaluations = [4, 5, 3, 5, 2, 4, 5, 3];
const highEvaluations = Evaluations.filter(grade => grade > 3);
const formattedEvaluations = highEvaluations.map(grade => `Оценка: ${grade}`);
console.log(formattedEvaluations);

const Sorting = ["банан", "яблоко", "вишня", "абрикос", "груша"]
Sorting.sort();
const resultString = Sorting.join(', ');
console.log(resultString);

const products =[
    { name: "Ноутбук", price: 75000 },
    { name: "Мышь", price: 1500 },
    { name: "Монитор", price: 32000 },
    { name: "Клавиатура", price: 3500 },
    { name: "Наушники", price: 8000 }];

const Products = products.filter(product => product.price < 10000);
console.log("Дешевые товары:", Products);
const productNames = products.map(product => product.name);
console.log("Названия:", productNames);
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(`Суммарная стоимость:`, totalPrice);

const numbers = [12, 45, 7, 33, 18];
const numberGreaterThan40 = numbers.some(num => num > 40);
console.log("Есть число > 40?", numberGreaterThan40);
const allNumbers5 = numbers.every(num => num > 5);
console.log("Все числа > 5?", allNumbers5);

