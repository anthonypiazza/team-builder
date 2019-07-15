import React, { useState } from 'react';

import { team } from './team';
import Form from './components/Form.js';
import MemberList from './components/MemberList.js';
import EditForm from './components/EditForm.js';


import './App.css';

function App() {

  const [members, setMembers] = useState(team);

  const [newMember, setNewMember] = useState({ user: '', email: '', role: '' });

  const [memberToEdit, setMemberToEdit] = useState({ user: '', email: '', role: '' });

  const [editing, setEditing] = useState(false)

  const handleChange = (e) => {
      setNewMember({ ...newMember, [e.target.name]: e.target.value })
      console.log(newMember)
  }

  const addMember = (e) => {
    e.preventDefault();
    setMembers([ ...members, newMember ])
    console.log(newMember)
    console.log(members)
  }

  const editMember = (e, editedUser) => {
    e.preventDefault();
    setEditing(true)
    setMemberToEdit({ user: editedUser.id, email: editedUser.email, role: editedUser.role})
    console.log(memberToEdit);
  }

  return (
    <div className="App">
      <Form 
        setNewMember={setNewMember}
        newMember={newMember}
        handleChange={handleChange}
        addMember={addMember} 
      />
      <MemberList members={members} editMember={editMember} />
      <EditForm memberToEdit={memberToEdit} editMember={editMember} />
    </div>
  );
}

export default App;
