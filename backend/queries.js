require('dotenv').config()

const {Pool} = require('pg')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api-react-express',
  password: '2503i',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const createUser = async (request, response) => {
    const { user_name, user_email, user_password } = request.body
    
    const hashedPassword = await bcrypt.hash(request.body.user_password, 10)

    pool.query('INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3)', [user_name, user_email, hashedPassword], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send('User added')
    })
}

const getUserByName = async (request, response) => {
    const {user_name, user_password} = request.body
    let passwordToCompare = ''
    pool.query('SELECT * FROM users WHERE user_name = $1', [user_name], (error, results) => {
      if (error) {
        throw error
      } 
      console.log(results.rows[0].user_password);
      passwordToCompare = results.rows[0].user_password;
      console.log(results.rows)
    })
    try {
        const compare = await bcrypt.compare(user_password, passwordToCompare);
        if (compare) {
            response.status(200).json('Logged in')
          } else {
            response.status(201).json('User or password incorrect')
          }
    } catch {
         
    }
  }

const authToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token){
        res.send('Need a token')
    } else {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
            if(error){
                res.send("Error with token auth")
            } else {
                req.auth_token_id = decoded.id
                next()
            }
        })
    }
}


const login = async (req, res) => {
    const { user_name, user_password } = req.body

    pool.query('SELECT * FROM users WHERE user_name = $1', [user_name], (error, results) => {
        if(!results.rows.length > 0){
            res.send('User does not exists')
        } else {
            console.log(results.rows[0].user_password)
            const user = results.rows[0]
            bcrypt.compare(user_password, results.rows[0].user_password, (error, response) => {
                if (response) {
                    console.log(results.rows[0])
                    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
                    res.json({
                        user_name : user.user_name,
                        accessToken: accessToken,
                    })
                } else {
                    res.send('Wrong username/password combination')
                }
            })
        }
    })
}


module.exports = {getUsers, createUser, getUserByName, login, authToken};