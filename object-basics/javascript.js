let john = { name: "John", surname: "Smith", id: 1, age: 25 };
let pete = { name: "Pete", surname: "Hunt", id: 2, age: 30  };
let mary = { name: "Mary", surname: "Key", id: 3, age: 28  };

let users = [ john, pete, mary ];

function mapToNames(humanLibrary) {
    let array = [];
    for(user of users) {
        array.push(String(user.name));
    }
    alert(array);
}
//mapToNames(users);

/*
function mapToObjects1 (humanLibrary) {
    for(i = 0; i < users.length; i++) {
        users[i].fullname = users[i].name + " " + users[i].surname;
    }
    console.log(users);
}
mapToObjects1(users);
*/

function mapToObjects2(humanLibrary) {
    let library = [];
    let user = [];
   for(i = 0; i < users.length; i++) {
    library[i] = {};
    library[i].fullname = users[i].name + " " + users[i].surname;
    library[i].id = users[i].id;
    } 
    console.log(library);
}

//mapToObjects2(users);

const mapToObjects3 = users.map((user) => ({
    //fullname: `${user.name} ${user.surname}`,
    fullname: user.name + " " + user.surname,
    id: user.id,
}));
//console.log(mapToObjects3);

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}

sortByAge(users)
console.log(users);