var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
var expect = require('chai').expect;
var Shoe = require('../models/shoe');

chai.use(chaiHttp);

describe('Shoes', function() {
  var shoe = new Shoe({
    name : "testShoe",
    colorway : "color",
    material : "material",
    price : 10000,
    year: 1021
  });

  beforeEach(function() {
    shoe.save(function(err, newShoe) {
      if (err) return console.log(err);
      console.log("made newShoe with id " + newShoe.id);
      shoe.id = newShoe.id;
    })
  })

  afterEach(function() {
    Shoe.findByIdAndRemove(shoe.id, function(err) {
      if (err) return console.log(err);
    })
  })

  it('should list ALL shoes on / GET', function(done) {
    var request = chai.request(app);
    request
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.html;
        res.text.should.match(/All shoes/);
        res.text.should.match(/testShoe/);
        done();
      });
  });

  it('should list a SINGLE shoe on /<id> GET', function(done) {
    chai.request(app)
      .get('/' + shoe.id)
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.html;
        res.text.should.match(/Post 1/);
        done();
      });
  });

  it('should add a SINGLE shoe on / POST' , function(done){
    var request = chai.request(app);
    request.post('/')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({ //why?
        _id: 123,
        name : "shoes",
        colorway : "colours",
        material : "materials",
        price : 000001,
        year: 2017
      })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.html;
        res.text.should.match(/All shoes/);
        request
          .get('/123')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.html;
            res.text.should.match(/shoes/);
            res.text.should.match(/colours/);

            Shoe.findByIdAndRemove(123, function(err) {
              if (err) return console.log(err);
              done();
            });
          });
      });
  });

  // describe a test for PUT
  it('should update a SINGLE shoe on /<id> PUT' , function(done){
    var request = chai.request(app);
    request.put('/' + shoe.id)
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({'colorway': 'blue'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.html;
        res.text.should.match(/All shoes/);
        request
          .get('/' + shoe.id)
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
          .get('/' + shoe.id)
          .end(function(err, res){
            res.should.have.status(404);
            done();
          });
      });
    });
  });
