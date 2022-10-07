let object = {
    name: "ANI",
    email: "subhradeeppal@outlook.com"
}

let newArr = [];

for (key in object){
    newArr.push(key);
}

console.log(newArr);