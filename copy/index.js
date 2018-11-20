const { exec } = require('child_process');
const iconv = require('iconv-lite');

const strMap = {
    temp: 'D:\\my_work\\temp',
    test: 'D:\\program_setup\\Apache24\\htdocs\\test',
    blog: 'D:\\my_work\\jacktown11.github.io',
    mission: 'D: \\program_setup\\Apache24\\htdocs\\projects\\mission',
    ap: 'D:\\program_setup\\Apache24\\htdocs',
};

let pathKey = process.argv[2];
let pathStr = (pathKey in strMap) ? strMap[pathKey] : pathKey;
exec('clip').stdin.end(iconv.encode(pathStr, 'gbk'));
