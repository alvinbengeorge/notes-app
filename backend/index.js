import Express from "express";
const app = Express();

app.get("/", () => {
    return {"message": "hello world"}
});

app.listen(8000, () => {
    console.log("Listening in 8000")
})