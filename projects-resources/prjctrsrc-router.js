const express = require("express")

const Project_resources = require("./prjctrsrc-model")

const router = express.Router({
    mergeParams: true
})




// GET project-resources
router.get("/", async (req, res, next) => {
    try {
        return res.json(await Project_resources.find())
    }
    catch (err) {
        next(err)
    }
})

//POST project-resources
router.post("/", async (req, res, next) => {
    try {
        const id = await Project_resources.add(req.body)

        const projectResource = await Project_resources.findById(id)

        return res.status(201).json(projectResource)
    }
    catch (err) {
        next(err)
    }
})


module.exports = router