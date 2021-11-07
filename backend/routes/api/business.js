const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler')

const { Business } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
  const businesses = await Business.findAll();
  res.json(businesses) // sends an array of businesses to the front end

}));

router.get('/:businessId', asyncHandler(async (req, res) => {
  const business = await Business.findByPk(req.params.businessId);
  return res.json(business) // sends one business to the front end

}));

// create one business
router.post('/', asyncHandler(async function(req, res) {
  const businessId = await Business.create(req.body);
  return res.redirect(`${req.baseUrl}/${businessId}`)
})
)


module.exports = router;
