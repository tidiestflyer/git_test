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
    filtered = arr.filter((letter) => letter >= a && letter <= b);
    return filtered;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filterRange(array, 5, 7);