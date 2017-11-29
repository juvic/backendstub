var express = require("express") //express
    //, routes = require("./routes")　//routesのindex.js
    , http = require("http")
    , path = require("path")
    , WebSocketServer = require("ws").Server;

var app = express();
var httpServer = http.createServer(app);
var wss = new WebSocketServer({ server: httpServer });

app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, "public")));


wss.on("connection", function (ws) {
    console.log("established websocket connection");
    ws.on("message", function (data, flag) {
        ws.send(data);
    });
});

httpServer.listen(app.get("port"), function () {
    console.log("Express server listening on port" + app.get("port"));
});
