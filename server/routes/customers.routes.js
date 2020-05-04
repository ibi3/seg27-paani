const express = require('express');
const Customer = require('../models/Customer');

const router = express.Router();

router.put('/', async (req, res, next) => {
	var {id, name,contact_number, address, location} = req.body
	try {
        await Customer.editDetails(id, name, contact_number, address, location);
        return res.json({error: false, msg: 'Updated customer details.'});
    } catch (error) { console.log(error) ; return res.json({error: error}) };
})

module.exports = router