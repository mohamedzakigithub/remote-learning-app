const discussionsController = require("../controllers/discussionsController");

module.exports = function (io) {
  const formatMessage = require("./messages");
  const { userJoin, getCurrentUser, userLeave, getUsers } = require("./users");

  const bot = "Discussions bot";

  // Run when client connects
  io.on("connection", (socket) => {
    socket.on("join", (newUser) => {
      const user = userJoin(socket.id, newUser.name, newUser.photo);
      socket.join(user);

      // Welcome current user
      socket.emit("joinMessage", "Welcome to discussions!");

      // sent past messages
      discussionsController
        .findAll()
        .then((history) => socket.emit("history", history));

      // Broadcast when a user connects
      socket.broadcast
        .to(user)
        .emit(
          "message",
          formatMessage(
            bot,
            "https://i.ibb.co/dJMPCh0/bot.jpg",
            `${user.name} has joined the discussions`
          )
        );

      // Send users
      io.to(user).emit("onlineUsers", getUsers());
    });

    // Runs when client leave
    socket.on("leave", () => {
      const user = userLeave(socket.id);

      if (user) {
        io.to(user).emit(
          "message",
          formatMessage(
            bot,
            "https://i.ibb.co/dJMPCh0/bot.jpg",
            `${user.name} has left the discussions`
          )
        );

        // Send users
        io.to(user).emit("onlineUsers", getUsers());
      }
    });

    // Listen for chatMessage
    socket.on("chatMessage", (msg) => {
      const user = getCurrentUser(socket.id);
      discussionsController.create(
        formatMessage(user.name, msg.photo, msg.text)
      );
      io.to(user).emit(
        "message",
        formatMessage(user.name, msg.photo, msg.text)
      );
    });

    // Runs when client disconnects
    socket.on("disconnect", () => {
      const user = userLeave(socket.id);

      if (user) {
        io.to(user).emit(
          "message",
          formatMessage(
            bot,
            "https://i.ibb.co/dJMPCh0/bot.jpg",
            `${user.name} has left the discussions`
          )
        );

        // Send users
        io.to(user).emit("onlineUsers", getUsers());
      }
    });
  });
};
