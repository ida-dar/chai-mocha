const { expect } = require('chai');
const formatFullname = require('../formatFullname.js');

describe('Format Full Name', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function(){})).to.equal('Error');
  });

  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname()).to.equal('Error');
  });

  it('should return error if format of "fullName" arg is not "<firstname> <lastname>"', () => {
    expect(formatFullname('john')).to.equal('Error');
    expect(formatFullname(' john Doe')).to.equal('Error');
    expect(formatFullname('john  Doe')).to.equal('Error');
    expect(formatFullname('john Doe test')).to.equal('Error');
  });

  it('should return good cut "<firstname> <lastname>" if proper args', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('jOHn doE')).to.equal('John Doe');
  });

});
