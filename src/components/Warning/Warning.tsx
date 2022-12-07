import React from 'react';
import styles from './Warning.module.css'

type MessageType = {
    messagesNumber: number
    // isError: boolean
    // setIsError: (isError: boolean) => void
}

const MAX_MESSAGES_COUNT = 5
//todo: to props from app

const Warning: React.FC<MessageType> = (props) => {

    // props.setIsError(props.messagesNumber === MAX_MESSAGES_COUNT)

    const finalWarning = () => {
        if (props.messagesNumber === MAX_MESSAGES_COUNT) {
            return <div className={`${styles.warning} ${styles.redWarning}`}>Limit of messages is exceeded</div>
        } else {
            return <div className={styles.warning}>You can type {MAX_MESSAGES_COUNT - props.messagesNumber} messages
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