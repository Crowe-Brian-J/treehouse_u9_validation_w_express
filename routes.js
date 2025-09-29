'use strict'

const express = require('express')

// This array is used to keep track of user records
// as they are created.
const users = []

// Construct a router instance.
const router = express.Router()

// Route that returns a list of users.
router.get('/users', (req, res) => {
  res.json(users)
})

// Route that creates a new user.
router.post('/users', (req, res) => {
  // Get the user from the request body.
  const user = req.body

  const errors = []

  // Validate that we have a 'name' value
  if (!user.name) {
    errors.push('Please provide a value for "name".')
  }

  // Validate email
  if (!user.email) {
    errors.push('Please provide a value for "email".')
  }

  console.log(errors.length)
  // Add the user to the `users` array if no errors.
  if (errors.length > 0) {
    // Return validation errors to the client
    res.status(400).json({ errors })
  }

  // Set the status to 201 Created and end the response.
  res.status(201).end()
})

module.exports = router
