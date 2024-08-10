const cron = require('node-cron');
const task = () => {
    console.log('https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=1');
}
cron.schedule('* * * * 5', task);