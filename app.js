const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const session = require('express-session')
const pg = require("pg")
var multer  = require('multer')
var upload = multer({ dest: 'public/uploads' })
app.use("/public", express.static("public"))
require('dotenv').load();

const Client = pg.Client;
const client = new Client({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: 5432
}, function(err){
	console.log("ERRORRR", err)
})
client.connect()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({

    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

app.set("view engine", "pug")


require("./routes/eventForm.js")(app,client, upload)
require("./routes/index.js")(app, client, upload)
require("./routes/eventPage")(app,client, upload)


app.listen(3005, function(){
	console.log("listening on 3005")
})