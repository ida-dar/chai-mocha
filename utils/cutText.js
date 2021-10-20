module.exports = (content, maxLength) => {
  if(typeof content !== 'string' || typeof maxLength !== 'number')  throw new Error('Error');
  if(content.length < 1)  throw new Error('Error');
  if(maxLength <= 0)  throw new Error('Error');
  if(content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
