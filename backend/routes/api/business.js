const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler')

const { Business } = require('../../db/models');

// async function to delete a business 
async function deleteBusiness(businessId) {
  const business = await Business.findByPk(businessId);
  if(!business) throw new Error ('Can not find business');

  await Business.destory({where: {id: business.id}});
  return business.id
}

router.get('/', asyncHandler(async (req, res) => {
  const businesses = await Business.findAll();
  res.json(businesses) // sends an array of businesses to the front end

}));

router.get('/:businessId', asyncHandler(async (req, res) => {
  const business = await Business.findByPk(req.params.businessId);
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

// delete one business
router.delete('/:businessId', asyncHandler(async(req, res) => {
  const businessId = await Business.deleteBusiness(req.params.id);
  return res.json({businessId})
}))

module.exports = router;
