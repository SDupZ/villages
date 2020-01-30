const Koa = require('koa');
const http = require('http')
const socketIO = require('socket.io');
const { getRandomRoomCode } = require('./utils.js');

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

const server = http.createServer(app.callback());


// Socket IO stuff
const io = socketIO(server);


io.on('connection', function(socket){
  const roomCode = getRandomRoomCode();
  console.log(`A user connected. Room code: ${roomCode}`);


  socket.on('CREATE_GAME', playerName => {
    console.log('Create game on server with player name:', playerName);
  })


  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


server.listen(3005);
