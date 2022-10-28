const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// databases for front end lists
const wish_list = []
const collected_list = []


//get databases
app.get("/route/wish_list", (req, res) => {
    res.status(200).send(wish_list)
});

app.get("/route/collected_list", (req, res) => {
    res.status(200).send(collected_list)
});


//get/add data to databases
app.post("/route/wish_list", (req, res) => {
    wish_list.push(req.body);
    res.status(200).send(wish_list)
});

app.post("/route/collected_list", (req, res) => {
    collected_list.push(req.body);
    res.status(200).send(collected_list)
});


//delete data from database by id
app.delete("/route/wish_list/:id", (req, res) => {
    const {id} = req.params;
    const wish_list_deleter = wish_list.find((wish_obj) => wish_obj.id === parseInt(id));
    wish_list.splice(id - 1, 1);
    res.status(200).send(wish_list)
});

app.delete("/route/collected_list/:id", (req, res) => {
    const {id} = req.params;
    const collected_list_deleter = collected_list.find((collected_obj) => collected_obj.id === parseInt(id));
    collected_list.splice(id - 1, 1);
    res.status(200).send(collected_list)
});

app.listen(5500, console.log("server running on 5500"));