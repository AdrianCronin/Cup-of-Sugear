const router = require('express').Router();
const { User } = require('../../models');

// Create new user signup Post route
router.post('/signup', async (req, res) => {
  try {
    // res.json(`Reached path: http://localhost:3001/api/users${req.path} `);
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (userData) {
      res
        .status(400)
        .json({ message: 'User already exists' });
      return;
    }

    //create new user
    const newUserData = await User.create(req.body);
    const newUser = newUserData.get({ plain: true });

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      req.session.full_name = `${newUser.first_name} ${newUser.last_name}`;

      res.json({ user: newUser, message: 'Successfully logged in.' });
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

// login post route
router.post('/login', async (req, res) => {
  try {
    // res.json(`Reached path: http://localhost:3001/api/users${req.path} `);
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.full_name = `${userData.first_name} ${userData.last_name}`;

      res.json({ user: userData, message: 'Successfully logged in.' });
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

// logout post route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// login post route
router.post('/logout', async (req, res) => {
  try {
    res.json(`Reached path: http://localhost:3001/api/users${req.path} `);
  } catch (err) {
    res.status(500).json(err);
  };
});

// // update user's password put route
// router.put('/update/:id', async (req, res) => {
//   try {
//     res.json(`Reached path: http://localhost:3001/api/users${req.path} `);
//   } catch (err) {
//     res.status(500).json(err);
//   };
// });

// update user's password view route
router.get('/edituser', async (req, res) => {
  try {
    res.render('edituser', {
      logged_in: req.session.logged_in,

    });
  } catch (err) {
    res.status(500).json(err);
  };
});

// update user's password put route
router.put('/edituser', async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);
    await user.update(req.body);
    res.status(200).message('Password successfully updated.');
  } catch (err) {
    res.status(500).json(err);
  };
});

// delete user route
router.delete('/delete/:id', async (req, res) => {
  try {
    res.json(`Path: http://localhost:3001/api/users${req.path}. Access denied.`);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;