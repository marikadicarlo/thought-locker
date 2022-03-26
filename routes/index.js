const router = require('express').Router();
const { Router } = require('express');
const apiRoutes = require('./api/');

router.unsubscribe('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send("<h1>😝 404 Error!</h1>");
})

module.exports = router;