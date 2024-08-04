const cron = require('node-cron');
const task = () => {
    
}
cron.schedule('* * * * 5', () => {
    console.log('매일 자정에 작업 실행!');
    // 여기서 실제 작업을 수행합니다.
});