'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs'); // used to compare password and the hashedPassword

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: { // don't really need to use loginUser scope..old thing, can just use currentUser scope to login the user
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Review, { foreignKey: 'userId' });

  };

  // If you see model/class.prototype.method, you will need to great an instance of that class before using the method. This is considered an instance method.
  // instance method: will return an obj with only User instance info that is safe to save to a JWT
  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

// instance method accept a password string and return true if there is a match w/ the User instance's
// hashedPassword, otherwise return false.
// creates our validatePassword method that we use when logging a user in
User.prototype.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.hashedPassword.toString());
 };

 // static method: use currentUser scope to return a User with that id
 User.getCurrentUserById = async function (id) {
  return await User.scope('currentUser').findByPk(id);
 };

 // static method: accepts obj with credential and password key. method will search for
 // one User with specified credentials (can login with either username or email, since both
 // saved in the db)
 // if user found, validate password by passing it into the instance's .validatePassword method
 // if password valid, return user by using the currentUser scope.
 // If you see model/class.method , you can call the method on the model itself. This is a static method
 User.login = async function ({ credential, password }) {
  const { Op } = require('sequelize');
  const user = await User.scope('loginUser').findOne({
    where: {
      [Op.or]: {
        username: credential,
        email: credential,
      },
    },
  });
  if (user && user.validatePassword(password)) {
    return await User.scope('currentUser').findByPk(user.id);
  }
};

// static method
User.signup = async function ({ username, email, password }) {
  const hashedPassword = bcrypt.hashSync(password);
  const user = await User.create({
    username,
    email,
    hashedPassword,
  });
  return await User.scope('currentUser').findByPk(user.id);
};

  return User;
};

// default scope will exclude the 'hashedPassword', 'email', 'createdAt', 'updatedAt'
// when a query is ran for searching for Users

// User.scope('currentUser').findByPk(id) will find a User by the specified
//id and return only the User fields that the currentUser model scope allows

// These scopes help protect sensitive user information that should not be exposed to other users

// on the models, you could change validations but if you do that
// you need to update db tables = create new migrations to apply though changes to db

// adding a default scope to the model file doesn't change migrations = don't need to update db table

/*

A rule of thumb when you're creating class methods -
If you see model/class.prototype.method, you will need to get an instance of that class before using the method. This is considered an instance method.
If you see model/class.method , you can call the method on the model itself. This is a static method


 */

// npx sequelize-cli model:generate --name Business --attributes ownerId:integer,title:string,description:text,address:string,city:string,state:string,zipCode:string,lat:decimal,lng:decimal
