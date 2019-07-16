import React, { useState } from 'react';
import EditForm from './EditForm';

import './Member.css';

function Member(props){
    // console.log(props.member)

    const [object, setObject] = useState(props.member)

    return(
        <div key={props.id}>
            <h1>{object.name}</h1>
            <h2>{object.email}</h2>
            <h3>{object.role}</h3>
            <EditForm setObject={setObject} member={object} />
        </div>
    )
}

export default Member;