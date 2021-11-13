# Mab Mab 

Mab Mab is a clone of yelp.com that focuses solely on restaurants in Phnom Penh. I worked for about a year in Phnom Penh, Cambodia and became prettly well acquainted with all the restaurants there since I ate out for dinner daily. Food in Cambodia is incredibly fresh and cheap! I always bring my camera with me when I eat out so I managed to take a snapshot of all the meals I had in Cambodia and added these photos as my seeder data. The name Mab Mab is play on words from the Cambodian word "cah mab." "Cah mab" means fat in the Khmer language. It's typical to have your elder nickname you "mab mab" in a cute and endearing way. 

- Live Link 
https://yelp-clone-kelsey-sry.herokuapp.com/ 

## Instructions on How to Install Mab Mab app 
1. run git clone 
2. run npm install in the root directory 
3. cd frontend, run npm install
4. cd backend, run npm install 
5. in the backend directory create a .env file. There is a .env.example that you can follow to structure the .env file. 
  - To generate a MAPS_API_KEY you must use your google account
    1. Create a Google developers project
    2. Enable Maps ....

6. in your backend directory, run the following commands:  
  -  npx dotenv sequelize-cli db:create
  -  npx dotenv sequelize-cli db:migrate
  -  npx dotenv sequelize-cli db:seed:all
