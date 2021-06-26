const request = require("supertest");
const app = require("../app");

describe("get articles SUCCESS GET/articles", function () {
    it("responds with status 200", function (done) {
        request(app)
        .get("/articles")
        .then((response) => {
          let { body, status } = response;
          expect(status).toEqual(200);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
});

describe("post articles SUCCESS GET/articles", function () {
  it("responds with status 200", function (done) {
      let data = {
          author : 'emilia',
          title : 'corona virus',
          body : 'Seputar Kasus Virus Corona yang terjadi di Indonesia dan negara lain.'
      }
      request(app)
      .post("/articles")
      .send(data)
      .set("Accept", "application/json")
      .then((response) => {
        let { body, status } = response;
        expect(status).toEqual(201);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});