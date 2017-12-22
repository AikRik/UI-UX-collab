module.exports=(app,client,upload)=>{
	
	app.get("/", (req,res)=>{

	// query for all the events, this info contains all you need
		client.query(`SELECT * FROM events ORDER by ID DESC`, (err, result)=>{
			var allevents = []
			console.log("HelloS",result.rows)
			for(var i = 0; i<result.rows.length; i++){
			console.log("Supsbro", result.rows[i])
			var eventResult = result.rows[i]

			allevents.push(eventResult)
			}

			res.render("index", {allevents: allevents,
								picture: allevents.eventpicture})
			
		})
	
	})
}





