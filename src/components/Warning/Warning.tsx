import React from 'react';
import styles from './Warning.module.css'

type MessageType = {
    messagesNumber: number
    maxMessageCount: number
}

const Warning: React.FC<MessageType> = (props) => {

    const finalWarning = () => {
        if (props.messagesNumber === props.maxMessageCount) {
            return <div className={`${styles.warning} ${styles.redWarning}`}>Limit of messages is exceeded</div>
        } else {
            return <div className={styles.warning}>You can type {props.maxMessageCount - props.messagesNumber} messages
                more</div>
        }
    };

    return (
        <>
            {finalWarning()}
        </>
    );
};

export default Warning;