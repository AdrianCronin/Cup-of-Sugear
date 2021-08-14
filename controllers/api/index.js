const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const itemRoutes = require('./itemRoutes');


router.use('/users', userRoutes);
router.use('/categoryRoutes', categoryRoutes);
router.use('/itemRoutes', itemRoutes);

module.exports = router;