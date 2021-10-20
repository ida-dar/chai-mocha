module.exports = (fullName) => {
  if(typeof fullName !== 'string' || fullName.length === 0) throw new Error('Error');
  const arr = fullName.split(' ');
  if(arr.length > 2) throw new Error('Error');
  const firstName = arr[0];
  const lastName = arr[1];
  if(!firstName || !lastName || firstName === ' ' || lastName === ' ') throw new Error('Error');
  const finalFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const finalLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  return `${finalFirstName} ${finalLastName}`;
};
