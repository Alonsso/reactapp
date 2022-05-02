const express = require('express')
const router = express.Router();

//middleware
router.use((req, res, next) => {
    console.log('Info middleware: ', new Date().toISOString())
    next();
});

// initial route info page
router.get('/', (req, res) => {
    res.send('Info page')
})

// /info/contact
router.get('/contact', (req, res) => {
    res.send('Contact page')
})

module.exports = router;