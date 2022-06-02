//connection
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/training-db',(err)=>{
    if(!err){
        console.log('not error')
    }else{
        console.log(' error')
    }
})

const mySchema=mongoose.Schema({
    courseName:{type:String},
    overview:{type:String},
    startDate:{type:String},
    endDate:{type:String},
    crHrs:{type:String},
    price:{type:Number},
    username:{type:String},
    email:{type:String},
    password:{type:String}

});
// const userSchema=mongoose.Schema({
//     username:{type:String},
//     email:{type:String},
//     password:{type:String}


// });
const Course=new mongoose.model("Course",mySchema);
const User=new mongoose.model("User",mySchema);
module.exports={
    Course,User

}





const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const courseRoute=require('./routes/courseRoute.js');
const userRoute=require('./routes/userRoute.js');


const app=express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.listen(3000,()=> console.log('Server started at p : 3000'));

app.use('/courses',courseRoute);
app.use('/users',userRoute);











