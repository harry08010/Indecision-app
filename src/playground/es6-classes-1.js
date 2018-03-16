class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreetting() {
        //return 'Hi, I\'m ' + this.name + '.';

        //es6 template string
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // accessing the parent class
        this.major = major;
    }
    hasMajor() {
        return !!this.major; //!!undefined => false
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` My major is ${this.major}.`
        }
        //return `${this.name} is ${this.age} year(s) old. My major is ${this.major}`;
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreetting() {
        let greeting = super.getGreetting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Student('Harry Feng', 24, 'Computer Science');
console.log(me.getDescription());


const trav = new Traveler('Liquor', 13, 'College Station');
console.log(trav.getGreetting());

const other = new Student();
console.log(other.getDescription());
