import Express from "express";
const app = Express();

app.use(Express.json());

app.get("/", (req, res) => {
    res.send({
        "message": "Hello World"
    });
});

app.listen(8000, () => {
    console.log("Listening in 8000")
})