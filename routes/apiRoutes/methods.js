const express = require('express');
const router = express.Router();

const object = {
    viewAllEmployee: function(req, res) {
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
    },

    viewAllEmployeeDepartment: function(req, res) {
        
    },
    
    viewAllEmployeeManager: function(req, res) {

    },
    

    addEmployee: function(req, res) {

    },

    removeEmployee: function(req, res) {

    },
    
    updateEmployeeRole: function(req, res) {

    },
    
    updateEmployeeManager: function(req, res) {

    },
    
    viewAllRoles: function(req, res) {

    },
    
    addRole: function(req, res) {

    },
    
    removeRole: function(req, res) {

    },
    
}

module.exports = object