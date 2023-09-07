import Logo from '../images/game_of_thrones_banner.jpg';
import { getChars, postLike, getLikes } from './api_manager.js';
import commentHandler from './commentHandler.js';

const populateLikes = (likes) => {
  console.log(...likes);
  likes.forEach((char) => {
    document.getElementById(`l-${char.item_id}`).textContent = `Likes ${char.likes}`;
  });
};

const btnLikeHandler = (e) => {
  const newLike = {
    item_id: `${e.target.id.split('-')[1]}`,
  };
  postLike(newLike);
  getLikes(populateLikes);
  e.stopPropagation();
};

const charCounts = (chars) => (chars.length);
const characterList = (chars) => {
  document.getElementById('throne-stars').textContent = `Characters (${charCounts(chars)})`;
  const mainStarList = document.querySelector('main');
  console.log(...chars);
  chars.forEach((char) => {
    const articleChar = document.createElement('article');
    articleChar.className = 'stars';
    articleChar.innerHTML = `<img src="${char.imageUrl}" alt="char" class="img-stars">
    <div class="ct-ph">
      <h2 class="card-title">${char.fullName}</h2>
      <button type='button' class="hearts" id="h-${char.id}">&#9829;</button>
    </div>
    <p class="likes" id="l-${char.id}">likes </p>
    <button type="button" class="btn-comment" id="${char.id}">
      comment
    </button>`;
    mainStarList.appendChild(articleChar);
    document.getElementById(`h-${char.id}`).addEventListener('click', btnLikeHandler);
    document.getElementById(`${char.id}`).addEventListener('click', commentHandler);
  });
};

const app = () => {
  document.getElementById('logo').src = Logo;
  getChars(characterList);
  getLikes(populateLikes);
};

export default app;