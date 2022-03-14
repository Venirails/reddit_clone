const express = require("express");
const router = express.Router();
const queries = require('../db/queries');



router.get('/', (req, res) => {
    queries.getAllPosts().then(posts => {
        let allPosts = res.data;
        res.json(posts);
    })
});
module.exports = router;
