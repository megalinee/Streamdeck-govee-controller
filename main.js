var Govee = require("node-govee-led");
const express = require('express')
const app = express()
const port = 2555

var led = new Govee({
	apiKey: "",
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