// const fs = require("fs")

// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data);

// })

// setTimeout(()=>{
//     console.log("hello pussy cat")
// },0)

// let a=0;

// for(i=0;i<=10000000;i++){
//     a=a+i;
// }
// console.log(a);
// console.log("hi there again pussy cat");

// my own function to read a file(which is async)

const fs = require("fs");

function gunnusucks(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        cb(data);
    });
}
function fine(something){
    console.log(something);
}
gunnusucks(fine);