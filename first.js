'use strict'
// function logger() {
//     console.log(`my name is Sina`);
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}
const descFinland = describeCountry(`Finland`, `6 `, `Helsinki`);
console.log(descFinland);

const descIran = describeCountry(`Iran`, `80 `, `Tehran`);
console.log(descIran);

const descEngland = describeCountry(`England`, `60`, `London`);
console.log(descEngland);

//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;

}
const age1 = calcAge1(1991);
// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
const age2 = calcAge2(1991);

console.log(age1, age2);

function percentageOfWorld1(population) {
    return population / 7900 * 100
}
const iranPopulation = percentageOfWorld1(100);
console.log(iranPopulation);

const englandPopulation = percentageOfWorld1(50);
console.log(englandPopulation);

const portugalPopulation = percentageOfWorld1(20);
console.log(portugalPopulation);


const percentageOfWorld2 = function (population) {
    return population / 7900 * 100
}

const iranPopulation = percentageOfWorld2(100);
console.log(iranPopulation);

const englandPopulation = percentageOfWorld2(50);
console.log(englandPopulation);

const portugalPopulation = percentageOfWorld2(20);
console.log(portugalPopulation);


// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirment = 65 - age;
    // return retirment;
    return `${firstName} retires in ${retirment} years`
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1980, `Bob`));

const percentageOfWorld3 = population => population / 7900 * 100;
const iranPopulation = percentageOfWorld3(80);
console.log(iranPopulation);

const englandPopulation = percentageOfWorld3(60);
console.log(englandPopulation);

const portugalPopulation = percentageOfWorld3(50);
console.log(portugalPopulation);


