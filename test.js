import { equal } from 'assert';
import typographicCurrency from './index';

it('should list of currency', () => {
  equal(typographicCurrency('102 AWG EUR INR KZT'), '102 ƒ € ₹ ₸');
  equal(typographicCurrency('In my wallet KHR,KPW,KRW,LAK,LKR,MNT,MTL,MUR'), 'In my wallet ៛,₩,₩,₭,₨,₮,₤,₨');
});

it('should in sentence', () => {
  equal(typographicCurrency('My Tesla costs about 80usd'), 'My Tesla costs about 80$');
  equal(typographicCurrency('BTC is not real'), 'Ƀ is not real');
});

it('not replace in words', () => {
  equal(typographicCurrency('Natural rubber'), 'Natural rubber');
  // equal(typographicCurrency('I know php 7'), 'I know php 7'); TODO: https://github.com/talgautb/typographic-currency/issues/4
});
