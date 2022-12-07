import React, {useState} from 'react';
import './App.css';
import Button from './components/Button/Button';
import Warning from './components/Warning/Warning';
import MessageList from './components/MessageList/MessageList';
import Input from './components/Input/Input';

export type MessageType = {
    id: number,
    text: string
}

function App() {
    const [title, setTitle] = useState('')
    // const [isError, setIsError] = useState<boolean>(false)
    const [messages, setMessages] = useState<MessageType[]>([])

    const addMessage = (title: string) => {
        let trimmedTitle = title.trim()

        let newMessage: MessageType = {
            id: messages.length + 1,
            text: title
        }
        trimmedTitle && setMessages([...messages, newMessage])
    };
    const sendCallback = () => {
        addMessage(title)
        setTitle('')
    };

    const clearMessage = () => {
        setTitle('')
        // setIsError(false)
    };


    const deleteLastMessage = () => {
        let copyMessages: Array<MessageType> = messages.slice(0, messages.length - 1)
        setMessages(copyMessages)
        // setTitle("")
    };


    return (
        <div className="App">
            <Warning
                messagesNumber={messages.length}
                // isError={isError}
                // setIsError={setIsError}
            />
            <div className={"inputSection"}>
                <Input title={title} setTitle={setTitle}/>
                <Button name={'Send'} onClickCallback={sendCallback} disabled={messages.length === 5}/>
                <Button name={'Clear'} onClickCallback={clearMessage}/>
            </div>

            {/*could be combined into ListSection:*/}
            <Button name={'Delete the last message'} onClickCallback={deleteLastMessage}/>
            <MessageList messages={messages}/>

        </div>
    );
}

export default App;
