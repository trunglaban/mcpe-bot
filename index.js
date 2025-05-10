const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'thinh555555.aternos.me',
  port: 51771,
  username: 'trungdayne'
});

bot.on('login', () => {
  console.log('Bot đã vào server thành công!');
});

bot.on('end', () => {
  console.log('Bot bị ngắt kết nối, đang khởi động lại...');
  setTimeout(() => {
    process.exit(); // để dùng process manager tự restart
  }, 3000);
});
