import { equal } from 'assert';
import typographicCurrency from './index';

it('should typographicCurrency', () => {
  equal(typographicCurrency('102 AWG EUR INR KZT'), '102 ƒ € ₹ ₸');
  equal(typographicCurrency('My Tesla costs about 80usd'), 'My Tesla costs about 80$');
  equal(typographicCurrency('Natural rubber'), 'Natural rubber');
});
