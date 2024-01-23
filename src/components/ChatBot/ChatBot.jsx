import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./ChatBot.css";
import { IoRemoveOutline } from "react-icons/io5";
import { IoIosSend, IoIosArrowUp } from "react-icons/io";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [toggleChat, setToggleChat] = useState(false);
  const [chat, setChat] = useState([]);
  const [toggleFlex, setToggleFlex] = useState(false)
  const chatContainerRef = useRef();

  useEffect(() => {
    // Scroll hacia el final después de que el chat se actualiza
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chat]);

  const enviarMensaje = async () => {
    // Enviar el mensaje al servidor Flask
    const response = await axios.post("http://localhost:5000/api/message", {
      message,
    });

    // Actualizar el estado del chat con la respuesta del chatbot
    setChat([
      ...chat,
      { text: message, user: "user" },
      { text: response.data.reply, user: "bot" },
    ]);

    // Limpiar el mensaje de entrada
    setMessage("");
  };

  const handleClickFalse = () => {
    setToggleChat(false);
    setToggleFlex(false);
  };
  const handleClickTrue = () => {
    setToggleChat(true);
    setToggleFlex(true);
  };

  return (
    <div className="app__ChatBot" ref={chatContainerRef} style={{ transform: toggleFlex ? ("rotate(0deg)") : ("rotate(270deg)"), right: toggleFlex ? ("0") : ("-110px")  }}  >
      <div className="app__ChatBot-title">
        <div></div>
        <p>CHATBOT</p>
        <div>
          {toggleChat ? 
            <IoIosArrowUp onClick={handleClickFalse}  />
           
            :<IoRemoveOutline onClick={handleClickTrue}/>
          }
        </div>
      </div>
      {toggleChat && (
        <>
        <div className="app__ChatBot-chats" ref={chatContainerRef}>
            <div className="app__ChatBot-Init">
              <p>¿Tienes alguna duda?</p>
              <p>Háznoslo llegar por este medio.</p>
            </div>
            <div className="Line-row" />
            {chat.map((item, index) => (
              <div
                key={index}
                className={item.user === "bot" ? "Left" : "Right"}
              >
                {item.text}
              </div>
            ))}
          </div>
          <div className="app__ChatBot-form">
            <input
              className="app__ChatBot-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div>
              <button className="app__ChatBot-btn" onClick={enviarMensaje}>
                <IoIosSend />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;
