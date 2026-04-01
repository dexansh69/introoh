// wothout promises
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

// with promises 

function chunnureads(){
   return new Promise(function(resolve){
      fs.readFile("a.txt","utf-8",function(err,data){
         resolve(data);
      });
   });
}
function onDone(data){
   console.log(data);
}
chunnureads().then(onDone);