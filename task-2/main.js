const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let num = result.input;
  let first = num[0];
  let last = num[2];
  if (first > last) {
    console.log(first);
  } else if (last > first) {
    console.log(last);
  } else {
    console.log(`=`);
  }  
});
