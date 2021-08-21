const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const gearRoutes = require('./gearRoutes');
const borrowRoutes = require('./borrowRoutes');



router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/gear', gearRoutes);
router.use('/borrow', borrowRoutes);

module.exports = router;