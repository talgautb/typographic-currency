// use correct symbol of currency 
module.exports = function(input) {
  return input.replace(/KZT/gim, '₸');
};