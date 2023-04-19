import React from 'react';


const Todo = ({item}) => {
    return (
        <div>
            userId - {item.userId}, Id - {item.id}, title - {item.title}, completed - {item.completed.toString()}
        </div>
    );
};

export default Todo;