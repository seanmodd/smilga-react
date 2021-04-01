import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { MyText } from '../../../MyHeading';
// reducer function

const Index = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName('');
    } else {
      showModal(true);
    }
  };
  return (
    <>
      <MyText>useReducer</MyText>
      {showModal && <Modal />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit">add</button>
      </form>
      {people.map((person) => (
        <div key={person.id}>
          <MyText>{person.name}</MyText>
        </div>
      ))}
    </>
  );
};

export default Index;
