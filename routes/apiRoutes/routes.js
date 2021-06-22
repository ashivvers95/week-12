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
    // Data validation
    const errors = inputCheck(body, 'first_name', 'last_name', 'email');
        if (errors) {
            res.status(400).json({ error: errors });
            return;
        }

    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

// router.delete('/employee/:id', (req, res) => {

// });

module.exports = router;