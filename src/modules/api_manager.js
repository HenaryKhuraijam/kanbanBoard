const reqBaseURL = 'https://thronesapi.com/api/v2/Characters/';
const BaseURL = new Request(reqBaseURL);

const InvolvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const getCode = async () => {
  await fetch(InvolvementURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.text())
    .then((response) => console.log(response));
};

const getChars = async (callback) => {
  const response = await fetch(BaseURL).then((response) => response.json());
  callback(response);
};

export { getChars, getCode };