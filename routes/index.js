module.exports=(app,client,upload)=>{
	
	app.get("/", (req,res)=>{

	// query for all the events, this info contains all you need
		client.query(`SELECT * FROM events`,(err, result)=>{
			var allevents = []

			for(var i = 0; i<result.rows.length; i++){
			console.log("Supsbro", result.rows[i])
			var eventResult = result.rows[i]

			allevents.push(eventResult.eventpicture)
			}

			console.log("allevents: ",allevents)
			debugger
			res.render("index", {allevents: allevents})
			
		})
	
	})
}





