const express = require("express")
const db = require("../data/db-config")

const Projects = require("./project-model")

const router = express.Router({
    mergeParams: true,
})



// GET projects
router.get("/", async (req, res, next) => {
    try {
        return res.json(await Projects.find())
    }
    catch (err) {
        next(err)
    }
})


// POST projects
router.post("/", async (req, res, next) => {
    try {

        const payload = {
            name: req.body.name,
            description: req.body.description
        }

        const [id] = await db("project").insert(payload)
        const message = await db("project").where("id", id).first()
        res.json(message);
    } catch (err) {
        next(err);
    }


})






module.exports = router