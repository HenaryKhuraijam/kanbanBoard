const reqBaseURL = 'https://thronesapi.com/api/v2/Characters/';
const BaseURL = new Request(reqBaseURL);

const getChars = async (callback) => {
  const response = await fetch(BaseURL).then((response) => response.json());
  callback(response);
};

export default getChars;