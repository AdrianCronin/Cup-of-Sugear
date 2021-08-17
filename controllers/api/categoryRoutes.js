const router = require('express').Router();
const { Category } = require('../../models');

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
        const categoryData = await Category.findByPk(req.params.id);
        const category = categoryData.get({plain: true});

        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;