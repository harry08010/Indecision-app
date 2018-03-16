var nameVar = 'Harry';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Mike';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

// Block scoping

var fullName = 'Harry Feng';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);