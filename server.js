const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const campsiteRouter = require("./routes/campsiteRouter");
const promotionRouter = require("./routes/promotionRouter");
const partnerRouter = require("./routes/partnerRouter");

const hostname = "localhost";
const port = 3000;
const app = express();

/**
 * Create a new morgan logger middleware function using the given 
 */
app.use(morgan("dev"));

/**
 * create application/json parser
 */
app.use(bodyParser.json());

//Using Routes for the multiple API packages.
app.use("/campsites", campsiteRouter);
app.use("/promotions", promotionRouter);
app.use("/partners", partnerRouter);

/**
 * This is a built-in middleware function in Express. 
 * It serves static files and is based on serve-static.
 */
app.use(express.static(__dirname + "/public"));

//Default method if API end-point is incorrect.
app.use((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end("<html><body><h1>Please check..! you are not calling the correct endpoint.. </h1></body></html>");
});

//Method to initiate the server call.
app.listen(port, hostname, () => {
  console.log(`Server is runnig at http://${hostname}:${port}`);
});
