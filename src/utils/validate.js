// 密碼驗證規則: 8個字元以上，至少1個英文字母和1個數字
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// 帳號驗證規則: 只限英文和數字
const usernameRegex = /^[A-Za-z0-9]+$/;

export function validateLoginData(username = '', password = '') {
  const validateMessage = {
    username: '',
    password: '',
  };

  if (username === '') {
    validateMessage.username = '帳號不可以為空白，請輸入帳號';
  } else {
    usernameRegex.test(username) || (validateMessage.username = '帳號只能是英文和數字');
  }

  if (password === '') {
    validateMessage.password = '密碼不可以為空白，請輸入密碼';
  } else {
    passwordRegex.test(password) || (validateMessage.password = '密碼至少要有 8 個字以上，包含 1 個英文字母和 1 個數字');
  }

  const result = (validateMessage.username === '' && validateMessage.password === '');

  return {
    result,
    validateMessage
  };
}