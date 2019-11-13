const express = require('express');
const router = express.Router();

module.exports = function() {
    router.get('/', (req, res) => {
        res.render('index');
    });
    router.get('/nosoros', (req, res) => {
        res.render('nosotros');
    });
    return router;
}