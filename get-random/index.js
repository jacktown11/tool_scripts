let para = process.argv.slice(2),
    max = Math.max(para[0], para[1]),
    min = Math.min(para[0], para[1]);
    
function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(`
==================================
帮您生成了一个[${min},${max}]区间中的随机整数：${getRandom(min,max)}
==================================
`);
