import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import MessageSender from './components/MessageSender/MessageSender';

export type MessageType = {
    id: number,
    text: string
}

function App() {
    return (
        <div className={'App'}>
            <MessageSender/>
            <Counter/>
        </div>
    );
}

export default App;
