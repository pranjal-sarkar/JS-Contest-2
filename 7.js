let myArr = [
    {
        name:"Srijan",
        roll:34
    },
    {
        name:"Sagnik", 
        roll:33
    },
    {
        name: "Subhradeep",
        roll:35
    }
];

myArr.sort(function(a, b){
    return b.roll - a.roll;
})

console.log(myArr);