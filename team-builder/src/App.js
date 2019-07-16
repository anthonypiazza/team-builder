import React, { useState } from 'react';

import { team } from './team';
import Form from './components/Form.js';
import MemberList from './components/MemberList.js';


import './App.css';

function App() {

  const [members, setMembers] = useState(team);

  const [newMember, setNewMember] = useState({ name: '', email: '', role: '' });

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

  const editMember = (e) => {
    e.preventDefault();
    setMembers([ ...members, newMember ])
    console.log(newMember)
    console.log(members)
  }

  return (
    <div className="App">
      <Form 
        setNewMember={setNewMember}
        newMember={newMember}
        handleChange={handleChange}
        addMember={addMember} 
      />
      <MemberList members={members} setMembers={setMembers} />
    </div>
  );
}

export default App;
