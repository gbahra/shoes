var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
var expect = require('chai').expect;
var Shoe = require('../models/shoes');
var mongoose = require('mongoose');

chai.use(chaiHttp);

xdescribe('Shoes', function() {
  var shoe = new Shoe({
    name : "testShoe",
    colorway : "color",
    materials : "material",
    price : 10000,
    year: 1021
  });

  beforeEach(function(done) {
    shoe.save(function(err, newShoe) {
      if (err) return console.log(err);
      console.log("made newShoe with id " + newShoe.id);
      shoe.id = newShoe.id;
      done();
    })
  })

  afterEach(function(done) {
    Shoe.findByIdAndRemove(shoe.id, function(err) {
      if (err) return console.log(err);
      done();
    })
  })

  it('should list a SINGLE shoe on /<id> GET', function(done) {
    chai.request(app)
      .get('/' + shoe.id)
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.html;
        res.text.should.match(/All shoes/);
        res.text.should.match(/testShoe/);
        done();
      });
  });

  it('should list ALL shoes on / GET', function(done) {
    var request = chai.request(app);
    request
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.html;
        res.text.should.match(/All shoes/);
        res.text.should.match(/Air Jordan 1 Bred/);
        done();
      });
  });

  it('should add a SINGLE shoe on / POST' , function(done){
    var request = chai.request(app);
    request.post('/')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({
        name : "shoes",
        colorway : "colours",
        materials : "materials",
        price : 000001,
        year: 2017
      })
      .end(function(err, res){
        if(err) console.log(err)
        res.should.have.status(200);
        res.should.be.html;
        res.text.should.match(/All shoes/);
        request
          .get('/')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.html;
            res.text.should.match(/shoes/);
            res.text.should.match(/colours/);
              done();
            });
          });
      });


  // describe a test for PUT
  it('should update a SINGLE shoe on /<id> PUT' , function(done){
    var request = chai.request(app);
    request.put('/'+ shoe._id)
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({'colorway': 'blue'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.html;
        res.text.should.match(/All shoes/);
        request
          .get('/')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.html;
            res.text.should.match(/blue/);
            done();
          });
      });
  });


  it('should delete a SINGLE shoe on /<id> DELETE' , function(done) {
    var request = chai.request(app);
    request.delete('/' + shoe.id)
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.html;
        res.text.should.match(/All shoes/);
        request
          .get('/'+ shoe.id)
          .end(function(err, res){
            res.should.have.status(404);
            done();
          });
      });
    });
  });
