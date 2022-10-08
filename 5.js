const myFunc = (...args) => {
    let product = 1;

    for(key in args){
        product *= args[key];
    }

    return product;
}

console.log(myFunc(1, 2, 3));
console.log(myFunc(4, 5, 2, 10));