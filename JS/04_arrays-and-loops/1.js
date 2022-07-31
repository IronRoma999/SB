let n = 0;
let m = 100;

let range = Math.abs(m - n);
let min = Math.min(n, m);
     
for (let i = 0; i < 100; ++i) {
    let numberInRange = Math.round(Math.random() * range);
    fibo.push(min + numberInRange);
}