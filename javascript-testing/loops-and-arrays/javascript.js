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

console.log(camelize("The-star-spangled-banner"));

function filterRange (arr, a, b) {
    filtered = arr.filter((num) => num >= a && num <= b);
    return filtered;
}

const arrayImutable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterRange(arrayImutable, 5, 7));

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
console.log(arrayMutable);