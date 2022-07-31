let name1 = 'иван';
let surname1 = 'иванов';

let name2 = name1[0].toUpperCase() + name1.substr(1).toLowerCase();

let surname2 = surname1[0].toUpperCase() + surname1.substr(1).toLowerCase();

console.log(name1 == name2 ? 'Имя осталось без изменений' : 'Имя было преобразовано');
console.log(surname1 == surname2 ? 'Имя осталось без изменений' : 'Имя было преобразовано');