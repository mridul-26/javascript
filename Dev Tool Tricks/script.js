const dogs = [
    {
        name:'Snickers',
        age:2
    },
    {
        name:'hugo',
        age:8
    }
]

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string','HEllo');

// Styled
console.log('%c I am some great text','font-size:50px;background:red;')

//Warning
console.warn('Oh Nooo');

//Error
console.error('Shit!!!');

//Info
console.info('Crocodiles eat 3-4 people per year');

//Testing

console.assert(1 === 2,'You did not select the right operation');
//Executes only when wrong assertion

// Viewing DOM Elements
const p = document.querySelector('p');
console.dir(p);

// Grouping Together
dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years`);
    console.groupEnd(`${dog.name}`);
});


// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// Table Display
console.table(dogs);
