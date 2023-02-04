const express = require("express");

const app = express();

const cors = require('cors')
app.use(cors({
    origin:"http://localhost:3000"
}))

const controllerRouter = require("./controller/controller");
app.use('/api', controllerRouter)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 5000;
app.listen(PORT, () => console.log(`server connected at ${PORT}`));
