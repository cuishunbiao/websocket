/*
* Cui shunbiao
* 860026526@qq.com
* 2019/10/17 22:21
*/
const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;
//创建 websocket 服务器 监听在 3000 端口
const wss = new WebSocketServer({port: 3000});
// 服务器被客户端连接
wss.on('connection', function(ws) {
    // 接收客户端信息并把信息返回发送
    ws.on('message', function(message) {
        ws.send(message + ' 客户端消息');
    });
    var senFn = function() {
        ws.send(Math.round(Math.random() * 10));
        setTimeFn();
    };
    var setTimeFn = function() {
        setTimeout(function() {
            senFn();
        }, 40000);
    };
    setTimeFn();
});