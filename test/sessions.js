var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
var expect = require('chai').expect;
var User = require('../models/user');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
//timeout error to fix
chai.use(chaiHttp);

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
