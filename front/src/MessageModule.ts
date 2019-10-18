import { ReduxModule } from "@jswf/redux-module";
import { Adapter } from "@jswf/adapter";

//メッセージの構造
interface Message {
  id: number;
  name: string;
  body: string;
  created_at: Date;
  updated_at: Date;
}
//Storeで使う構造
interface State {
  messages: Message[];
}
//データモジュールの定義
export class MessageModule extends ReduxModule<State> {
  protected static defaultState: State = {
    messages: []
  };
  public write(message: { name: string; body: string }) {
    Adapter.sendJsonAsync("messages", message).then(e => {
      if (e instanceof Array) this.setState({ messages: e as Message[] });
    });
  }
  public load() {
    Adapter.sendJsonAsync("messages").then(e => {
      if (e instanceof Array) this.setState({ messages: e as Message[] });
    });
  }
}
