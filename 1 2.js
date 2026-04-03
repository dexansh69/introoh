let a=[1,2,3,4,5,6];
let n=6;
for(let i=0;i<=n;i++){
    if((a[i]%2)===0){
        console.log(a[i]);
    }
}

// syntax of nested objects 

const user = {
    id :101,
    firstName : "devansh",
    address : {
        street : "520",
        city : "bathinda",
        zip : 151001
    }

};
console.log(user.address.street);

// reverse an array 

for(let i=0;i<=n/2;i++){
    let t=0;
    
    t=a[i];
    a[i]=a[n-1-i];
    a[n-1-i]=t;

}
for( let i=0;i<n;i++){
    console.log(a[i]);
}

// function call back 

function sum2(a,b,someFunction){
    const ans = someFunction(a,b);
    return ans;
}
function sum1(a,b){
    return a+b;

}
console.log(sum2(10,16,sum1));

setTimeout(sum2, 3*1000);
