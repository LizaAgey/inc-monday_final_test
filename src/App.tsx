import React, {useState} from 'react';
import './App.css';
import Button from './components/Button/Button';
import Warning from './components/Warning/Warning';
import Input from './components/Input/Input';
import ListSection from './components/ListSection/ListSection';

export type MessageType = {
    id: number,
    text: string
}

function App() {

    //------------code for MESSAGE SENDER
    const MAX_MESSAGES_COUNT = 5

    const [title, setTitle] = useState('')
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
    };

    const deleteLastMessage = () => {
        let copyMessages: Array<MessageType> = messages.slice(0, messages.length - 1)
        setMessages(copyMessages)
    };

    //------------code for COUNTER
    const MAX_NUMBER = 5
    const MIN_NUMBER = 0
    const [number, setNumber] = useState<number>(0)

    const incNumber = () => {
     let newNumber = number + 1
        newNumber < MAX_NUMBER + 1 ? setNumber(newNumber) : setNumber(MAX_NUMBER)
    };

    const resetNumber = () => {
        setNumber(MIN_NUMBER)
    };

    return (
        <div className={'App'}>
            <div className="MessageSender">
                <Warning
                    messagesNumber={messages.length}
                    maxMessageCount={MAX_MESSAGES_COUNT}
                />
                <div className={'inputSection'}>
                    <Input title={title} setTitle={setTitle}/>
                    <Button name={'Send'} onClickCallback={sendCallback} disabled={messages.length === 5}/>
                    <Button name={'Clear'} onClickCallback={clearMessage}/>
                </div>

                <ListSection
                    messages={messages}
                    deleteLastMessage={deleteLastMessage}
                />

            </div>

            <div className={'Counter'}>
                <div className={`Number ${number === MAX_NUMBER ? "NumberMax" : ""}`}>{number}</div>
                <div className={'ControlSection'}>
                    <Button
                        name={"INC"}
                        onClickCallback={incNumber}
                        disabled={number === MAX_NUMBER}
                    />
                    <Button
                        name={"RESET"}
                        onClickCallback={resetNumber}
                        disabled={number === MIN_NUMBER}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
