var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
var expect = require('chai').expect;
var Users = require('../models/users');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');

chai.use(chaiHttp);

describe('Users', function() {
  var user = new User({
    firstName: "",
    lastName:"",
    email:"",
    password:""
  });

  beforeEach(function(done) {
    user.save(function(err, newUser) {
      if (err) return console.log(err);
      console.log("made newUser with id " + newUser.id);
      user.id = newUser.id;
      done();
    })
  })

  afterEach(function(done) {
    User.findByIdAndRemove(user.id, function(err) {
      if (err) return console.log(err);
      done();
    })
  })
  it('register a user on / POST' , function(done){
    var request = chai.request(app);
    request.post('/users')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({
        firstName: "fn",
        lastName:"ln",
        email:"fn@email.com",
        password:"password"
      })
      .end(function(err, res){
        if(err) console.log(err)
        res.should.have.status(200);
        res.should.be.html;
        res.text.should.match(/Register/);
        request
          .get('/sessions/new')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.html;
            res.text.should.match(/Login/);
              done();
            });
          });
      });
  it('login a user on / POST' , function(done){
    var request = chai.request(app);
    request.post('/sessions')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({
        email:"fn@email.com",
        password:"password"
      })
      .end(function(err, res){
        if(err) console.log(err)
        res.should.have.status(200);
        res.should.be.html;
        res.text.should.match(/Login/);
        request
          .get('/')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.html;
            res.text.should.match(/Login/);
              done();
            });
          });
      });
})
