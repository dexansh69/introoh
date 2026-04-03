const express = require("express");
const app = express();

var user = [{
  name : "dev",
  kidney : [
    {
      healthy : false
    },{
      healthy : true
    }
  ]

}
]

app.get("/",function(req,res){
  dev_kidneys=user[0].kidney;
  numberofkidneys = dev_kidneys.length;
  // for(i = 0;i<user.length;i++){
  //   numberofkidneys++;
  // }
  // healthy_kidney=0;
  // for(i=0;i<user.length;i++){
  //   if(user[0].kidney.healthy){
  //     healthy_kidney++;
  //   }
  // }
  // number_unhealthykidney=0;
  // number_unhealthykidney= numberofkidneys-healthy_kidney;

  res.send("number of kidneys "+ numberofkidneys);
   
})



app.listen(3000);