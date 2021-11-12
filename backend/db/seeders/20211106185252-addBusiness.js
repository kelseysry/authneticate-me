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
        {
          ownerId: 5,
          title: "Ah Kour",
          description: 'We have been selling Ah Kour for over 30 years. Ah kour is a traditional Cambodian dessert that is made out of rice flour and is often mixed with coconut milk. We open the shop at 4:00AM to start cooking at close at 4:30PM',
          address: 'Oknha Tep Phan St. 182',
          city: 'Phnom Penh',
          zipCode: '120307',
          imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636485440/khmer_food/ahkour_k9qlma.png',
          lat: 11.564021643454724,
          lng: 104.91627181671672
        },
        {
          ownerId:3,
          title: "Romdeng",
          description: "Plating up truly traditional recipes to creative Cambodian cuisine, our menu will be sure to satisfy your longing for local food. Come try our unique specialities, tarantula and crickets!",
          address: "74 Oknha Ket St. 174",
          city: 'Phnom Penh',
          zipCode: '120307',
          imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636509409/khmer_food/spider_mdvk4i.png',
          lat: 11.565242916938224,
          lng: 104.9226067093229
        },
        {
          ownerId: 3,
          title: "Magnolia",
          description: "Vietnamese restaurant that serves classic dishes like Banh Chao, Pho, Banh Mi.",
          address: "55 Oknha Pich St. 242",
          city: "Phnom Penh",
          zipCode: '12207',
          imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636316652/khmer_food/banh_chao_compressed_w73ysg.png',
          lat: 11.55810675215716,
          lng: 104.92521869747888
        },
        {
          ownerId:3,
          title: "Malis",
          description: 'When you dine at Malis, not only do you get to savor delicious Cambodian cuisine, you also consume an important story. Many traditional recipes were lost because of the Khmer Rouge in 1970. Malis was born to restore Cambodian cuisine.',
          address: '136 Norodom Blvd',
          city: 'Phnom Penh',
          zipCode: '12301',
          imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636662981/khmer_food/malis_aaldjb.png',
          lat: 11.554081576008095,
          lng: 104.9290223294673
        }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Businesses', null, {});

  }
};
