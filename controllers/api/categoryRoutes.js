const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Category, Gear, Borrow } = require('../../Models');
const withAuth = require('../../Utils/auth');

// find all items available to borrow in a category
router.get('/:id', async (req, res) => {
    try {
        // get all gear items with the borrow table
        const gearResults = await sequelize.query(`
        SELECT gear.*, borrow.id AS borrow_id
        FROM gear
        LEFT JOIN borrow
        ON borrow.gear_id = gear.id
        `);

        // make array of items that have no borrow id and match the category
        const gear = [];
        gearResults[0].forEach(element => {
            if( element.borrow_id === null && element.category_id == req.params.id) {
                gear.push(element);
            }
        });

        // get the category's name
        const categoryData = await Category.findByPk(req.params.id);
        const category = categoryData.get({ plain: true });

        res.render('browse', {
            gear,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id,
            browse: true,
            category: category.category
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

// find all categories
router.get('/', withAuth, async (req, res) => {
    try {
        const categoryData = await Category.findAll();
        const categories = categoryData.map((category) => category.get({ plain: true }));

        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;