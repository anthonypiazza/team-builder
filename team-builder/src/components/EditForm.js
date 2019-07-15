import React, { useEffect } from 'react';

const EditForm = (props) => {
    
    // useEffect(() => {
    //     props.set
    // },[props.memberToEdit])

    return(
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Enter name here...'
                    value={props.memberToEdit.user}
                    name='user'
                    onChange={props.handleChange}
                />
                <input
                    type='text'
                    placeholder='Enter email here...'
                    value={props.memberToEdit.email}
                    name='email'
                    onChange={props.handleChange}
                />
                <input
                    type='text'
                    placeholder='Enter role here...'
                    value={props.memberToEdit.role}
                    name='role'
                    onChange={props.handleChange}
                />
                <button onClick={props.editMember} >Submit</button>
            </form>
        </div>
    )
}

export default EditForm;