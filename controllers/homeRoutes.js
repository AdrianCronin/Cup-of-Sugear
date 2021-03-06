const { models, Category } = require('../Models');
const router = require('express').Router();
const withAuth = require('../Utils/auth');

// homepage route
// Categories displayed
router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll();
        const categories = categoryData.map((category) => category.get({ plain: true }));

        res.render('homepage', {
            categories,
            logged_in: req.session.logged_in,
            full_name: req.session.full_name,
            homepage: true
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

// login page route
router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    };
});

// login page route
router.get('/edituser', async (req, res) => {
    try {
        if (!req.session.logged_in) {
            res.redirect('/login');
            return;
          }
        res.render('edituser');
    } catch (err) {
        res.status(500).json(err);
    };
});

// signup page route
router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;