import React, {useEffect, useState} from 'react';
import Todo from "./todo";

const Todos = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(value => {
                setTodo([...value]);
            });
    })

    return (
        <div>
            {
                todo.map(value => <Todo item={value} key={value.id}/>)
            }
        </div>
    );
};

export default Todos;