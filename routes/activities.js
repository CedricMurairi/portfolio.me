import express from "express"

const activities = express.Router()

activities.get('/', (req, res) => {
    res.render("activities")
})

export default activities