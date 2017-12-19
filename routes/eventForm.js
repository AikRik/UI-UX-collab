module.exports=(app,client, upload)=>{

	app.get("/eventForm", (req,res)=>{
		res.render("eventForm")
	}),

	app.post('/eventForm', upload.single('eventpicture'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
  		 upload(req, res, function (err) {
   			 if (err) {
      // An error occurred when uploading 
     			 throw err
    		}
    	})

	})
	 
}