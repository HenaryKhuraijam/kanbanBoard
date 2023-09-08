import { charCounts } from '../src/modules/itemCounter.js';

test('Should output the total number items displayed on homepage', () => {
  const stars = ['1', '2', '3'];
  expect(charCounts(stars)).toBe(3);
});
