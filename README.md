![Home Page of Mab Mab](https://res.cloudinary.com/mabmab/image/upload/v1636833234/khmer_food/home_piicjk.png)

# Summary 

[Mab Mab](https://yelp-clone-kelsey-sry.herokuapp.com/) 
is a website build off the idea of yelp.com but focuses solely on restaurants in Phnom Penh. Mab Mab was created by using React, Redux, Express, and PostgreSQL. Anyone who uses Mab Mab can do the following: 

- Sign up 
- Login and Log out
- Login as a demo user 
- View, add, delete, and edit restaurants. 
- View and add a review for a restaurant. 
- View the location of the restaurant on Google maps 

## Index

- [Feature List Document](https://github.com/kelseysry/Mab-Mab/wiki/Features)
- [React Components list](https://github.com/kelseysry/Mab-Mab/wiki/React-Components-List)
- [Database Schema](https://github.com/kelseysry/Mab-Mab/wiki/Database-Scheme)
- [Front End Routes Document](https://github.com/kelseysry/Mab-Mab/wiki/Front-End-Routes-Document)
- [API Routes document](https://github.com/kelseysry/Mab-Mab/wiki/API-Routes-document)

# Overall Structure 

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

# Primary Components 

**User Authorizaition** 

When a user logs in, the API login route will be sent with a request that has the user's email or username and password. The password that the user utilized to log in is then hashed and compared to the hashed password that is stored in the databse. If these passwords are the same, the API login route sends back at JWT in an HTTP-only cookie. 

![login page](https://res.cloudinary.com/mabmab/image/upload/v1636836616/khmer_food/login_osmrto.png)

## Explore Page 

A user can scroll through the explore page to view the different restaurants in Phnom Penh, Cambodia. Each restaurant picture is a nav link that will navigate a user to that restaurant's page. 
![explore page part 1](https://res.cloudinary.com/mabmab/image/upload/v1636843433/khmer_food/explore1_okwtru.png)
![explore page part 2](https://res.cloudinary.com/mabmab/image/upload/v1636843442/khmer_food/explore2_imeawp.png)

## Single Business Page

A user can edit or delete a specific business. Users can also leave reviews for the business as well as edit their review. 
![single business page part 1](https://res.cloudinary.com/mabmab/image/upload/v1636843850/khmer_food/single1_io7spj.png)
![single_business page part 2](https://res.cloudinary.com/mabmab/image/upload/v1636843847/khmer_food/single2_gpedkz.png)

## Form to add a restaurant 
![form to add a restaurant](https://res.cloudinary.com/mabmab/image/upload/v1636844135/khmer_food/form_r1jcrm.png)

## Form to edit a review 
![form to edit a review](https://res.cloudinary.com/mabmab/image/upload/v1636879658/khmer_food/edit_review_rwswkv.png)

# Technical Implementation Details

The most challenging thing about this project was this bug that kept rendering reviews from another business on the page of a newly created business. Upon refresh of the newly created business, the reviews from another business would disappear. The frustrating thing about this bug is that it happens occaionally, it doesn't appear all the time. So I solved it by creating an action creator that would clear the previous old state values when loading a business page. Thus, when a business page is created, the user is redirected from the form page to the newly created business page with no reviews. 
![bug](https://res.cloudinary.com/mabmab/image/upload/v1636844770/khmer_food/tech_och94d.png)

# To-dos 
- [ ] add edit/delete functionality for reviews 
- [ ] add a search bar 

# Instructions on How to Install Mab Mab app 
1. run git clone 
2. run npm install in the root directory 
3. cd frontend, run npm install
4. cd backend, run npm install 
5. in the backend directory create a .env file. There is a .env.example that you can follow to structure the .env file. 
6. To generate a MAPS_API_KEY you must use your google account. The [resource](https://github.com/Lazytangent/Google-Maps-API-Walkthrough) I used to develop a MAP API KEY.
    1. Go to [Google Cloud console](https://console.cloud.google.com/)
    2. Click `Select a Project` and then click on `New Project`. Pick a name for the project and put the location as `No Organization` then click `create` 
    ![step1](https://res.cloudinary.com/mabmab/image/upload/v1636849102/khmer_food/step1_ggni4z.png)
    3. Click `APIs & Services` in the side navigation bar and then click `Credentials`. After that, click `Create credentials` and then choose `API KEY`. 
    4. With your new API key, click `Restrict key`. After that rename the API KEY. 
    5.  Don't forget to click `Restrict Key`
    6.  Add your API key to the .env file. 
6. cd into the backend and type `psql` into your terminal. Run `CREATE USER mab_user WITH PASSWORD 'password' CREATEDB;` Then run `\q` to get out of psql
7. Then run the following commands in the backend:
  - `npx dotenv sequelize-cli db:create`
  - `npx dotenv sequelize-cli db:migrate`
  -  `npx dotenv sequelize-cli db:seed:all`
8. in the backend, run `npm start`. Then cd into the frontend and run `npm start`. 
