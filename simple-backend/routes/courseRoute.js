
const express=require('express');
const router=express.Router();
const Course=require('../simple-app.js');

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
//get specific
router.get("/:id", async (req, res) => {
	const course = await Course.Course.findOne({ _id: req.params.id })
	res.send(course)
})
// delete Api
router.delete("/:id", async (req, res) => {
	try {
		await Course.Course.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "delete doesn't exist!" })
	}
})
// update
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
module.exports=router;