module.exports = (app, client, upload) => {

    app.get("/eventForm", (req, res) => {
            res.render("eventForm")
        }),


      // uploading a single photo combined with the create event form. 
      app.post('/eventForm', upload.single('eventpicture'), function(req, res, next) {
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
              musictype = req.body.musictype,
              picture = req.file.path
              console.log("STARTTIME", starttime)

              // function escape(time){
              //   var a = time
              
              //   var slice = [a.slice(0,1), a.slice(3)].join("/");
              //   return slice
              // }
              // console.log(escape(starttime))
// Query does not work with backspaces. 
          var eventCreation = {
              text: `INSERT INTO events(eventname, date, starttime, endtime, price, partylink, ticketlink,venue,location, city, information, musictype, eventpicture) values ('${eventname}','${date}','${starttime}', '${endtime}', ${price},'${partylink}','${ticketlink}', '${venue}','${location}','${city}','${information}','${musictype}','${picture}') RETURNING *;`
    }

// the query to insert the data from the create event form into the database, and selecting the inserted data using returning *.     
    client.query(eventCreation, (err, result)=>{
      if (err) console.log("Error",err);

          client.query(`SELECT (eventname, date, starttime, endtime, price, partylink, ticketlink, venue, location, city, information, musictype, eventpicture) FROM events`, (err, result)=>{
                      var allevents = []
                      if(err){throw err}
                      for(var i = 0; i<result.rows.length; i++){
                      var eventResult = result.rows[i]

                  allevents.push(eventResult)
              }

              res.render("eventPage", {eventname: eventname, date: date, starttime: starttime, endtime: endtime, price: price,  partylink: partylink, ticketlink: ticketlink, venue: venue, location: location, city: city, information: information, musictype: musictype, eventpicture: picture
              })
          })

        })
    })
}