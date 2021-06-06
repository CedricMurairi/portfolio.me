import express from "express"
import blog from "./routes/blog.js"

const app = express()

const port = process.env.PORT || 3001

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/projects', (req, res) => {
    res.render('projects')
})

app.use('/blog', blog)
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})