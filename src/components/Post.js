import React from 'react';

const Post = ({item}) => {
    return (
        <div>
            postId - {item.postId}, Id - {item.id}, Title - {item.title},
            body - {item.body}
        </div>
    );
};



export default Post;