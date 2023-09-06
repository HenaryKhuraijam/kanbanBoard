const reqBaseURL = 'https://thronesapi.com/api/v2/Characters/';
const BaseURL = new Request(reqBaseURL);

const getChars = async () => {
  const response = await fetch(BaseURL);
  const charList = await response.json();
  return charList;
};

export default getChars;