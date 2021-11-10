// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const businessRouter = require('./business.js');
const reviewRouter = require('./review.js')
const mapsRouter = require('./maps');


const { route } = require('./session.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/business', businessRouter);

router.use('/review', reviewRouter)

router.use('/maps', mapsRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});



module.exports = router;
