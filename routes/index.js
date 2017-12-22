module.exports=(app,client,upload)=>{
	
	app.get("/", (req,res)=>{

	// query for all the events, this info contains all you need
		client.query(`SELECT * FROM events ORDER by ID DESC`, (err, result)=>{
			var allevents = []

			for(var i = 0; i<result.rows.length; i++){

			var eventResult = result.rows[i]

			allevents.push(eventResult)
			}

			res.render("index", {allevents: allevents})
			
		})
	
	})
}
