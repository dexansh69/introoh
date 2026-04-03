// const express = require("express");
// const app = express();

// var user = [{
//   name : "dev",
//   kidney : [
//     {
//       healthy : false
//     },{
//       healthy : true
//     }
//   ]

// }
// ]
// app.use(express.json());

// app.get("/",function(req,res){
//   dev_kidneys=user[0].kidney;
//   numberofkidneys = dev_kidneys.length;
  
  
//   healthy_kidney=0;
//   for(i=0;i<dev_kidneys.length;i++){
//     if(dev_kidneys[i].healthy){
//       healthy_kidney++;
//     }
//   }
//   number_unhealthykidney=0;
//   number_unhealthykidney= numberofkidneys-healthy_kidney;

//   res.json({
//     numberofkidneys,
//     healthy_kidney,
//     number_unhealthykidney
//   })
   
// })

// app.post("/",function(req,res){
//   const isHealthy = req.body.isHealthy;
//   user[0].kidney.push({
//     healthy : isHealthy
//   })
//   res.json({
//     msd : "Done! "
//   })
// })


// app.put("/",function(req,res){
// for(let i=0;i<dev_kidneys.length;i++){
//   dev_kidneys[i].healthy = true;

//   res.json({});
// }
// })

// app.delete("/",function(req,res){
//   let kidney_new=[];
//   for(let i=0;i<user[0].kidney.length;i++){

//     if(user[0].kidney[i].healthy){
//       kidney_new.push({
//         healthy : true
//       })
     
//     }
//  }
//  user[0].kidney = kidney_new;
//  res.json({
//   msg :  "after birth"
//  })


// })

// app.listen(3000);

const express = require("express");

const app = express();
app.use(express.json());
module.exports=app;



// to store todos(USING EMPTY ARRAY)

let todos = [];


// to get all todos 
app.get("/todos",function(req,res){
  res.json(todos);

});

// to get todo with specific id
app.get("/todos/:id",function(req,res){
  for(let i=0;i<todos.length;i++){
    if(todos[i].id===id){
      res.status(200).json(todo[i]);
    }
    else{
      res.status(404).send("Not Found");
    }
  }
});


// to post todo 
app.post("/todos",function(err,data){
  const newtodo = {
    id: Math.floor(Math.random() * 1000000),
    title : req.body.title,
    description : req.body.description
  }
  todos.push(newtodo);
  res.status(202).json(newtodo);
  
})


app.listen(3000);

