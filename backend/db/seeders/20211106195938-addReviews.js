'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Reviews', [
        {
        userId: 1,
        businessId: 1,
        rating: 5,
        answer: 'On the quest to find the best coffee shop in Phnom Penh and I ended up in a small stall tucked away in the Russian Market. It might be a bit of challenge to find Mr. Bounnreath’s coffee shop but here’s a hint, it’s in the general food court area and near the wall. Mr. Bounnreath is a super sweet man so no worries if you don’t speak Khmer :). He has customers flocking from all over the world!',
        imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636226939/khmer_food/DSC00740_d8urky.jpg',
        },
        {
        userId: 1,
        businessId: 2,
        rating: 5,
        answer: 'WHERE THE LOCALS GO FOR SEAFOOD!!!!!! Absolutely AMAZING. The wait can be kind of long but WOW it is WORTH IT. Highly recommend getting the crabs and oyster!!!!',
        imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636248447/khmer_food/oysterJ_ceurjg.jpg'
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
