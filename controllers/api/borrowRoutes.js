const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Gear, Borrow, Category } = require('../../models');

//check out gear to currently logged in user

//id will autofill when Borrow obj created
//date out is today's date
//date in will be 2 weeks from today, can use helper obj??
//gear id will come from submit event on button click


module.exports = router;