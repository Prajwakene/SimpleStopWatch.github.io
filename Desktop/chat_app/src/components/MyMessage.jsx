const MyMessage = ({message}) =>  {
    // we are checking tha t our message is the text message or the or image
    if(message?.attachments?.length > 0){
        return(
            //logic for to render the image if our message is image
            <img src={message.attachments[0].file}
                alt="messsage-attachments"
                className="message-image"
                style={{float:'right'}}/>
        )
    }
    // if our message is not image then we the render the text
    return(
        <div className="message" style={{float:'right' , marginRight:'18px' , color: 'white' , backgroundColor: '#3B2A50'}}>
            {message.text}
        </div>
    );
}


export default MyMessage;