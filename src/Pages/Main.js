import React, { useState, useEffect } from 'react';
import '../Styles/Main.css';
import * as Icon from 'react-feather';


const Main = () => {
    const [todo, setTodo] = useState([
        { task: '', completed: false, edit: false }
    ])
    const [input, setInput] = useState('')
    const todosKey = 'todoList' 
    
    // setItem
    useEffect(() => {
        localStorage.setItem(todosKey, JSON.stringify(todo));
    }, [todo]);

    // getItem
    useEffect(() => {
        const storageTodo = JSON.parse(localStorage.getItem(todosKey));
        if (storageTodo) {
            setTodo(storageTodo);
        }
    }, [])

    function addItem(event, todo, setTodo, input, setInput) {
        event.preventDefault();
        setTodo([...todo, { task: input }])
        setInput('')

        // if( !todo.task ){
        //     alert('erro')
        // }
        console.log(todo);
    }

    function toggleCompleted(task) {
        setTodo(
            todo.map(todos => {
                if ( todos.task === task) {
                    return {
                        ...todos,
                        completed: !todos.completed
                    };
                }
                return todos;
            })
        )
    }
    
    function editItem(edit) {
        setTodo(!edit)
    }
    
    function clearItem(event){
        event.preventDefault();
        setTodo([]);
    }

    const deleteItem = (task) => {
        setTodo(todo.filter(todos => todos.task !== task))
    }




    return (
        <div className='container'>
            <form className='container-todoList'>
                <h1> Tasks </h1>
                <div className='container-components'>
                    <input
                        className='input-task'
                        autoComplete="off"
                        placeholder='   Adicione uma nova Task'
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <div className='container-button'>
                        <button type='submit' onClick={(event) => addItem(event, todo, setTodo, input, setInput)}>
                            Add Tasks
                        </button>
                        
                        <button type='submit' onClick={() => clearItem()}>
                            Clear Tasks
                        </button>
                    </div>
                </div>

                {todo.map((todos, i) => {
                    return (
                        <div className='container-result' key={i}>
                            <input type="checkbox" 
                            onClick={() => toggleCompleted(todos.task)}
                            // style={{ textDecoration: todos ? 'line-through' : ''}}
                            />
                            <p style={{ textDecoration: todos.completed  ? 'line-through black' : ''}}>{todos.task}</p>

                            <div className='container-svg'>
                                <Icon.Trash2 
                                className='svg'
                                color='#FFF'
                                onClick={() => deleteItem(todos.task)}
                                cursor='pointer'
                                />
                                <Icon.Edit2
                                className='svg'
                                color='#FFF'
                                onClick={() => editItem()}
                                cursor='pointer'
                                />
                            </div>
                        </div>
                    )
                })}
            </form>
        </div>
    );

}

export default Main;