import React, {useState} from 'react';
import {MessageType} from '../../App';
import Warning from './Warning/Warning';
import Input from '../Input/Input';
import Button from '../Button/Button';
import ListSection from './ListSection/ListSection';
import styles from "./MessageSender.module.css"

const MessageSender: React.FC<any> = () => {

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

    return (
        <div className={styles.MessageSender}>
            <h3>Message Sender</h3>
            <Warning
                messagesNumber={messages.length}
                maxMessageCount={MAX_MESSAGES_COUNT}
            />
            <div className={styles.inputSection}>
                <Input title={title} setTitle={setTitle}/>
                <Button name={'Send'} onClickCallback={sendCallback} disabled={messages.length === 5}/>
                <Button name={'Clear'} onClickCallback={clearMessage}/>
            </div>

            <ListSection
                messages={messages}
                deleteLastMessage={deleteLastMessage}
            />

        </div>

    );
};

export default MessageSender;