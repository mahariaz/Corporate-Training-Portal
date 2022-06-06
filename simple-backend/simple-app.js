//connection
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/training-db',(err)=>{
    if(!err){
        console.log('not error')
    }else{
        console.log(' error')
    }
})

const materialSchema = new mongoose.Schema({
    file:{type:String}
});
const userSchema = new mongoose.Schema({
    CourseName:{type:String}
});
const questionschema = new mongoose.Schema({
    questions:{type:String},
    answer:{type:String}
    
});

const aschema = new mongoose.Schema({
    tempAsses: questionschema,
    questions:[questionschema],
    time:{type:String}
    
});
const mySchema=mongoose.Schema({
    courseName:{type:String},
    overview:{type:String},
    startDate:{type:String},
    endDate:{type:String},
    crHrs:{type:String},
    price:{type:Number},
    username:{type:String},
    email:{type:String},
    password:{type:String},
    tempMaterial: materialSchema,
    material:[materialSchema],
    tempUser: userSchema,
    usercourse:[userSchema],
    tempAsses: aschema,
    assessment:[aschema]


});

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











