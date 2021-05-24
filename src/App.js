import React, { useEffect, useState } from 'react';
import {Button, FormControl, Input} from '@material-ui/core'
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (event) => {

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    event.preventDefault();
    setTodos([...todos, input]);
    setInput('')
  }

  return (
    <div className="App">

      <h1 className="header">Todo App</h1>
      <form className="form">
        <input className="input" value={input} onChange={event => setInput(event.target.value)} />
        <button className="button" disabled={!input} type="submit" onClick={addTodo}>Add Todo</button>
      </form>
      <ul className="todos-list">
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>

    </div>
  );
}

export default App;
