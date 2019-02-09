// import { request } from "https";
const request = require('supertest');
const app = require("express")();


describe('GET/getMenu', function () {
    it('respond with json', function (done) {
        request(app)
            .get('/getMenu')
            .expect(200, done);
    });
});