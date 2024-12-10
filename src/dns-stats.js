const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  for (let i = 0; i < domains.length; i++) {
    arr.push(domains[i].split(".").reverse());
  }

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let s = 0; s < arr[i].length; s++) {
      newArr.push(arr[i].slice(0, s + 1));
    }
  }

  const stillArr = [];
  for (let i = 0; i < newArr.length; i++) {
    stillArr.push(`.${newArr[i].join(".")}`);
  }

  const setArr = [...new Set(stillArr)];

  const obj = {};

  for (let i = 0; i < setArr.length; i++) {
    let num = 1;
    for (let s = 0; s < stillArr.length; s++) {
      if (setArr[i] === stillArr[s]) {
        obj[setArr[i]] = num;
        num++;
      }
    }
    num = 1;
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
