import React from "react";
import { useChat } from "../lib/chatContext";
import UserModal from "./../components/UserModal";
import Channels from "./../components/Channels";
import Chat from "./../components/Chat";

const ExtLink = ({ children, ...props }) => (
  <a rel="noreferrer noopener" target="_blank" {...props}>
    {children}
  </a>
);

const IndexPage = () => {
  const { user } = useChat();

  console.log({ user });

  return (
    <>
      <h2>
        <ExtLink href="https://pusher.com">Pusher</ExtLink>/
        <ExtLink href="https://nextjs.org">Next.js</ExtLink> Chat
        <i className="icon icon-message" />
      </h2>
      <hr />

      {!user && <UserModal />}

      <div className="columns col-gapless">
        <div className="column col-3 channels">
          <Channels />
        </div>

        <div className="column col-9 chat">
          <Chat />
        </div>
      </div>

      <style jsx>{`
        h2 {
          text-align: center;
        }
        h2 i {
          font-size: 24px;
          margin-left: 10px;
        }
        hr {
          margin-bottom: 0;
        }
        .channels,
        .chat {
          height: calc(100vh - 40px);
          overflow-x: hidden;
          overflow-y: scroll;
        }
        .channels {
          border-right: 1px solid #3b4351;
        }
      `}</style>
    </>
  );
};

export default IndexPage;
