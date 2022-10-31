const express = require("express");
const cors = require("cors");
const { getWishList, getCollectedList, postWishList, postCollectedList, deleteWishList, deleteCollectedList, getHTML  } = require("./controller");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("client"));

app.get("/", getHTML);


//get databases
app.get("/route/wishList", getWishList);

app.get("/route/collectedList", getCollectedList);


//get/add data to databases
app.post("/route/wishList", postWishList);

app.post("/route/collectedList", postCollectedList);


//delete data from database by id
app.delete("/route/wishList/:id", deleteWishList);

app.delete("/route/collectedList/:id", deleteCollectedList);


app.listen(5500, console.log("server running on 5500"));