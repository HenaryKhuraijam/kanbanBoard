import { charCounts, commentCounter } from '../src/modules/itemCounter.js';

test('Should output the total number items displayed on homepage', () => {
  const stars = ['1', '2', '3'];
  expect(charCounts(stars)).toBe(3);
});

test('To test comment counter', () => {
  const commentsFromApi = ['a', 'b', 'c'];

  const numberOfComment = commentCounter(commentsFromApi);

  document.body.innerHTML = `<h2>Comments(${numberOfComment})</h2>`;

  expect(document.querySelector('h2').textContent).toBe('Comments(3)');
});