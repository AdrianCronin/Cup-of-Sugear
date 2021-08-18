const router = require('express').Router();
const { Gear } = require('../../models');

// find all gear for a user simulating logic using route params
// TODO: add logic that finds the currently signed in user's gear
router.get('/user/:id', async (req, res) => {
    try {
        const gearData = await Gear.findAll({
            where: { user_id: req.params.id}
        });
        const gear = gearData.map((item) => item.get({plain: true}));

        res.status(200).json(gear);
    } catch (err) {
        res.status(500).json(err);
    };
});

// find all gear
router.get('/', async (req, res) => {
    try {
        const gearData = await Gear.findAll();
        const gear = gearData.map((item) => item.get({plain: true}));

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