const express = require("express")
const app = express();
const cors = require("cors");
const dotenv = require("dotenv")
const router = require("./routes/auth");
const userRouter = require("./routes/users")
const imgRouter = require("./models/imageSchema")
// const movieRouter = require("./routes/movies")
// const listRoute = require("./routes/lists")


dotenv.config({path: "./config.env"})

const port = process.env.Port || 7000; 

require('./db/conn')
require('./models/userSchema')
// require("./models/middleware/upload")
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.use('/images', express.static('images'));
app.use("/api/auth", router);
app.use("/api/users", userRouter);
app.use("/api", imgRouter);
// app.use("/api", router)
// app.use("/api/movies", movieRouter);
// app.use("api/lists", listRoute);


app.listen(port, ()=>{
    console.log(`app listening on ${port}`)
})
