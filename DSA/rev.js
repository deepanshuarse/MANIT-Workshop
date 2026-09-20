console.log('you are in rev');

let a = 132;
let rev = 0;
for (let i = a; i > 0; i = Math.floor(i / 10)) {
    let digit = i % 10;
    rev = rev * 10 + digit;
}
console.log('the reverse of ' + a + ' is:');
console.log(`${rev}`);