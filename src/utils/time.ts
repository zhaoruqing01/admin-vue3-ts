export const getTime = () => {
  let message = '';
  let timeNow = new Date().getHours();
  console.log(timeNow);
  if (timeNow <= 9) {
    message = '早上';
  } else if (timeNow <= 12) {
    message = '上午';
  } else if (timeNow <= 18) {
    message = '下午';
  } else {
    message = '晚上好';
  }
  return message;
};
