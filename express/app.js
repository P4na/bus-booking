var express = require("express");

var app = express();

var controllerRouter = require("./controller/controller");

app.use('/api', controllerRouter)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 5000;
app.listen(PORT, () => console.log(`server connected at ${PORT}`));
