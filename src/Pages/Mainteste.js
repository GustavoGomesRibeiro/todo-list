import React, { useState } from 'react';
import '../Styles/Main.css';



const Main = () => {
const [ todo, setTodo ] = useState([
        { id:1, task:''}
    ]);
const [ input, setInput ] = useState('')

function handleSubmit(event, todo, setTodo, input, setInput) {
    event.preventDefault();
    // const id = (todo.length) ? todo[todo.length - 1].id + 1 : 0
    setTodo([...todo, {task: input}])
    setInput('')
}


    return (
        <>
            <form className='container-todoList' onSubmit={(event) => handleSubmit(event, todo, setTodo, input, setInput)} >
                <h1> Create your ToDo List </h1>
                <div className='container-components'>
                    <input
                        autoComplete="off"
                        // type='text'
                        // name='task'
                        // placeholder='Adicione uma nova Task'
                        value={input}
                        onChange={(event) => setInput(event.target.value)} 
                    />

                        <button type='submit'>
                             Adicionar nova Task
                        </button>
                </div>
                <ul>
                    {todo.map(todos => {
                        return <p key={todos.task}>{todos.task}</p>
                    })}
                </ul>
            </form>
        </>
    );

}

export default Main;