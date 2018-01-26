const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', (req, res) => {
  res.send('Welcome to the Movie Night API');
});

router.get('/favourites', (req, res) => {

  res.send('List of all movies');
});

router.post('/favourites'), (req, res) => {

  res.send('Add favorite');
});



module.exports = router;
