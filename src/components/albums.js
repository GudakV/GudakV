import React, {useEffect, useState} from 'react';
import Album from "./album";


const Albums = () => {
    const [album, setAlbum] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(value => {
                setAlbum([...value]);
            });
    })

    return (
        <div>
            {
                album.map(value => <Album item={value} key={value.id}/>)
            }
        </div>
    );
};

export default Albums;