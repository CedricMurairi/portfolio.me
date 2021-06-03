import express from "express"

const blog = express.Router()

blog.get('/', (req, res) => {
    res.send("<h1>This is the blog portal</h1>")
})

export default blog