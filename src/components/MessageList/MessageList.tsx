import React from 'react';
import {MessageType} from '../../App';
import styles from "./MessageList.module.css"

type MessageList = {
    messages: Array<MessageType>
}

const MessageList: React.FC<MessageList> = (props) => {
    const mappedMessages = props.messages.map(element => <div key={element.id} className={styles.message}>{element.text}</div>)

    return (
        <div>
            {mappedMessages}
        </div>
    );
};

export default MessageList;