import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/ChatFeed';

import './App.css';

//app component
const App = () =>{
    return (
        <ChatEngine
            //passing props
            height="100vh"
            //chatengine.io
            projectID="faf53fd7-5f94-4957-9ce9-d09483807862"
            userName="Alan"
            //password
            userSecret="123123"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    );
}

export default App;