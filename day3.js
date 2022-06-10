console.log('Hello from day3.js');

var scores = [100,90,80,70,60];
sum = 0;

for(i=0;i<scores.length;i++){
    sum += scores[i]
}

var average = sum / scores.length;
console.log(sum);
console.log(average);

function show() {
    var result = document.getElementById('result');
    console.log(result.innerText);
    var nowDate = new Date();
    result.innerText = nowDate.toLocaleString();
  }
  