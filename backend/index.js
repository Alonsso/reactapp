const cors = require('cors')
const express = require('express')
const path = require('path')
const info = require('./routes/info_router')
const db = require('./queries')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))


app.use('/info', info);

app.get('/users', db.getUsers);

app.post('/api/registro', db.createUser);

app.post('/api/login', db.login)

app.get('/api/isUserAuth', db.authToken, (req, res) => {
  res.send("u are authenticated")
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//static express

const PORT = process.env.PORT || 3001

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`)
})