const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/authentication")

dotenv.config()

mongoose
    .connect(
        process.env.Mongo_URL
    )
    .then(() => console.log("dbconnection success"))
    .catch((err) => console.log(err));
    
    app.use(express.json())

    app.use("/api/users", userRoute)
    app.use("/api/authentication", authRoute)
    

app.listen(process.env.PORT || 3000, () => {
    console.log("Backend server is running!")
})




