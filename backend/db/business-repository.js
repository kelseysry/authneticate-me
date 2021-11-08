const { Business } = require("./models")



// async function to delete a business
async function deleteBusiness(businessId) {
  const business = await Business.findByPk(businessId);
  if(!business) throw new Error ('Can not find business');

  await Business.destory({where: {id: business.id}});
  return business.id
}

async function one(id) {
  return await Business.scope("detailed").findByPk(id);
}


module.exports = {
  one,
  create,
  update,
  list,
  random,
  battle,
};
