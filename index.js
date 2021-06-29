import express from "express"
import blog from "./routes/blog.js"
import activities from "./routes/activities.js"

const app = express()

const port = process.env.PORT || 3001

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/projects', (req, res) => {
    res.render('projects')
})

app.get('/experiences', (req, res) => {
    res.render('experiences')
})

app.use('/blog', blog)
app.use('/activities', activities)
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})