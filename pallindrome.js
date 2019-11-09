exports.reverse = str => {
  const isNum = !isNaN(str);
  const res = str
    .toString()
    .split('')
    .reverse()
    .join('');

  if (isNum) {
    return parseInt(res, 10);
  } else {
    return res;
  }
};

//added a comment
