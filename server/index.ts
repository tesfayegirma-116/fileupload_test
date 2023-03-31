export { };
const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");
const cors = require("cors");
const colors = require("colors");


const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));

app.use("/api", router);

app.listen(PORT, () => {
    console.log(
        colors.cyan(`Server is running on port http://localhost:${PORT}`)
    );
});
