
//here we dont need to import the react beacause we are runnning on the version 18 which is above abovve 17
//creaing the functional components
//importing components which are will be the the under message ChatFeed
import MessageForm from './MessageForm'; 
 import MyMessage from './MyMessage';
 import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages } = props;

    //finding our current chat if chat active inth t activechat
    const chat = chats && chats[activeChat]; 

    //creating a component that will genearte the message
    const renderMessages = () => {
    //fetching all th emessages under the components
        const keys = Object.keys(messages);
        //keys are basically just ids of the specific message
        return keys.map((key, index) => {
            const message = messages[key];

            //now we need to kno th etwo thimgs about mesages
            //if this is the last messege was sent if index =0 then rerun null else keys thats means if they are message find the last message
            const LastMesssageKey = index === 0 ? null : keys[index-1];
            const isMyMessage = userName === message.sender.username;
            
            return(
                <div key={`msg_${index}`} style={{ width:'100%' }}>
                    <div className="message-block">
                        {
                            //passing props
                            isMyMessage
                            ? <MyMessage message={message}/>
                            :<TheirMessage message={message} LastMesssage={messages[LastMesssageKey]}/>
                        }
                    </div>
                    <div className='read-receipts' style={{marginRight:isMyMessage ? '18px' : '0px', marginLeft:isMyMessage ? '0px' : '68px'}}>
                        read-receipts
                    </div>
                </div>
            )
      });

    }
   //
   //structuring our chat feed
//    if there is no chat we can return string Loading 
    if(!chat) return 'Loading...'
    return (
        <div className='chat-feed'>
            <div className='chat-title-cotainer'>
                {/* this ? mark willl make sure th at we have a chat before we have the chat title */}
                <div className='chat-title'>{chat.title}</div>
                <div className='chat-subtitle'>
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>
            </div>
            {/* dynamic logic */}
            {renderMessages()}
            <div style={{height:'100px'}}/>
            {/* //creating form for user to senfd message  */}
            <div className='message-form-container'>
                <MessageForm {...props} chatID={activeChat} />

            </div>
        </div>
    );
}

export default ChatFeed;