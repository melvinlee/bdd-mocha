let chai = require('chai');
let should = chai.should();
let chaiHttp = require('chai-Http');

let url = 'http://nancyapi.azurewebsites.net/';

chai.use(chaiHttp);

describe('When calling http GET /api/tunnel', () =>{

    it('shoud return GET all tunnel', (done) =>{
        chai.request(url)
        .get('api/tunnel')
        .set('accept','application/json')
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.json;
            done();
        });        
    });
});

describe('When calling htt GET /api/tunnel by id', () =>{

    it('should return GET 1 tunnel', (done) => {
        chai.request(url)
        .get('api/tunnel/1')
        .set('accept','application/json')
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.have.property('id');
            done();
        });
    });
});

