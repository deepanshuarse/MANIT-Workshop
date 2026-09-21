let arr = ['o','l','l','e','h'];
let left = 0;
let right = arr.length - 1;

// let const var

while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
}

console.log(arr);






