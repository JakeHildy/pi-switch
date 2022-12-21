const express = require("express");
const Gpio = require("onoff").Gpio;
const LED = new Gpio(4, "out");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello from raspberry");
});

app.put("/", (req, res) => {
  LED.writeSync(1);
  res.send("turned on");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
