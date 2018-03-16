// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };

// const add = (a, b) => {
//     //console.log(arguments); // arguments object is not accessible in arrow function
//     return a + b;
// };

// console.log(add(55, 1,101));

const user = {
    name: 'Harry',
    cities: ['College Station', 'Austin', 'Seattle'],
    printPlaceLived() {
        // console.log(this.name);
        // console.log(this.cities);


        // const cityMessages = this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city;
        // });
        // return cityMessages;
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlaceLived());

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((element) => element * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
