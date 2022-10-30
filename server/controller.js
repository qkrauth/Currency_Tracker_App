// databases for front end lists
const wish_list = []
const collected_list = []

let wishListId = 1;
let collectedListID = 1;

module.exports = {
    getWishList: (req, res) => {
        res.status(200).send(wish_list);
    },

    getCollectedList: (req, res) => {
        res.status(200).send(collected_list);
    },

    postWishList: (req, res) => {
        wish_list.push(req.body);
        res.status(200).send(wish_list);
        wishListId++;
    },

    postCollectedList: (req, res) => {
        collected_list.push(req.body);
        res.status(200).send(collected_list);
        collectedListID++;
    },

    deleteWishList: (req, res) => {
        const {id} = req.params;
        const wish_list_deleter = wish_list.find((wish_obj) => wish_obj.id === parseInt(id));
        wish_list.splice(id - 1, 1);
        res.status(200).send(wish_list);
    },

    deleteCollectedList: (req, res) => {
        const {id} = req.params;
        const collected_list_deleter = collected_list.find((collected_obj) => collected_obj.id === parseInt(id));
        collected_list.splice(id - 1, 1);
        res.status(200).send(collected_list);
    }
}