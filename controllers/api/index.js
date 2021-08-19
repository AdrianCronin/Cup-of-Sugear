const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const gearRoutes = require('./gearRoutes');


router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/gear', gearRoutes);

module.exports = router;