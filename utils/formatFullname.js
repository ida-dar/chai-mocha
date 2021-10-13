module.exports = (fullName) => {
  if(typeof fullName !== 'string' || fullName.length === 0) return 'Error';
  const arr = fullName.split(' ');
  if(arr.length > 2) return 'Error';
  const firstName = arr[0];
  const lastName = arr[1];
  if(!firstName || !lastName || firstName === ' ' || lastName === ' ') return 'Error';
  const finalFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const finalLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  return `${finalFirstName} ${finalLastName}`;
};
