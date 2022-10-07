let object = {
    name: "ANI",
    email: "subhradeeppal@outlook.com"
}

let newArr = [];

for (key in object){
    newArr.push(object[key]);
}

console.log(newArr);