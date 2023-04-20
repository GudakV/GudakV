import React from 'react';


const Todo = ({item}) => {
    return (
        <div>
            UserId - {item.userId}, Id - {item.id}, Title - {item.title},
            <ul>
                <li>
                    Completed - {item.completed.toString()}
                </li>
            </ul>
        </div>
    );
};

export default Todo;