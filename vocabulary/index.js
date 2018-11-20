/**
 * 该程序随机抽取一个单词表以复习
 * 各单词表用它在我的笔记本中的起始页码代表
 * 
 * 各项的抽取概率的计算依赖于一个数列(比如an=sqrt(n))：
 * 假设共有k个单词表，那么数列｛an｝取前k项,设和为S
 * 那么第i个单词表被抽中的概率是ai/S。
 */
const vocabLists = [37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59];  // 这是我的各个单词表在笔记本中的起始页码


/**
 * 按照数列确定的概率密度函数返回一个随机页码
 */
function getRandomVocabList(){
    let len = vocabLists.length,
        arr = getSqrt(len),
        sum = [arr[0]];
    for(let i = 1; i < len; i++){
        sum.push(sum[i-1] + arr[i])
    }

    let randNum = getRandom(0, sum[len-1]),
        index = 0;
    for(; index < len; index++){
        if(randNum <= sum[index]){
            break;
        }
    }
    return vocabLists[index];
}

function getSqrt(len){
    let res = [];
    for(let i=1; i<=len; i++){
        res.push(Math.sqrt(i));
    }
    return res;
}

/**
 * 生成斐波那契数列1 2 3 5 8 ...
 * @param {number} n 总项数 
 */
function getFibonacci(n) {
    let arr = [1, 2];
    if (n > 2) {
        let len = arr.length;
        while (n-- > 2) {
            arr.push(arr[len - 1] + arr[len - 2]);
            len++;
        }
    } else {
        arr = n === 2 ? [1, 2] : [1];
    }
    return arr;
}

/**
 * 获取(min, max)范围内的一个随机实数
 * @param {numbr} min 范围下界
 * @param {number} max 范围上界
 */
function getRandom(min, max){
    return Math.random() * (max - min) + min;
}

console.log(`今天应该复习单词表的起始页码是：  ${getRandomVocabList()} 和 ${getRandomVocabList()}`);