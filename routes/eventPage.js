module.exports=(app)=>{
	app.get("/eventPage", (req,res)=>{
		res.render("eventPage")
	})
}