const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler')

const { Business } = require('../../db/models');
const { Review } = require('../../db/models')
const { User } = require('../../db/models')

const businessNotFoundError = businessId => {
  const err = Error('Business not found');
  err.errors = [`Business with id of ${businessId} could not be found.`];
  err.title = 'Business not found.';
  err.status = 404;
  return err;
}

router.get('/', asyncHandler(async (req, res) => {
  const businesses = await Business.findAll();
  res.json(businesses) // sends an array of businesses to the front end

}));

router.get('/:businessId(\\d+)', asyncHandler(async (req, res) => {
  const business = await Business.findByPk(req.params.businessId, {
    include: [User]
  });
  // console.log("this is business maybe User", business.User)
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
router.put('/:businessId(\\d+)', asyncHandler(async (req, res, next) => {
  const business = await Business.findByPk(req.params.businessId)

  // console.log("business in api route", business)
  if(business) {
    business.title = req.body.title || business.title;
    business.description = req.body.description || business.description;
    business.address = req.body.address || business.address;
    business.city = req.body.city || business.city;
    business.zipCode = req.body.zipCode || business.zipCode;
    business.imageUrl = req.body.imageUrl || business.imageUrl;

    await business.save();
    console.log("api route, res.json(business)", business) // business is saving properly
    res.json({business})
  } else {
    // next(businessNotFoundError(req.params.businessId))


  }
  // const {title, description, address, city, zipCode, imageUrl} = req.body
  // await previousObj.update({title:title, description:description, address:address, city, zipCode, imageUrl})
  // let newobj = await previousObj.save()
  // return res.json(newobj)
  })
);

// delete one business
router.delete('/:businessId(\\d+)', asyncHandler(async(req, res, next) => {
  const business = await Business.findByPk(req.params.businessId);
  if (business) {
    await business.destroy();
    res.status(204).end();
  } else {
    next(businessNotFoundError(req.params.businessId))
  }
}));

// get reviews for one business
router.get('/:businessId(\\d+)/reviews', asyncHandler(async(req, res) => {
  const business = await Business.findByPk(req.params.businessId);

  const reviews = await Review.findAll({
    where: {
      businessId: business.id
    },
    include: [User]
  })

  // const reviews = await Review.findAll({
  //   where: {
  //     businessId: business.id
  //   },
  //     include: [User]
  //   })

  console.log("this is reviews", reviews)
  // console.log("this is reviews.User, no array", reviews.User)
  // console.log("this is reviews.User", reviews[0].User)

  return res.json(reviews)
}))

// create one review for one business
router.post('/:businessId(\\d+)/reviews', asyncHandler(async(req,res) => {
  const review = await Review.create(req.body);
  console.log("review in backend", review)
  return res.json(review)
}))

module.exports = router;
