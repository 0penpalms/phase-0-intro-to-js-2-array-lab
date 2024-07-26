// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function appendCat(name) {
    return [...cats, name];
}

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function prependCat(name) {
    return [name,...cats];
}

function removeFirstCat() {
    return cats.slice(1);
}

function removeLastCat() {
    // return cats.slice(0, cats.length - 1)
    return cats.slice(0, -1) 
}