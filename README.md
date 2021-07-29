# Streamdeck-govee-controller
Nodejs app to run GET requests for govee LED lights. I use it mainly to control them using streamdeck

# How to get an API key
Open the Govee Home mobile app
Go to the "My Profile" tab, press "About us", press "Apply for API key"
Fill out your name and your reason (For the reason you can just write "I would like to control my LEDs with programming" and it should be fine) and submit
You will receive an email with your API key to the email address you entered when registering a Govee account normally within minutes.

# How to get the device's MAC address (and model)
Finding the LED's MAC address is one of the hardest parts of setup. Luckily, I've made it easy for you to do using this package (and you also find out the model, too!). You just need to run the code below (of course replacing <govee api key> with your api key), and leaving the mac address and model fields empty.

const Govee = require("node-govee-led");

const GoveeClient = new Govee({
	apiKey: "<govee api key>",
	mac: "",
	model: ""
})

GoveeClient.getDevices().then(data => console.log(data))
Once you run this, you should see something like the response below in your console. The MAC address is in the "device" field and the model is in the "model" field.

{
  devices: [
    {
      device: '<the mac address>',
      model: '<the device's model>',
      deviceName: '<the device's name>',
      controllable: true,
      retrievable: true,
      supportCmds: [Array]
    }
  ]
}
  
__*THIS WAS ALL COPIED FROM THE NODE-GOVEE-LED NPM PACKAGE'S README. ANY UPDATES TO THE PACKAGE OR TO GOVEE'S APP MAY CHANGE THIS PROCESS.*__
  
# Supported models
The currently supported models are: H6160, H6163, H6104, H6109, H6110, H6117, H6159, H7021, H7022, H6086, H6089, H6182, H6085, H7014, H5081, H6188, H6135, H6137, H6141, H6142, H6195, H7005, H6083, H6002, H6003, H6148, H6052, H6143, H6144, H6050, H6199, H6054, H5001.
