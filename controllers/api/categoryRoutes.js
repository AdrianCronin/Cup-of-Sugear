const router = require('express').Router();
const { Category, Gear } = require('../../models');

// find all categories
router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll();
        const categories = categoryData.map((category) => category.get({ plain: true }));

        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    };
});

// find a category by id
router.get('/:id', async (req, res) => {
    try {
        const gearData = await Gear.findAll({
            where: { category_id: req.params.id },
            include: [{
                model: Category,
                attributes: ['category']
            }]
        });

        const gear = gearData.map((item)=>item.get({ plain: true }));

        res.render('browse', {gear});
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;