function camelize (string) {
    splitString = string.toLowerCase().split("-");
    camelCase = splitString.filter((word) => {
        if(word != splitString[0]) {
            return true
        } else {
            return false
        }
    })
    .map((word) => word.substr(0, 1).toUpperCase() + word.substr(1, word.length - 1))
    camelCase.unshift(splitString[0])
    camelCase = camelCase.join("");
    
    return camelCase;
}

//console.log(camelize("The-star-spangled-banner"));

function filterRange (arr, a, b) {
    filtered = arr.filter((num) => num >= a && num <= b);
    return filtered;
}

const arrayImmutable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(filterRange(arrayImmutable, 5, 7));

function filterRangeInPlace(arr, a, b) {
    for(i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--
        }
    }
}
let arrayMutable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filterRangeInPlace(arrayMutable, 5, 7);
//console.log(arrayMutable);

let arrayToSort = [5, 2, 1, -10, 8];

function sortArrayDecrease(arr) {
    arr.sort().reverse();
}
sortArrayDecrease(arrayToSort);
//console.log(arrayToSort);

const arrayOfWords = ["HTML", "Javascript", "CSS"];

function copySorted(arr) {
    return arr.sort();
}

let sortedArrayOfWords = copySorted(arrayOfWords);
//console.log(sortedArrayOfWords);

let arrayToBeShuffled = [1, 2, 3];

function shuffle(arr) {
    length = arr.length;
    for(i = 0; i < length; i++) {
        randomIndex = Math.floor(Math.random() * length)
        arr.push(arr[randomIndex]);
        arr.splice(randomIndex, 1)
    }
}

shuffle(arrayToBeShuffled);
//console.log(arrayToBeShuffled);


const strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(arr) {
    array = [];
    for(i = 0; i < arr.length; i++) {
        if(array.includes(arr[i]) == false) {
            array.push(arr[i]);
        }
    }
    return array;
}

console.log(unique(strings));