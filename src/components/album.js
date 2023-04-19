import React from 'react';

const Album = ({item}) => {
    return (
        <div>
            UserId - {item.userId}, Id - {item.id}, Title - {item.title}
        </div>
    );
};

export default Album;