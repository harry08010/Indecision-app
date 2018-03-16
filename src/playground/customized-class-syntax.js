class OldSyntax {
    constructor() {
        this.name = 'Mike';
    }
    getGreeting() {
        return `Hi, My name is ${this.name}.`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log();

// new syntax

class NewSyntax {
    name = "jane";
    getGreeting = () => `Hi, my name is ${this.name}`;
}

const newSyntax = new NewSyntax();
const newGreeting = newSyntax.getGreeting;
console.log(newGreeting());