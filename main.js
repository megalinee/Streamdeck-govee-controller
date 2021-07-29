var Govee = require("node-govee-led");
const express = require('express')
const app = express()
const port = 2555

// FOLLOW INSTRUCTIONS IN README AND PUT IN GOVEE API KEY HERE
const API_KEY = ""

// FOLLOW INSTRUCTIONS IN README AND PUT MAC ADDRESS AND MODEL ID HERE.
var led = new Govee({
	apiKey: API_KEY,
	mac: "",
	model: ""
});

app.get('/lights/on', function (req, res) {
	led.turnOn()
	res.send("LIGHTS ON")
  })
  
app.get('/lights/off', function (req, res) {
	deskled.turnOff()
	res.send("LIGHTS OFF")
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
