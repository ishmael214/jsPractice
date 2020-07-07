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


// DAY 2    

var johnsAvg, mikesAvg, maryAvg;

johnsAvg = (89 + 120 + 103) / 3;
mikesAvg = (116 + 94 + 123) / 3;
maryAvg = (97 + 134 + 105) / 3;

if (johnsAvg > mikesAvg && maryAvg) {

    console.log('John\'s team hide the highest avg at' + ' ' + johnsAvg);
} 

    else if (maryAvg > johnsAvg && mikesAvg) {
    console.log('Mary\'s team hide the highest avg at' + ' ' +  maryAvg);
}

    else if (johnsAvg === mikesAvg && maryAvg) {
        console.log('both teams had the same avg at' + ' ' +  johnsAvg);
}

    else {

    console.log('Mike\'s team hide the highest avg at' + ' ' +  mikesAvg);
}

console.log(maryAvg, mikesAvg, johnsAvg);

// Day 2 take 2

function calculateAge (birthYear) {
    return 2020 - birthYear;
}

function yearsTillRetirement (birthYear, name) {
    const age = calculateAge(birthYear);
    const retirement = 60 - age;
    const superRetired = age - 60;

    if (retirement > 0) {
        console.log('Keep saving money' + ' ' + name + '. You don\'t retire for another' + ' ' + retirement + ' ' + 'years');
    } else {
        console.log( name + ',' + ' ' + 'this is how I know you\'re old. You retired' + ' ' + superRetired + ' ' + 'years ago.');
    }

}

yearsTillRetirement(1942, 'Clancy');
yearsTillRetirement(1999, 'Ish');


// Day 3 take 1 

const bills = [48, 124, 268];

const tips = [.20 * bills[0], .15 * bills[1], .10 * bills[2]];

const finalPrice = [(.20 * bills[0]) + 48, (.15 * bills[1]) + 124, (.10 * bills[2]) + 268, ];


console.log(tips);
console.log(finalPrice);

// original function
function tipCalculator (bill) {
    if (bill < 50) {
        console.log(bill * .20);
    }

    else if (bill < 200 && bill > 100) {
        console.log(bill * .15);
    }

    else {
        console.log(bill * .10);
    }
}

tipCalculator(bills[2]);

// more efficient function 

function newTipCalculator (bill) {
    let percentage
    
    if (bill < 50) {
        percentage = .2
    }

    else if (bill <= 200 && bill >= 100) {
        percentage = .15
    }

    else {
        percentage = .1
    }

    return percentage * bill
}


console.log(newTipCalculator(48));


const newTips = [newTipCalculator(bills[0]),
                 newTipCalculator(bills[1]),                          
                 newTipCalculator(bills[2])]

 console.log(newTips)   
 
 
const newFinalPrice = [bills[0] + newTips[0],
                       bills[1] + newTips[1],
                       bills[2] + newTips[2] ]


console.log(newFinalPrice);