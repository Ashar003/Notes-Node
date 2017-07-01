var square = x => x * x;

console.log(square(9));

var user = {
    name: 'Akash',
    sayHi: () => {
        console.log(`HI. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(`HI. I'm ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt();