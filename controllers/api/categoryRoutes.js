const router = require('express').Router();
const { Category } = require('../../models');

// find all categories
router.get('/', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001/api/categories${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

// find a category by id
router.get('/:id', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001/api/categories${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;