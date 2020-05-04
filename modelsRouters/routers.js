const express = require("express")
const db = require("../data/db-config")

const Projects = require("./models")

const router = express.Router()






//GET Projects
router.get("/", async (req, res, next) => {
    try {
        return res.json(await Projects.find())
    }
    catch (err) {
        next(err)
    }
})

//POST Projects
router.post("/", async (req, res, next) => {
    try {
        const id = await Projects.add(req.body)

        const project = await Projects.findById(id)

        return res.status(201).json(project)
    }
    catch (err) {
        next(err)
    }
})


router.get("/resource", async (req, res, next) => {
    try {
        return res.json(await Resources.find())
    }
    catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const id = await Resources.add(req.body)

        const resource = await Resources.findById(id)

        return res.status(201).json(resource)
    }
    catch (err) {
        next(err)
    }
})
module.exports = router;