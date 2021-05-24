import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import db from './firebase'
import "./Todo.css";

function Todo(props) {

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const updateTodo = () => {

        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true })
        setOpen(false);
        setInput('');

    }

    return (
        <div className='todo-item'>
            <Modal className='modal'
                open={open}
                onClose={e => setOpen(false)}
            >
                <div>
                    <h1>Edit</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                    <button disabled={!input} onClick={updateTodo}>OK</button>

                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} />
                </ListItem>
                <button className='edit-button' onClick={e => setOpen(true)}>Edit</button>
                <button className='delete-button' onClick={event => { db.collection('todos').doc(props.todo.id).delete() }}>Delete</button>
            </List>
        </div>
    )
}

export default Todo
