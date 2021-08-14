const router = require('express').Router();
// const { Gear } = require('../../models');

// find all items
router.get('/', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001/api/items${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

// find an item
router.get('/:id', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001/api/items${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;