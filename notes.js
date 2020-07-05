// CODING TEST 1

var markHeight, markBmi, johnHeight, johnBmi, johnMass, markMass;

markHeight = 8;
johnHeight = 12;

markMass = 420;
johnMass = 860;

markBmi = markMass / (markHeight * markHeight);
johnBmi = johnMass / (johnHeight * johnHeight);

console.log(markBmi);
console.log(johnBmi);

var bool = markBmi > johnBmi;

console.log(bool);

console.log('I know my body mass indexes was all types of messed up but John has a lower bmi than Mark and thats' + ' ' + bool);

// on that note i'm done with Day 1 of this javascript course so i'm gonna call it a night. gg
