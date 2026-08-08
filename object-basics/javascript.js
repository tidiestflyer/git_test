let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

function mapToNames(humanLibrary) {
    let array = [];
    for(user of users) {
        array.push(String(user.name));
    }
    //alert(array);
}
mapToNames(users);