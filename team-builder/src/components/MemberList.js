import React from 'react';

import Member from './Member';

function MemberList(props){
    return(
        <div>
            {props.members.map((member,index) => <Member setMembers={props.setMembers} member={member} key={index} />)}
        </div>
    )
}

export default MemberList;