import React from 'react';

const Form = (props) => {

    return(
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Enter name here...'
                    name='name'
                    onChange={props.handleChange}
                />
                <input
                    type='text'
                    placeholder='Enter email here...'
                    name='email'
                    onChange={props.handleChange}
                />
                <input
                    type='text'
                    placeholder='Enter role here...'
                    name='role'
                    onChange={props.handleChange}
                />
                <button onClick={props.addMember} >Submit</button>
            </form>
        </div>
    )
}

export default Form;