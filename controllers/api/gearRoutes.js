const router = require('express').Router();
const { Gear } = require('../../models');

// find all owned gear for the current user
router.get('/', async (req, res) => {
    try {
        const ownedGearData = await Gear.findAll();
        const ownedGear = ownedGearData.map((item) => item.get({plain: true}));

        res.status(200).json(ownedGear);
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
        res.json(`Reached path: http://localhost:3001/api/gear${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

// delete gear route
router.delete('/delete/:id', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001/api/gear${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;