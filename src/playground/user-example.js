const user = {
    name: 'Andrew',
    age: '26',
    location: 'College Station'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );