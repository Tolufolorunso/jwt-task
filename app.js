const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()

app.use(express.json())

const jsonSecret = 'myscretstring'

app.post('/sign-token', (req, res) => {
  const { firstName, lastName, id } = req.body

  if (!firstName || !lastName || !id) {
    return res.status(403).json({
      status: 'fail',
      errorMessage: 'All fields are required',
    })
  }
  const payload = { firstName, lastName, id }
  const expireTime = 8200

  jwt.sign(payload, jsonSecret, { expiresIn: expireTime }, (error, token) => {
    if (error) {
      return res.status(500).json({
        status: 'fail',
        error,
      })
    } else {
      return res.status(200).json({
        status: 'success',
        token,
      })
    }
  })
})

app.get('/decode-token', (req, res) => {
  const bearer = req.headers.authorization
  if (!bearer) {
    return res.status(500).json({
      status: 'fail',
      errorMessage: 'Not authorized',
    })
  }
  const authToken = bearer.split(' ')[1]
  jwt.verify(authToken, jsonSecret, (error, decodedToken) => {
    if (error) {
      return res.status(500).json({
        status: 'fail',
        error,
      })
    } else {
      return res.status(200).json({
        status: 'success',
        user: decodedToken,
      })
    }
  })
})

app.listen('3000', () => {
  console.log('server started')
})
