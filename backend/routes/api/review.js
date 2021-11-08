const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler')

const { Review } = require('../../db/models')


// get review   // actually not using right now! Using the business router instead
router.get('/', asyncHandler(async(req,res) => {
  const reviews = await Review.findAll();
  res.json(reviews)
}))




// create review

module.exports = router;
