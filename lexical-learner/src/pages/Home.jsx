import React from "react";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import "./home.css";
import Chat from "../components/chat/Chat";
import webchatimg from "./../images/webchatdemo.jpg";
import chattranimg from "./../images/chat1.png";

const Home = () => {
  return (
    <div className="Home">
      <section className="intro">
        <div className="intro-logo">
          <AiIcons.AiOutlineWechat
            style={{ fontSize: "7rem", color: "black" }}
          />
          <BsIcons.BsTranslate style={{ fontSize: "7rem", color: "black" }} />
        </div>

        <div className="intro-aside">
          <div>
            <span className="intro-title">SimChat</span>
            , A Simpler Tecent's WeChat Clone in Web.
            <br />
            <span style={{ fontSize: "20px" }}>
              Written in ReactJS, NodeJS, and Express. <br />
              Used Socket.io, and Google Tranlsate.
            </span>
            <div className="intro-links">
              <a
                href="https://github.com/tuo17505/WeChat-Clone"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a href="#quickdemo">Demo</a>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <h4 style={{fontSize: "20px"}}>Features</h4>
        <ul>
          <li>
            <span>Join and Create Rooms</span>
            <span>Chat with Anyone</span>
            <span>Powered by Socket.io</span>
            <img
              src={webchatimg}
              alt="web chat"
              style={{maxWidth: "380px", borderRadius: "2.5px"}}
            />
          </li>
          <li>
            <span>Text Translation</span>
            <span>Translates messages to hundred of languages</span>
            <span>Powered by Google Translate</span>
            <img
              src={chattranimg}
              alt="web chat"
              style={{maxWidth: "380px", borderRadius: "2.5px"}}
            />
          </li>
        </ul>
      </section>

      <section className="quickdemo" id="quickdemo">
        <h2 style={{ textAlign: "center" }}>SimChat</h2>
        <Chat />
      </section>

      <footer>
        SimChat
      </footer>
    </div>
  );
};

export default Home;
