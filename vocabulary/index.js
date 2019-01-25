/**
 * 该程序随机抽取一个单词表以复习
 * 各单词表用它在我的笔记本中的起始页码代表
 */

const vocabLists = [
  37,
  39,
  41,
  43,
  45,
  47,
  49,
  51,
  53,
  55,
  57,
  59,
  61,
  63,
  65,
  67,
  69,
  71,
  73,
  75,
  77
]; // 这是我的各个单词表在笔记本中的起始页码

/**
 * 按照数列确定的概率密度函数返回一个随机页码
 */
function getRandomVocabList() {
  let len = vocabLists.length;
  return vocabLists[getIndex(len)];
}

/**
 * 返回一个索引值
 * 各个位置上的索引被获取的概率正比于：[1, 1, ..., 1, 2, 3]
 * @param {number} len 数组长度
 */
function getIndex(len) {
  // 填充数组为[1, 1, ..., 1, 2, 3]
  let arr = new Array(len);
  for (let i = len - 1; i >= 0; i--) {
    arr[i] = 4 - (len - i) > 0 ? 4 - (len - i) : 1;
  }

  // 数组求和
  let sum = arr.reduce((prev, cur) => prev + cur);

  // 计算出概率累加数组，arr[i]代表抽到0到i索引的概率
  for (let i = 1; i < len; i++) {
    arr[i] = arr[i - 1] + arr[i];
  }
  arr = arr.map((item) => item / sum);

  // 产生一个随机数，定位所在区间，从而产生一个随机索引
  let r = Math.random();
  let index = 0;
  while (r >= arr[index]) {
    index++;
  }
  return index;
}

console.log(`今天应该复习单词表的起始页码是：  ${getRandomVocabList()}`);
