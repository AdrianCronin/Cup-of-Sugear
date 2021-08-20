const router = require('express').Router();
const { User } = require('../../models');

// Create new user signup Post route
router.post('/signup', async (req, res) => {
    // try {
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

          console.log(newUserData);
      
            // Create session variables based on the logged in user
            req.session.save(() => {
              req.session.user_id = newUserData.id;
              req.session.logged_in = true;
              req.session.full_name = `${userData.first_name} ${userData.last_name}`;
              
              res.json({ user: newUserData, message: 'Successfully logged in.' });
            });
    // } catch (err) {
    //     res.status(500).json(err);
    // };
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

// update user's password put route
router.put('/update/:id', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001/api/users${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

// delete user route
router.delete('/delete/:id', async (req, res) => {
    try {
        res.json(`Reached path: http://localhost:3001/api/users${req.path} `);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;