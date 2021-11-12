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
        },
        {
          userId: 4,
          businessId: 1,
          rating: 5,
          answer: 'I try to come every weekend! Whenever my friends come from abroad, I bring them here and they absolutely LOVE it! Each time they come, they bring pounds of coffee from Mr. Bounnreath to take home with them! He grinds his coffee fresh daily so it is incredibly good!!',
          imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636735201/khmer_food/pou_coffee_rus3lw.png'
        },
        {
          userId: 3,
          businessId: 1,
          rating: 1,
          answer: 'This place is always crowded!! It is hard to get a seat!',
          imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636484330/khmer_food/2019-10-05_11_23_44.802_xnfcnu.jpg'
        },
        {
          userId: 6,
          businessId: 1,
          rating: 5,
          answer: 'I am officially a regular at this shop :) Mr.Bounnreath is like an uncle to me now! I love coming here alone on Saturday mornings and just sip on coffee while watching the people shop in Russian market.',
          imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636735586/khmer_food/IMG_0994_vwrf3i.jpg'
        }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
