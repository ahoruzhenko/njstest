/**
 * Created by artem on 14.11.16.
 */
var expect = require('chai').expect;

describe('First test file', function () {

  it('sh1', function () {
      expect('asd').to.eql("asd");
  });
  it('sh2', function () {
      expect(1).to.eql(1);
  });
  it('sh3', function () {
      expect(12).to.eql(12);
  });

});