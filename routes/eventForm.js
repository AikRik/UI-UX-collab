module.exports=(app,client, upload)=>{

	app.get("/eventForm", (req,res)=>{
    debugger
		res.render("eventForm")
	}),
  app.get("/createEvent",(req,res)=>{
    res.render("createEvent")
  }),

  app.post("createEvent", (req,res)=>{
    var eventname = req.body.eventname,
        date = req.body.date,
        starttime = req.body.starttime,
        endtime = req.body.endtime,
        price = req.body.price,
        partylink = req.body.partylink,
        ticketlink = req.body.ticketlink,
        venue = req.body.venue,
        location = req.body.location,
        city = req.body.city,
        information = req.body.information,
        musictype = req.body.musictype


    var eventCreation = {
      text: `INSERT INTO events (eventname, date, starttime, endtime, price, partylink, ticketlink, venue, location, city, information, musictype) 
      values ('eventname','date', 'starttime','endtime','price','partylink','ticketlink','venue','location','city','information','musictype';`
    }

    client.query(eventCreation, (error, result)=>{
      res.render("index")
    })
  }),



	app.post('/eventForm', upload.single('eventpicture'), function (req, res, next) {

  console.log("reached")
    debugger
    var picture = req.file.originalname

    // match / asociate image with event
      client.query(`INSERT INTO events (eventpicture) values ('${req.file.path}')`,(err, result)=>{
          console.log("succes)")
         res.render("index", {picture:picture})
      })
    })
   

	 
}
