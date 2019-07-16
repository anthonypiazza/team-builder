import React, {useState}from 'react';

const EditForm = props => {

    const changeHandler = e =>{
        props.setObject({ ...props.member, [e.target.name]: e.target.value })
    }

    return(
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Enter name here...'
                    name='name'
                    value={props.member.name}
                    onChange={changeHandler}
                />
                <input
                    type='text'
                    placeholder='Enter email here...'
                    name='email'
                    value={props.member.email}
                    onChange={changeHandler}
                />
                <input
                    type='text'
                    placeholder='Enter role here...'
                    name='role'
                    value={props.member.role}
                    onChange={changeHandler}
                />
            </form>
        </div>
    )
}
export default EditForm;