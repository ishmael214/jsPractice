// CODING TEST 1

/* BLANKING BEGIN

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

// day 4 take 1

const findBmiMark = function () {
    return mark.bmi = this.weight / (this.height * this.height)
}

const findBmiJohn = function () {
    return john.bmi = this.weight / (this.height * this.height)
}

const mark = {
    name: 'mark',
    weight: 480,
    height: 13,
    bmi: findBmiMark
}

const john = {
    name: 'john',
    weight: 745,
    height: 18.6,
    bmi: findBmiJohn

}

mark.bmi();
john.bmi();


if (john.bmi > mark.bmi) {
    console.log(john.name + ' has a higher bmi than' + ' ' + mark.name + ' at a BMI of ' + john.bmi)
} 
    else if (john.bmi === mark.bmi) {
        console.log('Both ' + john.name + ' & ' + mark.name + ' got the same bmi at ' + john.bmi)
    }

    else {
    console.log(john.name + ' go getcha ass in the gym right now because ' + mark.name + ' has a higher bmi than you at ' + mark.bmi +'.')
}

// day 5 take 1


const restaurantBills = [42, 48, 124, 180, 268]
const restaurantTips = []
const restaurantTotalBill = []

 for (let i = 0; i < restaurantBills.length; i++) {
        if (restaurantBills[i] <= 50) {
            restaurantTips.push(restaurantBills[i]*.2);
            restaurantTotalBill.push((restaurantBills[i]*.2) + restaurantBills[i]);
        }

        else if (restaurantBills[i] > 50 && restaurantBills[i] < 200) {
            restaurantTips.push(restaurantBills[i]*.15);
            restaurantTotalBill.push((restaurantBills[i]*.15) + restaurantBills[i]);
        }

        else if (restaurantBills[i] >= 200) {
            restaurantTips.push(restaurantBills[i]*.10);
            restaurantTotalBill.push((restaurantBills[i]*.1) + restaurantBills[i]);
        }

   // restaurantTotalBill.push(restaurantBills[i])
} 

console.log(restaurantBills);
console.log(restaurantTips);
console.log(restaurantTotalBill);

const marksRestaurantBills = [45, 77, 110, 375]
const marksRestaurantTips = []

for (let i = 0; i < marksRestaurantBills.length; i++) {
    if (marksRestaurantBills[i] <= 50) {
        marksRestaurantTips.push(marksRestaurantBills[i]*.2);
        
    }

    else if (marksRestaurantBills[i] > 50 && marksRestaurantBills[i] < 200) {
        marksRestaurantTips.push(marksRestaurantBills[i]*.15);
        
    }

    else if (marksRestaurantBills[i] >= 200) {
        marksRestaurantTips.push(marksRestaurantBills[i]*.10);
        
    }
}

console.log('RESPECTTT');

console.log(marksRestaurantTips);

console.log('RESPECTTT');
/*
let totalTips = 0;

for (let i of marksRestaurantTips) {
    totalTips += i
    
}


let avg = totalTips / marksRestaurantTips.length

console.log(totalTips)

console.log(avg);



const markTotalTips = marksRestaurantTips.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});

console.log(markTotalTips);

const markAvgTips = markTotalTips/marksRestaurantTips.length;
console.log(markAvgTips);

const johnTotalTips = restaurantTips.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});

console.log(johnTotalTips);

const johnAvgTips = johnTotalTips/ restaurantTips.length;
console.log(johnAvgTips);

if (johnAvgTips > markAvgTips) {
    console.log(mark.name + ' you cheap son of a bitch you couldn\'t afford to tip ' + (johnAvgTips - markAvgTips) + ' more cents to keep up with John? I can\'t eat out with you anymore, and I want a divorce.')
} else {
    console.log(john.name + ' you cheap son of a bitch you couldn\'t afford to tip ' + (markAvgTips - johnAvgTips) + ' more cents to keep up with Mark? I can\'t eat out with you anymore, and  I want a divorce')
}


BLANKING END */


let john = {
    name: 'john',
    bills: [42, 48, 124, 180, 268],
    calcTips: function() {
        this.tips = [];
        this.totalCost = [];
        
        for (let i = 0; i < this.bills.length; i++) {
            const bills = this.bills[i];
            let percentage
            if (bills < 50) {
                percentage = .2
            }

            else if (bills >= 50 && bills <= 200) {
                percentage = .15
                
            }

            else {
                percentage = .1
            }

            this.tips[i] =  bills * percentage
            this.totalCost[i] = (bills * percentage) + bills
        }
        
    }

};

let mark = {
    name: 'mark',
    bills: [45, 77, 110, 375],
    calcTips: function() {

        this.tips = [];
        this.totalCost = [];
        
        for (let i = 0; i < this.bills.length; i++) {
            const bills = this.bills[i];
            let percentage
            if (bills < 100) {
                percentage = .2
            }

            else if (bills >= 100 && bills <= 300) {
                percentage = .10
                
            }

            else {
                percentage = .25
            }

            this.tips[i] =  bills * percentage
            this.totalCost[i] = (bills * percentage) + bills
        }
        
    }

};

john.calcTips();
mark.calcTips();

function calcAvgTips(tips) {
    sum = 0
    for (let i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }

    return sum / tips.length
}

john.averageTip = calcAvgTips(john.tips);
mark.averageTip = calcAvgTips(mark.tips);

console.log(john);
console.log(mark);

