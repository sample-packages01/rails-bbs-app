import React, { useEffect } from "react";
import { useModule } from "@jswf/redux-module";
import { MessageModule } from "./MessageModule";

export function MessageList() {
  const messageModule = useModule(MessageModule);
  //初回のみメッセージを読み込む
  useEffect(() => {
    messageModule.load();
  }, []);
  //メッセージをStoreから取得
  const messages = messageModule.getState("messages")!;
  return (
    <div>
      {messages.map(msg => (
        <div key={msg.id}>
          <hr />
          <div>
            {msg.id}:[{msg.name}]{msg.created_at}
          </div>
          <div>{msg.body}</div>
        </div>
      ))}
    </div>
  );
}
