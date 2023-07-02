// in TheirMessage we are going the receive the  last meesssage
const TheirMessage = ({lastMesssage, message}) =>  {
    const isFirstMessageByUser = !lastMesssage || lastMesssage.sender.username !== message.sender.username;
    return(
        <div className="-row">
            {/* //if the first messsage by the user then */}
            {isFirstMessageByUser && (
                <div className="message-avatar"
                style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {message?.attachments?.length > 0
                    ? (
                        //logic for to render the image if our message is image
                        <img src={message.attachments[0].file}
                            alt="messsage-attachments"
                            className="message-image"
                            style={{marginLeft:isFirstMessageByUser ? '4px' : '48px'}}
                        />
                            // else we return text
                    ) :(
                        <div className="message" style={{float:'left'  , backgroundColor: '#CABCDC',marginLeft:isFirstMessageByUser ? '4px' : '48px'}}>
                            {message.text}
                     </div>
                    )
                
            }
        </div>
    );
}
export default TheirMessage;