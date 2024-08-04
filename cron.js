const cron = require('node-cron');
const task = () => {
    console.log('cron');
}
cron.schedule('* * * * 5', task);