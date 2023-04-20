import React from 'react';
import {useNavigate} from "react-router-dom";


const Comment = ({item}) => {
    let navigate = useNavigate();
    return (
        <div>
            <ul>
                <li>
                    postId - {item.postId}
                </li>
                <li>
                    Id - {item.id}
                </li>
                <li>
                    Name - {item.name}
                </li>
                <li>
                    Email - {item.email}
                </li>
                <li>
                    Body - {item.body}
                </li>
                <button onClick={() => {
                navigate(item.id.toString());
                }}>Post Details</button>
            </ul>
        </div>
    );
};

export default Comment;