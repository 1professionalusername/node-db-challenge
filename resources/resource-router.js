const express = require("express")
const db = require("../data/db-config")

const Resources = require("./resource-model")

const router = express.Router({
    mergeParams: true
})



// GET resources
router.get("/", async (req, res, next) => {
    try {
        return res.json(await Resources.find())
    }
    catch (err) {
        next(err)
    }
})


// POST resources
router.post("/", async (req, res, next) => {
    try {
        const payload = {
            name: req.body.name,
            description: req.body.description
        }

        const [id] = await db("resource").insert(payload)
        const message = await db("resource").where("id", id).first()
        res.json(message);
    } catch (err) {
        next(err);
    }
})



module.exports = router