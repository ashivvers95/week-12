const express = require('express');
const router = express.Router();
//const dbMethods = require('./methods');
const db = require('../../db/connection');

router.get('/employee', (req, res) => {
  const sql = `SELECT * FROM employee`;

  db.query(sql, (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'success',
          data: rows
      });
});
});
router.post('/employee', ({ body }, res) => {

});

router.delete('/employee/:id', (req, res) => {

});

module.export = router;