var User=require('../models/user');
module.exports=function(router){
    router.post('/users',function(req,res){
          var user=new User();
  user.username=req.body.username;
  user.password=req.body.password;
  user.email=req.body.email;
 if(req.body.username==null||req.body.username==""||req.body.password==null||req.body.password==""||req.body.email==null||req.body.email==""){
     res.json({success:false,message:"username email not provided"});
 }else{
     user.save(function(err){
         if(err){
            
              res.json({success:false,message:"user exits"});
         }else{
           
              res.json({success:true,message:"user created"});
         }
     });
    }
});
return router;
}