// databases for front end lists
// const wish_list = []
// const collected_list = []

const dbWish = require("./dbWish.json")
const dbCollect = require("./dbCollect.json")
const path = require("path")

let wishListId = 2;
let collectedListID = 2;

module.exports = {
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, "../client/index.html"));
    },

    getWishList: (req, res) => {
        res.status(200).send(dbWish);
    },

    getCollectedList: (req, res) => {
        res.status(200).send(dbCollect);
    },

    postWishList: (req, res) => {
        let { property } = req.body
        let newWishPropertyObj = {
            id: wishListId,
            property
        }
        dbWish.push(newWishPropertyObj)
        wishListId++
        res.status(200).send(dbWish)
    },

    postCollectedList: (req, res) => {
        let { property } = req.body
        let newCollectPropertyObj = {
            id: collectedListID,
            property
        }
        dbCollect.push(newCollectPropertyObj)
        collectedListID++
        res.status(200).send(dbCollect)
    },

    deleteWishList: (req, res) => {
        let { id } = req.params;
        let wishIndex = dbWish.findIndex(obj => obj.id === +id)

        dbWish.splice(wishIndex, 1)
        res.status(200).send(dbWish)
    },

    deleteCollectedList: (req, res) => {
        let { id } = req.params;
        let collectIndex = dbCollect.findIndex(obj => obj.id === +id)

        dbCollect.splice(collectIndex, 1)
        res.status(200).send(dbCollect)
    }
}