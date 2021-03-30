const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//   res.render("home");
// });

app.get("/", function (req, res) {
  const apiKey = process.env.API_KEY;
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=14.599512&lon=120.984222&exclude=hourly,minutely,alerts&units=" +
    unit +
    "&appid=" +
    apiKey;
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const todayWeather = weatherData.current.temp;
      const timeZone = res.render("home", { weatherData: weatherData });
    });
  });
});

app.listen(3000, function () {
  console.log("Server Running....");
});
