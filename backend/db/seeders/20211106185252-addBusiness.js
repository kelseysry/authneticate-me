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
        },
        {
          ownerId:3,
          title: "Sok Leng Lort Cha",
          description: "For over 25 years, our business has been serving classic Cambodian stir fried noodles!",
          address: "18 Preah Ang Makhak Vann St. 178",
          city: "Phnom Penh",
          zipCode: "12206",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636655089/khmer_food/near_unesco_part3_aqmdww.png",
          lat: 11.56684406195201,
          lng: 104.9306582807501
        },
        {
         ownerId:3,
         title: '126 The Noodle Factory',
         description: "Slow cooked berry curry, pho, and num bao served daily fresh in the morning.",
         address: "126 St 13 corner St 136",
         zipCode: "12204",
         city: 'Phnom Penh',
         imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636784594/khmer_food/Screen_Shot_2021-11-12_at_10.22.28_PM_nwj6rb.png",
         lat: 11.570999164664489,
         lng: 104.9278965209347
        },
        {
          ownerId: 3,
          title: "88 Cafe",
          description: "Traditional Cambodian served daily - breakfast, lunch, and dinner.",
          address:"88 Krala Haom Kong St.",
          zipCode: "12204",
          city: 'Phnom Penh',
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636645601/khmer_food/bread_curry_f8zezf.png",
          lat: 11.572000853267086,
          lng: 104.92701572870371
        },
        {
          ownerId: 3,
          title: "Coffee Lab Kh",
          description: "Spacious modern cafe. Customers are free to work in the cafe, hold meetings, and meet with friends.",
          address:"House 309 St 265 Sangkat Teuk Laak 2",
          zipCode: "12105",
          city: 'Phnom Penh',
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636597469/khmer_food/IMG_0405_cn9bl9.jpg",
          lat: 11.561850410925317,
          lng: 104.89153787321227
        },
        {
          ownerId: 7,
          title: "Pho Sorya 118",
          description: "Vietnamese pho with a Cambodian twist. The owner is from Vietnam",
          address: "26 Preah Chey Chetha St. 118",
          zipCode: "12204",
          city: "Phnom Penh",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636388692/khmer_food/pho_xiqrut.png",
          lat: 11.571119446214905,
          lng: 104.9212223588955
        },
        {
          ownerId: 7,
          title: "Meatophum",
          description: "Traditional Cambodian food",
          address: "60 Preah Monivong Blvd 93",
          zipCode: "12205",
          city: "Phnom Penh",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636790400/khmer_food/meatophum_obvlal.png",
          lat:11.577779806503697,
          lng: 104.9179888947942
        },
        {
          ownerId: 4,
          title: "J Mey Meatballs Battambang",
          address: "Samdach Sang Neayok Srey St. 67",
          zipCode: "12205",
          city: "Phnom Penh",
          description: "Specialize in fried meatballs and bread from Battambang",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636790595/khmer_food/meatball_q9fvlh.png",
          lat: 11.571349276541694,
          lat:104.91992712107161
        },
        {
          ownerId: 7,
          title: "La Pergola",
          address: "28 St 184",
          zipCode: "12205",
          city: "Phnom Penh",
          description: "Western and Khmer food served poolside in a casual atmosphere, with an impressive breakfast buffet. Come evening, dine at La Pergola and be inspired by creative cuisine. The familiar and exotic, together at last.",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636792934/khmer_food/la_pergola_yezemm.png",
          lat: 11.563768879937864,
          lng: 104.92691462639586
        },
        {
          ownerId: 3,
          title: "Sundown Social Club",
          address: "86 St 440",
          zipCode: "12310",
          city: "Phnom Penh",
          description: "Great place to grab drinks and chat with friends!",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636793666/khmer_food/Screen_Shot_2021-11-13_at_12.54.08_AM_ip80c1.png",
          lat: 11.541344606160509,
          lng:104.91480691290407
        },
        {
          ownerId: 7,
          title: "Little Sheep Hot Pot",
          address: "House 27 214",
          zipCode: "12211",
          city: "Phnom Penh",
          description: "Hot pot restaurant chain",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636794107/khmer_food/hotpot_awmese.png",
          lat: 11.56146469256715,
          lng:104.92485899755961
        },
        {
          ownerId: 3,
          title: "The Pizza Company",
          address: "Mao Tse Toung Blvd",
          zipCode: "12105",
          city: "Phnom Penh",
          description: "Pizza chain in Cambodia",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636794569/khmer_food/pizza_wobsgp.png",
          lat: 11.550934812959493,
          lng: 104.89223956149264
        },
        {
          ownerId: 7,
          title: "Katanashi",
          address: "51 Street Village 5 Commune BKK1 District",
          zipCode: "12000",
          city: "Phnom Penh",
          description: "Luxury Japanese restaurant",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636795121/khmer_food/ka_yv0wrn.png",
          lat: 11.5545554314904,
          lng: 104.92679685337878
        },
        {
          ownerId: 3,
          title: "Food Stall - Insects",
          address: "Samdach Preah Thoamak Lekhet Ouk St 184",
          zipCode: "12206",
          city: "Phnom Penh",
          description: "Food stall that sells fried insects like crickets, spiders, and larvae every night",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636795715/khmer_food/bugs_jb54mh.png",
          lat: 11.565903603347152,
          lng: 104.93148941959797
        },
        {
          ownerId: 5,
          title: "Orussey Market - Street Food",
          address: "Oknha Tep Phan St 182",
          zipCode: '120307',
          city: "Phnom Penh",
          description: "Food stall that specializes in fried street foot",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636795720/khmer_food/snack_dnhpvz.png",
          lat: 11.563513146861608, lng: 104.91629988375026

        }




    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Businesses', null, {});

  }
};
