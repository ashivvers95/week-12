const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

//get all roles
router.get('/roles', (req, res) => {
    const sql = `SELECT * FROM roles`;
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

//get single roles
router.get('/roles/:id', (req, res) => {
    const sql = `SELECT * FROM roles WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) =>{
        if(err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

//add role
// router.post('/roles', ({ body }, res) => {
//     const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
//                  VALUES (?,?,?)`;
//     const params = [body.first_name, body.last_name, body.industry_connected, body.party_id];
  
//       db.query(sql, params, (err, result) => {
//         if(err) {
//             res.status(400).json({ error: err.message });
//             return;
//       }
//             res.json({
//                 message: 'success',
//                 data: body,
//                 changes: result.affectedRows
//             });
//   });
//   });

//delete roles
router.delete('/roles/:id', (req, res) => {
    const sql = `DELETE FROM roles WHERE id =?`;
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if(err) {
            res.status(400).json({ error: res.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Role not found!'
            });
        }else {
            res.json({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
            });
        };
    });
});

module.exports = router;