import { InvolvementURL } from './api_manager.js';
// implement the submit comment functionality
const submitHandler = async (e) => {
  const { id } = e.target;

  const userName = document.querySelector('#name');
  const commentTxt = document.querySelector('#comment');

  if (userName.value && commentTxt.value) {
    const result = await fetch(`${InvolvementURL}comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${id}`,
        username: `${userName.value}`,
        comment: `${commentTxt.value}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const scoreResult = await result.text();
    console.log(scoreResult);
    // To update comment section

    const commentRequest = new Request(`${InvolvementURL}comments?item_id=${id}`);
    const commentResponse = await fetch(commentRequest);
    const showComment = await commentResponse.json();

    const len = showComment.length - 1;
    const commentSection = document.querySelector('.comment-section');
    const oldCommentCount = commentSection.firstChild;
    const newCommentCount = document.createElement('h2');
    newCommentCount.classList.add('comment-heading');
    newCommentCount.innerHTML = `Comments(${showComment.length})`;
    commentSection.replaceChild(newCommentCount, oldCommentCount);

    const addNewComment = document.createElement('li');
    addNewComment.classList.add('create-comment');
    addNewComment.innerHTML = `<span>${showComment[len].creation_date}</span> <span>${showComment[len].username}:</span> <span>${showComment[len].comment}</span>`;

    commentSection.appendChild(addNewComment);

    userName.value = '';
    commentTxt.value = '';
  }
};

export default submitHandler;