function cutFruitPeices(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePeices = cutFruitPeices(apples);
    const orangePeices = cutFruitPeices(oranges);

    const juice = `juice with ${applePeices} peice of apples ${orangePeices} peices oforange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

console.log(fruitProcessor(4, 5));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirment = 65 - age;

    if (retirment > 0) {
        console.log(`${firstName} retires in ${retirment} years`);
        return retirment;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'jonas'));
console.log(yearsUntilRetirement(1950, 'mike'));




const calcAverage = (dolphinsscore, dolphinsscore, dolphinsscore, koalasScore1, koalasScore2, koalasScore3) => {
    const checkWinner = (dolphinsscore + dolphinsscore + dolphinsscore / 3) >= 2 * (koalasScore1 + koalasScore2 + koalasScore3 / 3);
    return `${dolphinsscore} are the winners`;
}
const highestScore = calcAverage(44, 23, 71);
console.log(highestScore);

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`koalas win (${avgKoalas} vs (${avgDolphins}) `)
    } else {
        console.log(`no team wins`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);


function percentageOfWorld1(populationPercent) {
    return populationPercent / 7900 * 100;
}


const describePopulation = function (country, population) {

    const percentagePopulation = percentageOfWorld1(population)
    const percentageTotal = `${country} has ${population} million people, which is about ${percentagePopulation} of the world population`
    return percentageTotal;
}

const iranPopulationPercentage = describePopulation('iran', 100);
console.log(iranPopulationPercentage);
const cutPeices = function (fruit) {
    return fruit * 4;

};

const fruitProcessor = function (apples, oranges) {
    const applePeices = cutPeices(apples);
    const orangePeices = cutPeices(oranges);

    const juice = `juice with ${apples} apples and ${oranges} oranges `
    return juice;
}
console.log(fruitProcessor(5, 8));



const populationPercent = function (population1) {
    const perecentCalculation = population1 / 7900 * 100;
    return perecentCalculation;
}

const describePopulation = function (country, population) {
    const percentCountry = populationPercent(population)
    const populationTotal = `${country} has ${population} million people, which is about ${percentCountry} of the world population`
    return populationTotal
}

const iranPopulation = describePopulation(`iran`, 80);
console.log(iranPopulation);


// const friend1 = `michael`;
// const friend2 = `steven`;
// const friend3 = `peter`;

const friends = ['michael', 'steven', 'peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['bob', 'ellis']

const firstName = 'jonas'
const jonas = [firstName, 'schmedtman', 2037 - 1991, 'teacher', friends];
console.log(jonas);

//Excercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);


const population = [80, 60, 100, 400];

console.log(population.length === 4);


// const percentages = [80, 60, 100, 400]

function percentageOfWorld1(populationPercent) {
    return populationPercent / 7900 * 100;
}

const percentages = [
    percentageOfWorld1(population[0]),
    percentageOfWorld1(population[1]),
    percentageOfWorld1(population[2]),
    percentageOfWorld1(population[3]),
]
console.log(percentages);


const friends = ['michael', 'steven', 'peter'];

//add elements
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);

friends.unshift('john');
console.log(friends)

//remove elements
friends.pop();//last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('steven'));
console.log(friends.indexOf('bob'));

friends.push(23);
console.log(friends.includes('steven'));
console.log(friends.includes('bob'));
console.log(friends.includes(23));

if (friends.includes('steven')) {
    console.log(`you have a friend called steven`)
};

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

}

const bills = [125, 555, 44]

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
]

const totals = [
    tips[0] + bills[0],
    tips[1] + bills[1],
    tips[2] + bills[2]
]

console.log(tips, totals);


const friends = ['michael', 'steven', 'peter'];

//Add elements
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);

friends.unshift('john');
console.log(friends);

//Remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('steven'));
console.log(friends.indexOf('bob'));

friends.push(23);
console.log(friends.includes('steven'))
console.log(friends.includes('bob'));
console.log(friends.includes(23));

if (friends.includes('steven')) {
    console.log('you have a friend called steven')
}

const neighbours = ['pakistan', 'iraq', 'afghanistan']

neighbours.push('utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('germany')) {
    console.log('probably germany a central european country')
}


neighbours[neighbours.indexOf('iraq')] = 'turkmenistan';
console.log(neighbours);

//Introduction to objects

const jonasArray = [
    'jonas',
    'schmedtman',
    2037 - 1991,
    'teacher',
    ['michael', 'peter', 'steven']
];


const jonas = {
    firstName: 'jonas',
    lastName: 'schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven']
};

const myCountry = {
    country: 'Iran',
    capital: 'Tehran',
    language: 'farsi',
    population: 70,
    neighbours: ['pakistan', 'iraq', 'afghanistan']
};

const jonas = {
    firstName: 'jonas',
    lastName: 'schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven']
};

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


const interestedIn = prompt('what do you want to know about jonas? choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);

} else {
    console.log('wrong request! choose between firstName, lastName, age, job, and friends ')
}

jonas.location = 'portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//challenge
//"jonas has 3 friends, and his best friend is called michael"
//retrieve jonas, 3, and michael
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


const myCountry = {
    country: 'Finlad',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['pakistan', 'iraq', 'afghanistan']
};

const newPopulation = myCountry['population'] - 2;//decreases population by 2 million
// const newPopulation = (myCountry.population + 2);//increases population by 2 million

console.log(`${myCountry.country} has ${newPopulation} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);


const jonas = {
    firstName: 'jonas',
    lastName: 'schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven'],
    hasDriversLicense: true,


    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license `
    }

};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.getSummary());


const mark = {
    fullName: 'markMiller',
    massKg: 78,
    heightMetre: 1.69,

    calcBMI: function () {
        this.bmi = this.massKg / this.heightMetre ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'johnSmith',
    massKg: 92,
    heightMetre: 1.95,

    calcBMI: function () {
        this.bmi = this.massKg / this.heightMetre ** 2;
        return this.bmi

    }
}

mark.calcBMI();
john.calcBMI();


if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s bmi (${john.bmi}) is higher than ${mark.fullName}'s bmi (${mark.bmi})  `);
} else if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s bmi (${mark.bmi}) is higher than ${john.fullName}'s bmi (${john.bmi})`)
};

//for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}`);
}
for (let voter = 1; voter <= 50; voter++) {
    console.log(`voter number ${voter} is currently voting`)
}


const jonas = [
    'jonas',
    'schmedtman',
    2037 - 1991,
    'teacher',
    ['michael', 'peter', 'steven'],
    true
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
    //reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //filling types Array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

//calculate total store them in an array
console.log(ages);

//continue and break
console.log('---ONLY STRINGS---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);

}

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);

}
