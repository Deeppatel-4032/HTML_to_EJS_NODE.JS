const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config()
const router = require("./routes/index");
const port = process.env.PORT || 3000;

const Path = path.join(__dirname,"views/");

app.set("view engine", "ejs");
app.set("views",Path);

app.use(express.static(Path));

app.use("/",router);

app.listen(port, (err) => {
    if(!err) {
        console.log(`Server is running on port http://localhost:${port}`);
    }
});
