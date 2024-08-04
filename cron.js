const cron = require('node-cron');
cron.schedule('* * * * *', () => {
    console.log('매일 자정에 작업 실행!');
    // 여기서 실제 작업을 수행합니다.
});