const express = require("express");
require("./db/mongoose");

//------------------------------------------------------------------------------

const userRouter = require("./routers/user");
const officerRouter = require("./routers/officer");
const governmentRouter = require("./routers/government");
//
const gorevliIstekleriRouter = require("./routers/r-gorevli-istegi");
const yeniEnvanterRouter = require("./routers/r-envanter");

//------------------------------------------------------------------------------

const Officer = require("./models/officer");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

//------------------------------------------------------------------------------

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(officerRouter);
app.use(governmentRouter);

//
app.use(gorevliIstekleriRouter);
app.use(yeniEnvanterRouter);
//------------------------------------------------------------------------------
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
