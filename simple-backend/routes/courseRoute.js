
const express=require('express');
const router=express.Router();
const Course=require('../simple-app.js');
const multer = require('multer');

const storage=multer.diskStorage({
    destination:'../src/assets/',
    filename: function(req,file,cb) {
        cb(null,file.originalname);
    }
})
const fileFilter = ((req,file,cb) => {
    if(!file.originalname.match(/\.(jpg|png|PNG|txt)$/)) {
        cb(null,true);
    } else {
        cb(null,false);
    }
});
const upload = multer({
   storage:storage,
   
});
const avatar = multer({
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|png|PNG|txt)$/))
        return cb(new Error('This is not correct format of file'));
        cb(undefined,true)
    }
})

router.post('/material',upload.single('material'),async(req,res) =>{
    console.log(req.file)
    console.log("njhu")


        const course = new Course.Course();
        course.courseName=req.body.courseName;
        course.overview=req.body.overview;
        course.startDate=req.body.startDate;
        course.endDate=req.body.endDate;
        course.crHrs=req.body.crHrs;
        course.price=req.body.price;
       
        if(typeof req.file=== 'undefined')
        {
            course.material=[{
                file: '',
            }]
        } else {
            
            course.material=[{
                file: req.file.path,
            }]
        }
		// course.material=req.file.path;

// console.log(req.file.path)
    course.save((err,doc)=>{
        if(err){
            console.log("Error in Post Data: "+err)
        }else {
            res.send(doc);
        }
    })

    //req.body.avatar=req.file.buffer
    //await req.cars.save()
},(err,req,res,next) => res.status(404).send({error:err.message}))

router.get('/:id/material',async (req,res) =>{
    try{

        
        const course = Course.Course.findById(req.params.id,(err,doc) => {

            console.log("inside getttt")
            if(err) {
                console.log('Error in get Data: '+err)
            }else {
                res.send(doc);
            }
        });
    }catch(e){
        res.status(404).send()
    }
    


    
})

//Base path : http://localhost:3000/courses
//get Api
router.get("/", async (req, res) => {
	const course = await Course.Course.find()
	res.send(course)
})
//post Api
router.post("/", async (req, res) => {
	const course = new Course.Course();
        course.courseName=req.body.courseName;
        course.overview=req.body.overview;
        course.startDate=req.body.startDate;
        course.endDate=req.body.endDate;
        course.crHrs=req.body.crHrs;
        course.price=req.body.price;
        
		
	await course.save()
	res.send(course)
})
router.post("/:id/assessments",async (req, res) => {
	const course = new Course.Course();
        course.courseName=req.body.courseName;
        course.overview=req.body.overview;
        course.startDate=req.body.startDate;
        course.endDate=req.body.endDate;
        course.crHrs=req.body.crHrs;
        course.price=req.body.price;
        
        course.assessment=[
            {questions:
                [
                {questions:req.body.questions,
                answer:req.body.answer}
                ]
            },
            {time:req.body.time}
        ]
        
       
		
	await course.save()
	res.send(course)
})
router.patch("/:id/assessments", async (req, res) => {
	try {
		const course = await Course.Course.findOne(
            { _id: req.params.id },
            { $push: { assessment: {questions:[
                {questions:req.body.questions,
                answer:req.body.answer}] } }
            }
            )

		if (req.body.courseName) {
			course.courseName = req.body.courseName
		}
		if (req.body.overview) {
			course.overview = req.body.overview
		}
        if (req.body.startDate) {
			course.startDate = req.body.startDate
		}
        if (req.body.endDate) {
			course.endDate = req.body.endDate
		}
        if (req.body.crHrs) {
			course.crHrs = req.body.crHrs
		}
        if (req.body.price) {
			course.price = req.body.price
		}
        
        

		await course.save()
		res.send(course)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

//get specific
router.get("/:id", async (req, res) => {
	const course = await Course.Course.findOne({ _id: req.params.id })
	res.send(course)
})
// delete Api
router.delete("/:id",upload.single('material'), async (req, res) => {
	try {
		await Course.Course.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "delete doesn't exist!" })
	}
})
router.patch("/:id", async (req, res) => {
	try {
		const course = await Course.Course.findOne({ _id: req.params.id })

		if (req.body.courseName) {
			course.courseName = req.body.courseName
		}
		if (req.body.overview) {
			course.overview = req.body.overview
		}
        if (req.body.startDate) {
			course.startDate = req.body.startDate
		}
        if (req.body.endDate) {
			course.endDate = req.body.endDate
		}
        if (req.body.crHrs) {
			course.crHrs = req.body.crHrs
		}
        if (req.body.price) {
			course.price = req.body.price
		}
        
        

		await course.save()
		res.send(course)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

// update
router.patch("/:id/material",upload.single('material'), async (req, res) => {
	try {
		const course = await Course.Course.findOneAndUpdate(
            { _id: req.params.id }
            ,
            { $push: { material: {file: req.file.path } }
            }
        )

		if (req.body.courseName) {
			course.courseName = req.body.courseName
		}
		if (req.body.overview) {
			course.overview = req.body.overview
		}
        if (req.body.startDate) {
			course.startDate = req.body.startDate
		}
        if (req.body.endDate) {
			course.endDate = req.body.endDate
		}
        if (req.body.crHrs) {
			course.crHrs = req.body.crHrs
		}
        if (req.body.price) {
			course.price = req.body.price
		}
        // if (req.file.path) {
        //     course.material.upload({$push:{file:req.file.path}})
            // course.material.post({file:req.file.path})

			// course.material.insert({
            //         file: req.file.path
            //     // file: req.file.path
            // })
		//}
        

		await course.save()
		res.send(course)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})
module.exports=router;