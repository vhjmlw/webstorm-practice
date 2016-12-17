"use client";
const net = require("net");
//如果有多个客户端连接了服务器，则会多次执行回调函数connectListen
//每个连接的socket都不一样，每个连接的回调函数的内容都不一样
//如：第二个client又连接了服务器，则变量i是从0开始的
//socket绑定的是一个client和一个server，是一对一的关系
//socket代表的是一个连接，一个客户端和服务端一对一的链接
let sockets = [];
const server = net.createServer((socket) => { //connectListener
    console.log(socket);
    sockets.push(socket);
    // let i = 0;
    socket.on("data", (buffer) => {
        console.log(buffer.toString().trim());
        //以下是client和server一对一的关系，socket绑定的就是一个client和一个server，
        //谁给server发了信息，下面的信息就返回给谁。信息仅仅返回给server发信息的那个client。
        //socket.write("server：说得对" + i);

        //以下代码实现server群发的功能：当server接收到信息后，给目前连接服务器的每个client都回复相同的信息
        //实现服务器群发的功能
        sockets.forEach((socket) => {
            // socket.write("server：说得对" + i);
            //将接收到的信息原样的群发返回
            socket.write(buffer.toString().trim());
        });
        //但是如果从一个client切换到另外一个client，则该回调函数会重新执行，socket切换到另外一个，
        //socket与之前的不一样了，变量i又从0开始了。server返回的信息还是群发。

        // i++;
    });
});
server.listen(8899, () => {
    console.log("server:服务器监听端口【8899】成功");
});

/*Socket {
  connecting: false,
  _hadError: false,
  _handle:
   TCP {
     bytesRead: 0,
     _externalStream: {},
     fd: 14,
     reading: true,
     owner: [Circular],
     onread: [Function: onread],
     onconnection: null,
     writeQueueSize: 0 },
  _parent: null,
  _host: null,
  _readableState:
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: BufferList { head: null, tail: null, length: 0 },
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: null,
     ended: false,
     endEmitted: false,
     reading: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     defaultEncoding: 'utf8',
     ranOut: false,
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events:
   { end: { [Function: g] listener: [Function: onend] },
     finish: [Function: onSocketFinish],
     _socketEnd: [Function: onSocketEnd] },
  _eventsCount: 3,
  _maxListeners: undefined,
  _writableState:
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree: CorkedRequest { next: null, entry: null, finish: [Function] } },
  writable: true,
  allowHalfOpen: false,
  destroyed: false,
  _bytesDispatched: 0,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server:
   Server {
     domain: null,
     _events: { connection: [Function] },
     _eventsCount: 1,
     _maxListeners: undefined,
     _connections: 1,
     _handle:
      TCP {
        bytesRead: 0,
        _externalStream: {},
        fd: 11,
        reading: false,
        owner: [Circular],
        onread: null,
        onconnection: [Function: onconnection],
        writeQueueSize: 0 },
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: false,
     pauseOnConnect: false,
     _connectionKey: '6::::8899' },
  _server:
   Server {
     domain: null,
     _events: { connection: [Function] },
     _eventsCount: 1,
     _maxListeners: undefined,
     _connections: 1,
     _handle:
      TCP {
        bytesRead: 0,
        _externalStream: {},
        fd: 11,
        reading: false,
        owner: [Circular],
        onread: null,
        onconnection: [Function: onconnection],
        writeQueueSize: 0 },
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: false,
     pauseOnConnect: false,
     _connectionKey: '6::::8899' } }*/