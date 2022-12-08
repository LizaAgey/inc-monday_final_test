import React from 'react';
import Button from '../../Button/Button';
import MessageList from './MessageList/MessageList';
import {MessageType} from '../../../App';

export type ListSectionType = {
    messages: MessageType[]
    deleteLastMessage: ()=>void
}

const ListSection: React.FC<ListSectionType> = (props) => {
    return (
        <div>
            <Button name={'Delete the last message'} onClickCallback={props.deleteLastMessage}/>
            <MessageList messages={props.messages}/>
        </div>
    );
};

export default ListSection;