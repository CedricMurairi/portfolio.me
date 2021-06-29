import express from "express"

const blog = express.Router()

blog.get('/', (req, res) => {
    res.render("blog")
})

export default blog