import { createServer } from "http";
import next from "next";
import { Server } from "socket.io";

const app = next({ dev: true });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log(`Socket ${socket.id} connected.`);
    socket.on("hello", (arg) => {
      console.log(arg);
    });
  });

  httpServer.listen(3000, () => {
    console.log(`server ready on port 3000`);
  });
});
