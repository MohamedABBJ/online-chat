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
    socket.on("joinChat", (roomID) => {
      console.log(`the user joined the chat ${roomID}`);
      socket.join(roomID);
    });
    socket.on("leaveChat", (roomID) => {
      console.log(`the user left the chat ${roomID}`);
      socket.leave(roomID);
    });
    socket.on("newPrivateMessage", (message) => {
      io.to(message.chat_id).emit("newMessage", message);
    });
    socket.on("newMessage", (message) => {
      io.to(message.chat_id).emit("newMessage", message);
    });
    socket.on("newMessageScroller", (user_id) => {
      io.emit("newMessageScroller", user_id);
    });
    socket.on("addUser", () => {
      io.emit("addUser");
    });
    socket.on("userTyping", (user_data) => {
      io.emit("userTyping", user_data);
    });
    socket.on("userStopTyping", (user) => {
      io.emit("userStopTyping", user);
    });
    socket.on("updateFriendList", () => {
      io.emit("updateFriendList");
    });
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  httpServer.listen(3000, () => {
    console.log(`server ready on port 4000`);
  });
});
