const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Gear, Borrow, Category } = require('../../Models');
const withAuth = require('../../Utils/auth');

//check out gear to currently logged in user

//id will autofill when Borrow obj created
//date out is today's date
//date in will be 2 weeks from today, can use helper obj??
//gear id will come from submit event on button click

// borrow item view route
router.get('/:id', withAuth, async (req, res) => {
    try {
        // res.json(`Reached path: http://localhost:3001/api/borrow${req.path} `);
        // if (req.session.logged_in) {
        //     res.redirect('/dashboard');
        //     return;
        //   }

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
            ...req.body,
        });

        res.status(200).json(newBorrow);
    } catch (err) {
        res.status(500).json(err);
    };
});


module.exports = router;