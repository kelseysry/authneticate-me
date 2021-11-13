# Mab Mab 

![Home Page of Mab Mab](https://res.cloudinary.com/mabmab/image/upload/v1636833234/khmer_food/home_piicjk.png)

[Mab Mab](https://yelp-clone-kelsey-sry.herokuapp.com/)

## Summary 

[Mab Mab](https://yelp-clone-kelsey-sry.herokuapp.com/) 
is a website build off the idea of yelp.com but focuses solely on restaurants in Phnom Penh. Mab Mab was created by using React, Redux, Express, and PostgreSQL. Anyone who uses Mab Mab can do the following: 

- Sign up 
- Login and Log out
- Login as a demo user 
- View, add, delete, and edit restaurants. 
- View and add a review for a restaurant. 
- View the location of the restaurant on Google maps 

## Overall Structure 

**Back end** 
- The back end was created by using Express as a REST API server and postgreSQL database with user austhentication routes.  

**Front end** 
- The front end was created by using React, Redux, Flexbox, and Grid. The React front end uses the backend API routes to let a user sign up for an account, log in, and log out. 

**Libraries** 
- React 
- Redux 
- express
- dotenv
- express-async-handler - handling async route handler 
- express-validator - validation of request bodies
- bcryptjs - hash passwords  
- csurf - CSRF protection
- faker - random seeding library 
- jsonwebtoken - JWT
- cors - Cross-Origin Resource Sharing,

## Primary Components 

**User Authorizaition** 
When a user logs in, the API login route will be sent with a request that has the user's email or username and password. The password that the user utilized to log in is then hashed and compared to the hashed password that is stored in the databse. If these passwords are the same, the API login route sends back at JWT in an HTTP-only cookie. 

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
