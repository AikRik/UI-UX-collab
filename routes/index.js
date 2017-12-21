module.exports=(app,client,upload)=>{
	
	app.get("/", (req,res)=>{

	// query for all the events, this info contains all you need
		client.query(`SELECT (eventname, date, starttime, endtime, price, partylink, ticketlink, 
        venue, location, city, information, musictype, eventpicture) FROM events`, (err, result)=>{
			var allevents = []

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





