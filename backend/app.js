const Koa = require('koa');
const http = require('http')
const socketIO = require('socket.io');

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

const server = http.createServer(app.callback());


// Socket IO stuff
const io = socketIO(server);


io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('CREATE_GAME', playerName => {
    console.log('Create game on server with player name:', playerName);
  })

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


server.listen(3005);
