import {knex} from "../infra/data/knex" 


import {chai, chaiHttp} from 'chai'



let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('Cars', () => {
    beforeEach((done) => {
        knex.remove({}, (err) => {
           done();
        });
    });
  describe('/GET idex cars', () => {
      it('it should GET all the cars', (done) => {
            chai.request(server)
            .get('/car')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  describe('/POST car', () => {
      it('it should not POST a car without placa field', (done) => {
          let car = {
              id: 5,
              chassi: "BJ1423524634",
              renavam: "322363463",
              modelo: "Fusca",
              marca: "Vw",
              ano: 1965
          }
            chai.request(server)
            .post('/cars/create')
            .send(car)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  res.body.errors.should.have.property('placa');
                  res.body.errors.placa.should.have.property('kind').eql('required');
              done();
            });
      });
      it('it should POST a car ', (done) => {
        let car = {
            id: 5,
            placa: "fji-0541",
            chassi: "BJ1423524634",
            renavam: "322363463",
            modelo: "Fusca",
            marca: "Vw",
            ano: 1965
          }
            chai.request(server)
            .post('/cars/create')
            .send(car)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql(200);
                
              done();
            });
      });
  });
  describe('/GET/:id car', () => {
      it('it should GET a car by the given id', (done) => {
          let id = 5
          
          knex.save((err, id) => {
              chai.request(server)
            .get('/cars/read/' + id)
            .send(id)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('placa');
                  res.body.should.have.property('chassi');
                  res.body.should.have.property('renavan');
                  res.body.should.have.property('modelo');
                  res.body.should.have.property('marca');
                  res.body.should.have.property('ano');
                  
              done();
            });
          });

      });
  });
  describe('/PATCH/:id car', () => {
      it('it should UPDATE a car given the id', (done) => {
          let id = 5
                chai.request(server)
                .put('/cars/update/' + id)
                .send({placa: "fhn-0512", modelo: "Betle", ano: 1975})
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      
                      res.body.book.should.have.property('ano').eql(1975);
                  done();
                });
          });
      });
  });

  describe('/DELETE/:id car', () => {
      it('it should DELETE a book given the id', (done) => {
          let id = 2
          knex.save(( id => {
                chai.request(server)
                .delete('/cars/delete/' + id)
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');

                      res.body.result.should.have.property('ok').eql(1);
                      res.body.result.should.have.property('n').eql(1);
                  done();
                });
          })
      );
  })})
