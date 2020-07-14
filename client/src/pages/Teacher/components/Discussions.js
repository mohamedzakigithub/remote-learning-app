import React, { useState, useEffect, useRef, useContext } from "react";
import io from "socket.io-client";
import M from "materialize-css";
import Message from "./Message";
import DiscussionUser from "./DiscussionUser";
import { UserContext } from "../../../utils/UserContext";

let socket = undefined;

export default function Discussions() {
  const style = {
    container: {
      height: "80vh",
      backgroundColor: "#c0bebf",
      border: "1px solid black",
    },
    users: {
      height: "100%",
      backgroundColor: "white",
      borderRight: "1px solid black",
      padding: 0,
    },
    usersHeader: {
      backgroundColor: "white",
      borderBottom: "1px solid black",
      padding: 5,
    },
    chat: {
      height: "100%",
      padding: 0,
    },
    messages: {
      height: "94%",
      borderBottom: "1px solid black",
      overflow: "auto",
    },
    form: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      height: "6%",
      border: "1px solid black",
      margin: 0,
      display: "flex",
      flexFlow: "row",
      backgroundColor: "white",
      alignItems: "center",
    },
    button: {
      height: "100%",
      margin: 0,
      fontSize: 12,
    },
    "text-input": {
      height: "100%",
      margin: 0,
      paddingLeft: 5,
    },
  };

  const messageRef = useRef();
  const messagesRef = useRef();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [userState] = useContext(UserContext);

  useEffect(() => {
    M.AutoInit();
    socket = io();
    socket.emit("join", { name: userState.name, photo: userState.photo });
    socket.on("joinMessage", (message) => {
      console.log(message);
    });

    socket.on("history", (history) => {
      setMessages(history);
      scrollToBottom();
    });

    socket.on("onlineUsers", (users) => {
      setOnlineUsers(users);
    });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
      scrollToBottom();
    });

    return () => socket.close();
  }, []);

  function handleFormSubmit(e) {
    e.preventDefault();
    const msg = {
      name: userState.name,
      photo: userState.photo,
      text: messageRef.current.value,
    };
    socket.emit("chatMessage", msg);
    messageRef.current.value = "";
    messageRef.current.focus();
  }

  function scrollToBottom() {
    if (messagesRef.current) {
      messagesRef.current.scroll({
        top: messagesRef.current.scrollHeight,
      });
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <h3 className="center">Discussions</h3>
          <div className="chat-container row" style={style.container}>
            <div
              className="col m2 users hide-on-small-only"
              style={style.users}
            >
              <div style={style.usersHeader}>
                <p>Online users</p>
              </div>
              {onlineUsers &&
                onlineUsers.map((user) => (
                  <DiscussionUser user={user} key={user.id} />
                ))}
            </div>
            <div className="col s12 m10 chat" style={style.chat}>
              <div
                className="chat-messages"
                style={style.messages}
                ref={messagesRef}
              >
                {messages &&
                  messages.map((message, index) => (
                    <Message
                      message={message}
                      currUser={userState.name}
                      key={index}
                    />
                  ))}
              </div>
              <div style={style.input}>
                <form style={style.form} onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    id="message"
                    name="message"
                    style={style["text-input"]}
                    ref={messageRef}
                  />
                  <button
                    className="btn waves-effect waves-light"
                    id="submit"
                    type="submit"
                    name="action"
                    style={style.button}
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
