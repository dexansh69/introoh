
function print(n){
    console.log(n);
}
for(let i=30;i>=0;i--){
    
    setTimeout(print(i),(31-i)*1000);
}