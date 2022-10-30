const express = require("express");
const cors = require("cors");
const { getWishList, getCollectedList, postWishList, postCollectedList, deleteWishList, deleteCollectedList  } = require("./controller");

const app = express();

app.use(express.json());
app.use(cors());


//get databases
app.get("/route/wish_list", getWishList);

app.get("/route/collected_list", getCollectedList);


//get/add data to databases
app.post("/route/wish_list", postWishList);

app.post("/route/collected_list", postCollectedList);


//delete data from database by id
app.delete("/route/wish_list/:id", deleteWishList);

app.delete("/route/collected_list/:id", deleteCollectedList);


app.listen(5500, console.log("server running on 5500"));