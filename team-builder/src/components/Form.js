import React from 'react';

const Form = (props) => {

    return(
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Enter name here...'
                    value={props.newMember.user}
                    name='user'
                    onChange={props.handleChange}
                />
                <input
                    type='text'
                    placeholder='Enter email here...'
                    value={props.newMember.email}
                    name='email'
                    onChange={props.handleChange}
                />
                <input
                    type='text'
                    placeholder='Enter role here...'
                    value={props.newMember.role}
                    name='role'
                    onChange={props.handleChange}
                />
                <button onClick={props.addMember} >Submit</button>
            </form>
        </div>
    )
}

export default Form;