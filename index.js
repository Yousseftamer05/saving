let targetAmount = 200;
let dailySaving = 30;
let increaseEvery = 2;

let totalSavings = 0;
let day = 0;

while (totalSavings < targetAmount) {
  day++;
  totalSavings += dailySaving;

  console.log(
    `Day ${day}: Saved ${dailySaving} EGP | Total: ${totalSavings} EGP`,
  );

  if (day % increaseEvery === 0) {
    dailySaving += 10;
  }
}

console.log(`The goal was reached in ${day} days!`);
