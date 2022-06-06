
const express=require('express');
const router=express.Router();
const User=require('../simple-app.js');

//Base path : http://localhost:3000/posts2
//get Api
router.get("/", async (req, res) => {
	const user = await User.User.find()
	res.send(user)
})
router.post("/", async (req, res) => {
	const user = new User.User();
    user.username=req.body.username;
    user.email=req.body.email;
    user.password=req.body.password;
	await user.save()
	res.send(user)
})
router.get("/:id", async (req, res) => {
	const user = await User.User.findOne({ _id: req.params.id })
	res.send(user)
})
// delete Api
router.delete("/:id", async (req, res) => {
	try {
		await User.User.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "delete doesn't exist!" })
	}
})
//update Api
// update
router.patch("/:id", async (req, res) => {
	try {
		const user = await User.User.findOne({ _id: req.params.id })

		if (req.body.username) {
			user.username = req.body.username
		}
		if (req.body.email) {
			user.email = req.body.email
		}
        if (req.body.password) {
			user.password = req.body.password
		}
 		await user.save()
		res.send(user)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

router.post("/:id/:coursename", async (req, res) => {
	const user = new User.User();
    user.username=req.body.username;
    user.email=req.body.email;
    user.password=req.body.password;
	user.usercourse=[{
			courseName: req.body.courseName,
		}]


	
	await user.save()
	res.send(user)
})
module.exports=router;