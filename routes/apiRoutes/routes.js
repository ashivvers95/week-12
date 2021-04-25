const express = require('express');
const router = express.Router();
const dbMethods = require('./methods');

router.get('/employee', (req, res) => {
   dbMethods = req.viewAllEmployee();
});

router.post('/employee', ({ body }, res) => {
    
});

router.delete('/employee/:id', (req, res) => {

});

module.export = router;