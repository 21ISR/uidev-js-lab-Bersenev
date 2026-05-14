const sentence = " javascript — это просто! ";
const trimmed = sentence.trim();
const resultSentence = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
console.log(resultSentence);

const firstname = "Иванов"
const lastname = "Иван"
const group = "21 Иср"
const score = "4.75"

console.log(`Студент ${firstname} + ${lastname}, группа ${group}, средний балл: ${score}.`);

const StrDate = "2025-03-15";
const [year, month, day] = StrDate.split("-");
const formattedDate = `${day}.${month}.${year}`;
console.log(formattedDate);

const str = "Node.js разработчик";
const startNode = str.startsWith("Node");
const endDeveloper = str.endsWith("Разработчик");
console.log(`Начинается на "Node": ${startNode}`);
console.log(`Заканчивается на "Разработчик": ${endDeveloper}`);

const Numbers = 42;
console.log("42".padStart(10, "0"));
