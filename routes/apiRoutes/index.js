const express = require('express');
const router = express.Router();

router.use(require('./departmentRoutes'));
router.use(require('./EmployeeRoutes'));
router.use(require('./rolesRoutes'));

module.exports = router;