const { Unit } = require('../models/unit');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const units = await Unit.find();
    res.send(units);

})


module.exports = router;