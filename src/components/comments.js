import React, {useEffect, useState} from 'react';
import Comment from "./comment";
import {Outlet} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments([...value]);
            });
    });
    return (
        <div>
            <div>
                <h4>Post Details</h4>
                <Outlet/>

            </div>
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
        </div>
    );
};

export default Comments;