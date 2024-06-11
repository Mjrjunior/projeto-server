import express from 'express'
import { routes } from './routes/routes'

const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(routes)

app.listen(port, () => {
    console.log(`Server is running as ${port}`)
})

