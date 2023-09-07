const reqBaseURL = 'https://thronesapi.com/api/v2/Characters/';
const BaseURL = new Request(reqBaseURL);

const InvolvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appBaseURL = `${InvolvementURL}sudTp16E4oF4U9vkKc5I/`;
const likeURL = new Request(`${appBaseURL}likes/`);

const getCode = async () => {
  await fetch(InvolvementURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.text())
    .then((response) => console.log(response));
};

const postLike = async (obj) => {
  fetch(likeURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.text())
    .then((likeData) => likeData);
};

const getLikes = async (callBack) => {
  const response = await fetch(likeURL);
  const likes = await response.json();
  callBack(likes);
};

const getChars = async (callback) => {
  const response = await fetch(BaseURL).then((response) => response.json());
  callback(response);
};

export {
  getChars, getCode, postLike, getLikes, InvolvementURL, reqBaseURL,
};