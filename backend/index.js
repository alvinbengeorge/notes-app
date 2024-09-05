import express from "express";
import basic from "./routes/basic.js";

const app = express();

app.use(express.json());
app.use("/basic", basic);

app.get("/", (req, res) => {
    res.send({
        message: "Hello World",
    });
});

app.listen(8000, () => {
    console.log("Listening in 8000");
});
