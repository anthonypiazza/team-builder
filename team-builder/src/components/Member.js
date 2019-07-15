import React from 'react';

import './Member.css';

function Member(props){
    // console.log(props.member)
    return(
        <div key={props.id}>
            <h1>{props.member.user}</h1>
            <h2>{props.member.email}</h2>
            <h3>{props.member.role}</h3>
            <button onClick={() => props.editMember(props.member)}>Edit</button>
        </div>
    )
}

export default Member;