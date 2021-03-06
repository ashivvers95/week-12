// const router = express.Router();
const db = require('../../db/connection');

const object = {
    viewAllEmployee: function(req, res) {
        const sql = `SELECT * FROM employee`;

        db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.table(rows);
        });
    },

    viewAllEmployeeDepartment: function(req, res) {
        const sql = `SELECT employee.*, department.department_name AS party_name, COUNT(candidate_id) AS count
        FROM votes
        LEFT JOIN candidates ON votes.candidate_id = candidates.id
        LEFT JOIN parties ON candidates.party_id = parties.id
        GROUP BY candidate_id ORDER BY count DESC;`;

        db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.table(rows);
        });
    },
    
    viewAllEmployeeManager: function(req, res) {
        const sql = `SELECT * FROM employee WHERE manager_id = ?`;

        db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.table(rows);
        });

    },
    

    addEmployee: function({ body }, res) {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES (?,?,?,?)`;

        const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

        db.query(sql, params, (err, rows) => {
            if(err) {
                res.status(400).json({ error: err.message });
                return;
          }
            console.table(rows);
        });

    },

    removeEmployee: function(req, res) {
        const sql = `DELETE employee WHERE id=?`;
        const params = [req.params.id];

        db.query(sql, params, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.table(rows);
        });

    },
    
    updateEmployeeRole: function(req, res) {
        const sql = `SELECT * FROM employee`;

        db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.table(rows);
        });

    },
    
    updateEmployeeManager: function(req, res) {
        const sql = `SELECT * FROM employee`;

        db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.table(rows);
        });

    },
    
    viewAllRoles: function(req, res) {
        const sql = `SELECT * FROM roles`;

        db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.table(rows);
        });

    },
    
    addRole: function({ body }, res) {
        const sql = `INSERT INTO role (title, salary, departments_id)
        VALUES (?,?,?)`;

        const params = [body.title, body.salary, body.departments_id];

        db.query(sql, params, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.table(rows);
        });

    },
    
    removeRole: function(req, res) {
        const sql = `DELETE role WHERE id=?`;
        const params = [req.params.id];

        db.query(sql, params, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
            }
            console.table(rows);
        });

    },
    
}

module.exports = object




// const express = require('express');
// const router = express.Router();
// const db = require('../../db/connection');

// //get all departments
// router.get('/department', (req, res) => {
//     const sql = `SELECT * FROM department`;
//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// });

// //get single department
// router.get('/department/:id', (req, res) => {
//     const sql = `SELECT * FROM department WHERE id = ?`;
//     const params = [req.params.id];

//     db.query(sql, params, (err, row) =>{
//         if(err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: row
//         });
//     });
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const db = require('../../db/connection');

// //get all roles
// router.get('/roles', (req, res) => {
//     const sql = `SELECT * FROM roles`;
//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// });

// //get single roles
// router.get('/roles/:id', (req, res) => {
//     const sql = `SELECT * FROM roles WHERE id = ?`;
//     const params = [req.params.id];

//     db.query(sql, params, (err, row) =>{
//         if(err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: row
//         });
//     });
// });

// //add role
// // router.post('/roles', ({ body }, res) => {
// //     const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
// //                  VALUES (?,?,?)`;
// //     const params = [body.first_name, body.last_name, body.industry_connected, body.party_id];
  
// //       db.query(sql, params, (err, result) => {
// //         if(err) {
// //             res.status(400).json({ error: err.message });
// //             return;
// //       }
// //             res.json({
// //                 message: 'success',
// //                 data: body,
// //                 changes: result.affectedRows
// //             });
// //   });
// //   });

// //delete roles
// router.delete('/roles/:id', (req, res) => {
//     const sql = `DELETE FROM roles WHERE id =?`;
//     const params = [req.params.id];

//     db.query(sql, params, (err, result) => {
//         if(err) {
//             res.status(400).json({ error: res.message });
//         } else if (!result.affectedRows) {
//             res.json({
//                 message: 'Role not found!'
//             });
//         }else {
//             res.json({
//                 message: 'deleted',
//                 changes: result.affectedRows,
//                 id: req.params.id
//             });
//         };
//     });
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const db = require('../../db/connection');

// //get single employee
// router.get('/employee/:id', (req, res) => {
//     const sql = `SELECT * FROM employee WHERE id = ?`;
//     const params = [req.params.id];

//     db.query(sql, params, (err, row) =>{
//         if(err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: row
//         });
//     });
// });

// const employee = {
// {
//     addEmployee: function () {
//     router.post('/employee', ({ body }, res) => {
//         const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
//                      VALUES (?,?,?)`;
//         const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
      
//           db.query(sql, params, (err, result) => {
//             if(err) {
//                 res.status(400).json({ error: err.message });
//                 return;
//           }
//                 res.json({
//                     message: 'success',
//                     data: body,
//                     changes: result.affectedRows
//                 });
//       });
//       });
//     };

//   },
//   {  
//     viewAllEmployees: function () {
//         router.get('/employee', (req, res) => {
//             const sql = `SELECT * FROM employee`;
//             db.query(sql, (err, rows) => {
//                 if (err) {
//                     res.status(500).json({ error: err.message });
//                     return;
//                 }
//                 res.json({
//                     message: 'success',
//                     data: rows
//                 });
//             });
//     });
// };
// },
// {
//     deleteEmployees = function()  {
//         router.delete('/employee/:id', (req, res) => {
//             const sql = `DELETE FROM employee WHERE id =?`;
//             const params = [req.params.id];
        
//             db.query(sql, params, (err, result) => {
//                 if(err) {
//                     res.status(400).json({ error: res.message });
//                 } else if (!result.affectedRows) {
//                     res.json({
//                         message: 'Employee not found!'
//                     });
//                 }else {
//                     res.json({
//                         message: 'deleted',
//                         changes: result.affectedRows,
//                         id: req.params.id
//                     });
//                 };
//             });
//         }); 
//     };
// };
// };
// module.exports = router;
// module.exports = employeeRoutes;