const randomNum1 = Math.floor(Math.random() * (100 - 1) + 1);
const randomNum2 = Math.floor(Math.random() * (100 - 1) + 1);

const requestData = {
  userName: `Hassan-Zaheer${randomNum1}${randomNum2}`,
  password: 'testing@Playwright05',
};

export default requestData;