const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler')

const { sequelize, Business } = require('../../db/models');

const businessNotFoundError = id => {
  const err = Error('Business not found');
  err.errors = [`Business with id of ${id} could not be found.`];
  err.title = 'Business not found.';
  err.status = 404;
  return err;
}

router.get('/', asyncHandler(async (req, res) => {
  const businesses = await Business.findAll();
  res.json(businesses) // sends an array of businesses to the front end

}));

router.get('/:businessId', asyncHandler(async (req, res) => {
  const business = await Business.findByPk(req.params.businessId);
  // console.log("this is business", business)
  return res.json(business) // sends one business to the front end

}));

// create one business
router.post('/', asyncHandler(async (req, res) =>{
  const id = await Business.create(req.body);
  // console.log("this is in api", id)
  // res.redirect(`/${id}`)
  return res.json(id)
})
)

// edit one business
router.put('/:businessId', asyncHandler(async (req, res) => {
  let previousObj = await Business.findByPk(req.params.businessId)
  console.log("this is the previous", previousObj)
  console.log("this is req.body", req.body)

  if(previousObj) {
    previousObj.title = req.body.title
    await previousObj.save();
    res.json({previousObj})
  } else {
    next(businessNotFoundError(req.params.businessId))
  }



  // const {title, description, address, city, zipCode, imageUrl} = req.body
  // await previousObj.update({title:title, description:description, address:address, city, zipCode, imageUrl})
  // let newobj = await previousObj.save()
  // return res.json(newobj)
}))

// delete one business
router.delete('/:businessId', asyncHandler(async(req, res) => {
  const businessId = await Business.deleteBusiness(req.params.id);
  return res.json({businessId})
}))

module.exports = router;
