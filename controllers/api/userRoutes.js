const router = require('express').Router();
// const { User } = require('../../models');

// Create new user signup Post route
router.post('/signup', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001/api/users${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

// login post route
router.post('/login', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001/api/users${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

// login post route
router.post('/logout', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001/api/users${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

// update user's password put route
router.put('/update/:id', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001/api/users${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;