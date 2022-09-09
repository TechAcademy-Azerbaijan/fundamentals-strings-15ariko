// Use these variables in your code

let s = "This is a cat sitting on a table"
let c = "t"

let count = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] == c) {
    count++;
  } else if (s[i] == "T") {
    count++;
  }
}
console.log(count);
