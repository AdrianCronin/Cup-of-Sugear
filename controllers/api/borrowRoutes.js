const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Gear, Borrow, Category } = require('../../Models');
const withAuth = require('../../Utils/auth');

// borrow item view route
router.get('/:id', withAuth, async (req, res) => {
    try {
        // res.json(`Reached path: http://localhost:3001/api/borrow${req.path} `);
        // find the gear item
        const gearData = await Gear.findByPk(req.params.id);
        const gear = gearData.get({ plain: true });

        res.render('borrow', {
            gear,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id,
            borrow_confirm: true,
        });

    } catch (err) {
        res.status(500).json(err);
    };
});

// borrow item post route
router.post('/new', async (req, res) => {
    try {
        
        const newBorrow = await Borrow.create({
            user_id: req.body.user_id,
            gear_id: req.body.gear_id
        });

        res.status(200).json(newBorrow);
    } catch (err) {
        res.status(500).json(err);
    };
});

// return item route
router.get('/return/:id', withAuth, async (req, res) => {
    try {

        const borrowData = await Borrow.destroy({
            where: {
                gear_id: req.params.id,
            }
        });

        res.redirect('/api/gear/mygear');

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;