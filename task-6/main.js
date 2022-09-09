const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let n = result.input.split("");
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    if ((n[i] == " " || n[i] == "!" || n[i] == ",") && n[i + 1] !== " ") {
      count++;
    }
  }
  console.log(count);  
});
