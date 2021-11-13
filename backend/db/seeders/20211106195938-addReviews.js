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
        imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636484472/khmer_food/crab2_cbm0xs.png'
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
          userId: 7,
          businessId: 1,
          rating: 5,
          answer: 'Condensed milk in your coffee. A+ combo',
          imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636789226/khmer_food/DSC03297_mcbvhi.jpg'
        },
        {
          userId: 6,
          businessId: 1,
          rating: 5,
          answer: 'I am officially a regular at this shop :) Mr.Bounnreath is like an uncle to me now! I love coming here alone on Saturday mornings and just sip on coffee while watching the people shop in Russian market.',
          imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636735586/khmer_food/IMG_0994_vwrf3i.jpg'
        },
        {
          userId: 6,
          businessId: 3,
          rating: 5,
          answer: "Okay, hear me out. Order the snails, fried chicken feet, and grilled egg plants with a can of beer. I ordered all of this for my birthday and the total cost was less than $20! Come around 5pm so you can grab a nice seat on the second floor and watch the sun set while you eat :)!! I still think about those snails! They are so GOOOD. They come with this lemon, pepper, salt sauce. It's a challenge to get the snail out of its shell but once you do, man!!!!!",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636786116/khmer_food/IMG_9926_kltuax.jpg"
        },
        {
          userId: 5,
          businessId: 3,
          rating: 5,
          answer: "The grilled fish is so crunchy!",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636786365/khmer_food/fish_spark_ltycve.png",
        },
        {
          userId: 5,
          businessId: 2,
          rating: 4,
          answer: 'The grilled shrimp here is one of there top selling meals!',
          imageUrl: 'https://res.cloudinary.com/mabmab/image/upload/v1636786869/khmer_food/shrimp_lgfy02.png',
        },
        {
          userId: 2,
          businessId: 2,
          rating: 4,
          answer: "My favorite place to get oysters! For every plate of oysters, they give you a bunch of garlic, lemon sauce, and vegetables to top it.",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636786993/khmer_food/oyster_qqze2a.png",
        },
        {
          userId: 1,
          businessId: 2,
          rating: 3,
          answer: "This place is super crowded! Waiting time to get a seat might be a while. Food is good though.",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636787086/khmer_food/squid_uewqax.png"
        },
        {
          userId: 6,
          businessId: 4,
          rating: 5,
          answer: "The ah kour here is made at 4AM! Best Ah Kour in Cambodia!",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636350420/khmer_food/Screen_Shot_2019-11-10_at_11.45.34_PM_ch7654.png",
        },
        {
          userId: 2,
          businessId: 4,
          rating: 5,
          answer: "I love coming here and watching them make it!!",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636789090/khmer_food/ah_kour_gdr778.png",
        },
        {
          userId: 6,
          businessId: 8,
          rating: 4,
          answer: "The best stir fried noodles for cheap. The only con is that you'll be smelling like it all day long haha! The smell literally sticks to your clothes!! Would not advise wearing your favorite clothes here.",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636789283/khmer_food/near_unesco_part4_i3vomc.png"
        },
        {
          userId: 2,
          businessId: 8,
          rating: 4,
          answer: "The noodles are made right in front of the shop so you can't help but be enticed into the shop. Smells so good!",
          imageUrl: "https://res.cloudinary.com/mabmab/image/upload/v1636789440/khmer_food/near_unesco_part2_romdis.png"
        },
        
        // {
        //   userId: 6,

        // }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
