/*File name: index.js
Student Name: Nithya Sheena Sham Sundar
Student Id: 301180859
Date : 30/09/2021*/
// Routes to different pages in the website
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home.ejs', { title: 'Home' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about.ejs', { title: 'About' });
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects.ejs', { title: 'Projects' });
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services.ejs', { title: 'Services' });
});
/* GET Contacts page. */
router.get('/contacts', function(req, res, next) {
  res.render('contacts.ejs', { title: 'Contacts' });
});
module.exports = router;
