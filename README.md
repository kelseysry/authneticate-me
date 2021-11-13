# Mab Mab 

![Home Page of Mab Mab](https://res.cloudinary.com/mabmab/image/upload/v1636833234/khmer_food/home_piicjk.png)

Mab Mab is a clone of yelp.com that focuses solely on restaurants in Phnom Penh

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
