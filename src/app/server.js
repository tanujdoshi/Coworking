var express=require('express')
var bodyparser=require('body-parser')
var app=express()
app.use(bodyparser.json())

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//all db things are here
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/coworking", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
var reqvisitschema = new mongoose.Schema({
    name: String,
    email: String,
    mn:Number
});// {collection : 'user'});
var reqvisit = mongoose.model("reqvisit", reqvisitschema);
//var user=require('./schemas/users')


var signupschema = new mongoose.Schema({
    name: String,
    email: String,
    mn: Number,
    password: String
  }); // {collection : 'user'});
  var signup = mongoose.model("signup", signupschema);
  

app.post('/requestvisit',async (req,res)=>{
    const email = req.body.email
    const resp=await reqvisit.findOne({email})
   var emailregister=false
   console.log("In server")
   if(resp)
   {
       console.log("oh no");
           res.status(200).json({
               emailregister: true
           });
   }
   else{

   new reqvisit({ name: req.body.name,
       
        email:req.body.email,
        mn:req.body.mn}).save(function(err,data){
            if(err)
            {
                console.log("oh no");
                res.status(500).json({
                    isSucceed: false
                    });
            }
            else{
                console.log(data)
                console.log("love you baby")
                res.status(200).json({
                isSucceed: true
                });
            }

        })
    }
    
})


app.post('/login',async (req,res)=>{
    console.log(req.body)
    const {email,password}=req.body
    const resp=await signup.find({email,password})
    console.log("email and pass by user:"+email+" "+password)
    console.log("response"+resp)
   

            if(!resp)
            {
                console.log("oh no");
                res.status(200).json({
                    isLogin: false
                    });
            }
            else{
                res.status(200).json({
                isLogin: true,
                userd:resp
                });
            
            }
            });

        
        
            app.post("/signupdata", async (req, res) => {
                const email = req.body.email;
                const resp = await signup.findOne({ email });
                var emailregister = false;
                console.log("In server");
                if (resp) {
                  console.log("oh no");
                  res.status(200).json({
                    emailregister: true
                  });
                } else {
                  new signup({
                    name: req.body.name,
                    password: req.body.pass,
                    email: req.body.email,
                    mn: req.body.mn
                  }).save(function(err, data) {
                    if (err) {
                      console.log("Sign up error" + err);
                      res.status(500).json({
                        isSucceed: false
                      });
                    } else {
                      console.log(data);
                      console.log("Sign up data successfully");
                      res.status(200).json({
                        isSucceed: true
                      });
                    }
                  });
                }
              });
              

app.listen(8000,()=>console.log('server is listening at 8000'))