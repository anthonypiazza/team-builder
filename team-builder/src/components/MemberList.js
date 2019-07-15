import React from 'react';

import Member from './Member';

function MemberList(props){
    return(
        <div>
            {props.members.map((member,index) => <Member editMember={props.editMember}member={member} key={index} />)}
        </div>
    )
}

export default MemberList;