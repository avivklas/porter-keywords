var expect = require("chai").expect;
var PorterKeywords = require('../index');

describe('porter-keywords', function() {

    it('Should return all of the expected keywords without stop words', function(done) {

        var keywords = PorterKeywords.extract('this is a tasty burger');

        expect(keywords.length).to.equal(2);

        done();

    });

    it('Should return only the topmost keyword', function(done) {

        var keywords = PorterKeywords.extract('this is a tasty burger', 1);

        expect(keywords.length).to.equal(1);

        done();

    });

});


