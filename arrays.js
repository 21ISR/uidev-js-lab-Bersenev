const Numbers = [4, 5, 3, 5, 2, 4, 5, 3]
const average = Numbers.reduce((sum, grade) => sum + grade, 0) / Numbers.length;
const result = average.toFixed(2);
console.log(`Средний балл: ${result}`);

