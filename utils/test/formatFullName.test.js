const { expect } = require('chai');
const formatFullname = require('../formatFullname.js');

describe('Format Full Name', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(() => formatFullname(undefined)).to.throw(Error, 'Error');
    expect(() => formatFullname(12)).to.throw(Error, 'Error');
    expect(() => formatFullname({})).to.throw(Error, 'Error');
    expect(() => formatFullname([])).to.throw(Error, 'Error');
    expect(() => formatFullname(function(){})).to.throw(Error, 'Error');
  });

  it('should return an error if "fullName" arg length is 0', () => {
    expect(() => formatFullname()).to.throw(Error, 'Error');
  });

  it('should return error if format of "fullName" arg is not "<firstname> <lastname>"', () => {
    expect(() => formatFullname('john')).to.throw(Error, 'Error');
    expect(() => formatFullname(' john Doe')).to.throw(Error, 'Error');
    expect(() => formatFullname('john  Doe')).to.throw(Error, 'Error');
    expect(() => formatFullname('john Doe test')).to.throw(Error, 'Error');
  });

  it('should return good cut "<firstname> <lastname>" if proper args', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('jOHn doE')).to.equal('John Doe');
  });

});
