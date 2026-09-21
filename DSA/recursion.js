// WRONG 

// let n = 51;
// let dp = new Array(51);
// dp[0] = 1;
// dp[1] = 1;
// for (let i = 2; i < n; i++) {
//   dp[i] = dp[i - 1] * dp[i - 2];
// }
// for (let i = 0; i < n; i++) {
//   console.log(dp[i]+" ")
// }

// let n = 51;

// let dp = [];

// dp[0] = 1;
// dp[1] = 1;

// for (let i = 2; i < n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
// }

// for (let i = 0; i < n; i++) {
//     console.log(dp[i]);
// }

// TC = o(n)
// we have to reduce the TC of this code to puch it on the leetcode

let n = 51;
function rep () {
  let a = 1;
  let b = 1;

  for (let i = 2; i < 51; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
// c is out of scope
  return b;
}

console.log(`This is the 50th term : ${rep()}`);

// TC = 0(1)