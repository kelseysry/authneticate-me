'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Businesses', [
        {
        ownerId: 2,
        title: 'Best Iced Coffee',
        description: 'A small coffee stand tucked inside Russian Market that has been serving world-famous iced coffee since 1981 by Mr.Bounnareth.',
        address: 'Street 454, Number 68, Toul Tum Poung',
        city: 'Phnom Penh',
        zipCode: '12310',
        imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636226884/khmer_food/coffee_man_russian_aes9eq.png',
        lat:11.540526555498468,
        lng: 104.91522593956448,
        },
        {
          ownerId: 3,
          title: 'Tuol Tom Pong Seafood - Street Food',
          description: 'Fresh grilled seafood located on the side of Russian Market',
          address: 'St 450',
          city: 'Phnom Penh',
          zipCode: '12310',
          imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636248447/khmer_food/oysterJ_ceurjg.jpg',
          lat: 11.539970,
          lng: 104.914864
        },
        {
          ownerId: 4,
          title: 'Khmer Food Spark Cafe',
          description: 'Fresh grilled seafood food on the daily. During special months, grilled honey comb is available.',
          address: '242 Rue Pasteur No. 51',
          city: 'Phnom Penh',
          zipCode: '120308',
          imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636267178/khmer_food/snail_f2e6nu.png',
          lat:11.558446528422527,
          lng: 104.92501818402742
        },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Businesses', null, {});

  }
};
