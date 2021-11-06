const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler')

const { Business } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
  const businesses = await Business.findAll();
  res.json(businesses)

}));


module.exports = router;
