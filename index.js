import db from 'typographic-currency-db';

const pattern = key => new RegExp(`([^a-z]|\\b)(${key})\\b`, 'gi');

export default function typographicCurrency(input) {
  if (!input) return;
  return Object.keys(db).reduce((state, key) => {
    return state.replace(pattern(key), `$1${db[key]}`);
  }, input);
};
