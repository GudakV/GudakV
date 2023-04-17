import React from 'react';

const Post = ({value}) => {
    return(
     <div>
         {
             <p>
                 id -{value.id}<br/>
             title -{value.title}<br/>

             </p>
         }



     </div>
    );
};
export default Post;