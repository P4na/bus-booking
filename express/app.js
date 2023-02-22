const express = require("express");
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const cors = require("cors");
app.use(cors({origin: "http://localhost:3000"}));

const controllerRouter = require("./controller/controller");
app.use("/api", controllerRouter);

 


const PORT = 5000;
app.listen(PORT, () => console.log(`server connected at ${PORT}`));
  