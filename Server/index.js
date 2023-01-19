const express= require("express")
const mongoose = require("mongoose")
const bodyParser= require("body-parser")
const cors = require("cors")
const app= express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27017/react-crud-api");
const Schema = mongoose.Schema;
const UserSchema = Schema({
    name:String,
    email:String,
    password:String
    
});

const User = mongoose.model("users", UserSchema)


app.get("/", async (req, res)=>{
    const user = await User.find()
    res.status(200).json({data:user})
})
app.post("/create",async (req, res)=>{
    const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    await newUser.save()
    res.status(201).json({message:"User Created"})
})

app.put("/update/:id",async (req, res)=>{
    User.findByIdAndUpdate({_id:req.params.id}, {name:req.body.name,email:req.body.email})
    .then(user=>{
        res.send(user)
    }).catch(err=>{
        res.send(err)
    })
})
app.get("/User/:id", async (req, res)=>{
    User.findById({_id:req.params.id})
    .then(user=>{
        res.send(user)
    }).catch(err=>{
        res.send(err)
    })
})
app.delete("/delete/:id", async (req, res)=>{
    User.findByIdAndDelete({_id:req.params.id})
    .then(user=>{
        res.send(user)
    }).catch(err=>{
        res.send(err)
    })
})
app.listen(5000)

