let x1 = 5;
let y1 = 8;

let x2 = 5;
let y2 = 5;

let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

console.log(Math.sqrt(
    Math.pow(cathetus1, 2) * Math.pow(cathetus2, 2)
));