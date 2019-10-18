import { useRef } from "react";
import React from "react";
import { useModule } from "@jswf/redux-module";
import { MessageModule } from "./MessageModule";

export function MessageForm() {
  const messageModule = useModule(MessageModule, undefined, true);
  const message = useRef({ name: "", body: "" }).current;
  return (
    <div>
      <div>
        <button
          onClick={() => {
            messageModule.write(message);
          }}
        >
          送信
        </button>
      </div>
      <div>
        <label>
          名前
          <br />
          <input onChange={e => (message.name = e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          メッセージ
          <br />
          <input onChange={e => (message.body = e.target.value)} />
        </label>
      </div>
    </div>
  );
}
