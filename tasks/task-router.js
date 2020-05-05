const express = require("express")
const db = require("../data/db-config")

const Tasks = require("./task-model")

const router = express.Router({
    mergeParams: true
})




router.get("/", async (req, res, next) => {
    try {
        return res.json(await Tasks.find())
    }
    catch (err) {
        next(err)
    }
})


router.post("/", async (req, res, next) => {
    try {
        const [id] = await db("task").insert(req.body)
        const message = await db("task").where("id", id).first()
        res.json(message);
    } catch (err) {
        next(err);
    }
})


module.exports = router