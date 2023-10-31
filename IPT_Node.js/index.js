import express from 'express'
import router from './routes/index.js'
import swaggerDocs from './swagger.js'

/*const db = import('./queries.js')*/
const bodyParser = import('body-parser')
const app = express()
const port = 5000

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  swaggerDocs(app, port)
})



app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
  
/*  app.get('/users', db.getUsers)
  app.get('/users/:id', db.getUserById)
  app.post('/users', db.createUser)
  app.put('/users/:id', db.updateUser)
  app.delete('/users/:id', db.deleteUser)
  */
