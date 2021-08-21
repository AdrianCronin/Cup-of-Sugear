const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Gear, Borrow, Category } = require('../../Models');

// find all gear for a user simulating logic using random generated user id
router.get('/mygear', async (req, res) => {
    try {
        const user_id = req.session.user_id;

        // get all gear for the current user
        const myGearData = await Gear.findAll({
            where: { user_id: user_id }
        });
        const myGear = myGearData.map((item) => item.get({ plain: true }));

        // get all gear current user is borrowing
        const borrowedResults = await sequelize.query(`
        SELECT 
            borrow.id, borrow.date_out, borrow.date_in, borrow.user_id as borrower_id, borrow.gear_id, gear.name AS gear_name, 
            gear.description, gear.user_id as owner_id, CONCAT(user.first_name, " ", user.last_name) as owner_name
        FROM borrow
        JOIN gear ON gear.id = borrow.gear_id
        JOIN user ON gear.user_id = user.id
        ORDER BY borrow.id;
        `);

        // save only logged in user's borrowed gear
        const borrowedGear = [];
        borrowedResults[0].forEach(element => {
            if (element.borrower_id === user_id) {
                borrowedGear.push(element);
            }
        });
        console.log(borrowedGear);

        // get categories to use in add gear form
        const categoryData = await Category.findAll();
        const categories = categoryData.map((category) => category.get({ plain: true }));

        res.render('mygear', {
            gear: myGear,
            borrowedGear,
            categories,
            logged_in: req.session.logged_in,
            full_name: req.session.full_name,
            gear_page: true,
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

// find all gear
router.get('/', async (req, res) => {
    try {
        const gearData = await Gear.findAll();
        const gear = gearData.map((item) => item.get({ plain: true }));

        res.status(200).json(gear);
    } catch (err) {
        res.status(500).json(err);
    };
});

// find a piece of gear
router.get('/:id', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001/api/gear${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

// update gear route
router.put('/update/:id', async (req, res) => {
    try {
        // res.json(`Reached path: http://localhost:3001/api/gear${req.path} `);
        const gear = await Gear.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json(gear);
    } catch (err) {
        res.status(500).json(err);
    };
});

// update gear view
router.get('/update/:id', async (req, res) => {
    try {

        // find the gear item
        const gearData = await Gear.findByPk(req.params.id);
        const gear = gearData.get({ plain: true });

        // get categories to use in edit gear form
        const categoryData = await Category.findAll();
        const categories = categoryData.map((category) => category.get({ plain: true }));

        res.render('editgear', {
            gear,
            categories,
            logged_in: req.session.logged_in,
        });
        // res.json(`Reached path: http://localhost:3001/api/gear${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

// delete gear route
router.delete('/delete/:id', async (req, res) => {
    try {
        // res.json(`Reached path: http://localhost:3001/api/gear${req.path} `);
        const gearData = await Gear.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json(gearData);
    } catch (err) {
        res.status(500).json(err);
    };
});

// add gear
router.post('/create', async (req, res) => {
    try {
        const newGear = await Gear.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newGear);

    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;