module.exports=(app,client, upload)=>{

	app.get("/eventForm", (req,res)=>{
    debugger
		res.render("eventForm")
	}),
  app.get("/createEvent",(req,res)=>{
    res.render("createEvent")
  }),

  // app.post("createEvent", (req,res)=>{
  //   var eventname = req.body.eventname,
  //       date = req.body.date,
  //       starttime = req.body.starttime,
  //       endtime = req.body.endtime,
  //       price = req.body.price,
  //       partylink = req.body.partylink,
  //       ticketlink = req.body.ticketlink,
  //       venue = req.body.venue,
  //       location = req.body.location,
  //       city = req.body.city,
  //       information = req.body.information,
  //       musictype = req.body.musictype


    

  //   client.query(eventCreation, (error, result)=>{
  //     res.render("index")
  //   })
  // }),

	app.post('/eventForm', upload.single('eventpicture'), function (req, res, next) {
      debugger
      var eventname = req.body.eventname,
        date = req.body.date,
        starttime = req.body.time,
        endtime = req.body.totime,
        price = req.body.price,
        partylink = req.body.partylink,
        ticketlink = req.body.ticketlink,
        venue = req.body.venue,
        location = req.body.location,
        city = req.body.city,
        information = req.body.info,
        musictype = req.body.musictype
        var picture = req.file.path 

        console.log("BLUB ", eventname,
        date ,
        starttime,
        endtime,
        price,
        partylink,
        ticketlink,
        venue,
        location,
        city,
        information,
        musictype,
        picture)
  
  var eventCreation = {
        text: `INSERT INTO events 
        (eventname, date, starttime, endtime, price, partylink, ticketlink, 
        venue, location, city, information, musictype, eventpicture) 
        values 
        ('${eventname}','${date}',${starttime},${endtime},${price},'${partylink}','${ticketlink}',
        '${venue}','${location}','${city}','${information}','${musictype}','${picture}') RETURNING *;`
      }
   
    // match / asociate image with event

      client.query(eventCreation,(err, result)=>{
        if (err) throw err;

          console.log(result)
          
          res.render("eventForm")
            // client.query(`SELECT eventpicture FROM events`,(error, result2)=>{
                   
               // var allevents = []

               //  for(var i = 0; i<result.rows.length; i++){
               //      console.log("Supsbro", result.rows[i])
               //      var eventResult = result.rows[i]
               //      allevents.push(eventResult.eventpicture)
               //  } 
            //   console.log("allevents: ",allevents)
            //   res.render("index", {allevents: allevents})
            // })
      // })
    })

})


}


