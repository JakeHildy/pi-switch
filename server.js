const express = require("express");
const Gpio = require("onoff").Gpio;
const LED = new Gpio(4, "out");

const app = express();
const port = 4000;

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from raspberry");
});

app.put("/", (req, res) => {
  const { enable } = req.body;
  LED.writeSync(!enable);
  if (enable) {
    res.send("turned on");
  } else {
    res.send("turned off");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
