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
    socket.on("joinPrivateChat", (roomID) => {
      console.log(`the user joined the private chat ${roomID}`);
      socket.join(roomID);
    });
    socket.on("newPrivateMessage", (message) => {
      io.to(message.chat_id).emit("newMessage", message);
    });
    socket.on("newMessage", (message) => {
      io.emit("newMessage", message);
    });
    socket.on("addUser", () => {
      io.emit("addUser");
    });
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  httpServer.listen(3000, () => {
    console.log(`server ready on port 4000`);
  });
});
