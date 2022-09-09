const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let num = result.input;
  let bad = 0;
  let good = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] == 2) {
      bad++;
    } else if (num[i] == 5) {
      good++;
    }
  }
  if (bad > good) {
    console.log("2");
  } else if (good > bad) {
    console.log("5");
  } else if (good == bad) {
    console.log(`=`);
  }
  
});
