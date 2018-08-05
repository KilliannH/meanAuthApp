const express = require('express');
const router = express.Router();

// Register route
router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

// Authenticate
router.get('/authenticate', (req, res, next) => {
    res.send('authenticate');
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

// Validate route
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE');
});

module.exports = router;
