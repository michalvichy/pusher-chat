import React from "react";

const ChatContext = React.createContext();

const useChat = () => React.useContext(ChatContext);

export { ChatContext, useChat };
